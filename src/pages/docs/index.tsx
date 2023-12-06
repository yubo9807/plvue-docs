import { PagePropsType, Router, Route, Link, GetInitialPropsOption, useRouter, useRoute } from "pl-vue/lib/router";
import { h, onMounted, ref } from "pl-vue";
import { joinClass } from "@/utils/string";
import { api_getDocsConfig, api_getDocsContent } from "@/api/docs";
import style from "./style.module.scss";
import "./markdown.scss";

function Docs(props: PagePropsType) {

  onMounted(() => {
    const route = useRoute();
    const router = useRouter();
    if (props.data[0] && !route.path.replace(props.path, '')) {
      router.replace(props.path + '/' + props.data[0].value);
    }
  })

  return <div className={joinClass('leayer', style.container)}>
    <ul className={() => joinClass(style.side)}>
      {props.data.map(val => 
        <li>
          <Link to={`${props.path}/${val.value}`}>{val.label}</Link>
        </li>
      )}
    </ul>
    <Router prefix={props.path}>
      {...props.data.map(item => 
        <Route path={'/' + item.value} component={cloneFunction(Content)} />
      )}
    </Router>
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
  const list = [];
  if (err) return list;

  const obj = JSON.parse(res.data.content);
  for (const key in obj) {
    list.push({ label: obj[key], value: key });
  }
  return list;
}


function Content(props: PagePropsType) {
  const mdRef = ref<HTMLElement>();

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
    <div innerHTML={props.data}></div>
  </div>
}

Content.prototype.getInitialProps = async (option: GetInitialPropsOption) => {
  const [err, res] = await api_getDocsContent(`/plvue${option.path.replace('/docs', '')}.md`)
  if (err) return '';
  return res.data.content;
}

export default Docs;
