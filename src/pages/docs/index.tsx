import { PagePropsType, Router, Route, Link, GetInitialPropsOption, useRouter, useRoute, Helmet } from "pl-vue/lib/router";
import { h, onMounted, onUnmounted, ref, watch } from "pl-vue";
import { joinClass } from "@/utils/string";
import { api_getDocsConfig, api_getDocsContent } from "@/api/docs";
import style from "./style.module.scss";
import "./markdown.scss";

let backupConfig = null;

function Docs(props: PagePropsType) {
  backupConfig = props.data;
  onUnmounted(() => {
    backupConfig = null;
  })

  const list = [];
  for (const prop in props.data) {
    list.push({ label: props.data[prop], value: prop });
  }

  const active = ref<string>('');  // 侧边栏高亮
  const visible = ref(false);      // 移动端侧边栏显示

  onMounted(() => {
    const route = useRoute();
    const router = useRouter();

    // 重定向
    if (list[0] && !route.path.replace(props.path, '')) {
      router.replace(props.path + '/' + list[0].value);
    }

    // 路由发生变化
    watch(() => route.path, value => {
      active.value = value.replace(props.path + '/', '');
    }, { immediate: true })
  })

  return <div className={joinClass('leayer', style.container)}>
    <ul className={() => joinClass(style.side, visible.value ? style.active : '')} onclick={() => visible.value = false}>
      {list.map(val => 
        <li className={() => active.value === val.value && style.active}>
          <Link to={`${props.path}/${val.value}`}>{val.label}</Link>
        </li>
      )}
    </ul>
    <Router prefix={props.path}>
      {...list.map(item => 
        <Route path={'/' + item.value} component={cloneFunction(Content)} />
      )}
    </Router>
    <div className={() => joinClass(style.showSide, visible.value ? style.active : '')} onclick={() => visible.value = !visible.value}></div>
  </div>
}

function cloneFunction(fn: Function) {
  const newFn = function (...args) {
    return fn.apply(this, args);
  }
  newFn.prototype = fn.prototype;;
  return newFn;
}



Docs.prototype.getInitialProps = async () => {
  const [err, res] = await api_getDocsConfig();
  if (err) return {};

  const config = JSON.parse(res.data.content);
  backupConfig = config;
  return config;
}


function Content(props: PagePropsType) {
  const mdRef = ref<HTMLElement>();

  const helmet = {
    title: props.data.config[props.path.split('/').pop()],
    description: '',
  }
  const matched = props.data.content.match(/<p>(.+)<\/p>/)
  if (matched) {
    helmet.description = matched[1].replace(/<[^>]+>/g, '');
  }

  onMounted(async () => {
    import('highlight.js/styles/base16/decaf.css');
    const hljs = (await import('highlight.js/lib/common')).default;

    // 代码高亮
    const codeList = mdRef.value.querySelectorAll('pre code');
    codeList.forEach((val: HTMLElement) => {
      hljs.highlightElement(val);
    })
  })

  return <div ref={mdRef} className={joinClass(style.content, 'markdown')}>
    <Helmet>
      <title>{() => helmet.title + ' | Pl Vue'}</title>
      <meta name='description' content={() => helmet.description} />
    </Helmet>
    <div innerHTML={props.data.content}></div>
  </div>
}

Content.prototype.getInitialProps = async (option: GetInitialPropsOption) => {
  const [err, res] = await api_getDocsContent(`/plvue${option.path.replace('/docs', '')}.md`);
  const result = {
    config: backupConfig,
    content: '',
  }
  if (err) return result;

  result.content = res.data.content;
  return result;
}

export default Docs;
