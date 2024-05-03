import { PagePropsType, GetInitialPropsOption, Helmet, useRouter, useRoute } from "pl-vue/lib/router";
import { h, onMounted, ref, shallowBestRef } from "pl-vue";
import { api_getDocsContent } from "@/api/docs";
import style from "./style.module.scss";
import { backupConfig } from ".";
import { copyToBoard, scrollTo } from "@/utils/browser";
import Message from "@/components/message";
import app from "@/basic";

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
    import('@/styles/highlight.scss');
    const hljs = (await import('highlight.js/lib/common')).default;

    // 代码高亮
    const codeList = mdRef.value.querySelectorAll('pre code');
    codeList.forEach((val: HTMLElement) => {
      const codeStr = val.innerText;
      hljs.highlightElement(val);
      const el = app.render(<span className={style.copy} onclick={() => {
        copyToBoard(codeStr);
        Message.success('复制成功');
      }}>copy</span>);
      val.parentElement.appendChild(el);
    })
  })


  // #region 滚动定位
  const route = useRoute();
  const router = useRouter();
  const contentRef = ref<HTMLElement>();
  const outlineList = shallowBestRef<{ id: string, text: string, rank: number }[]>([]);

  function jumpScrollTo(el: string | HTMLElement) {
    if (typeof el === 'string') {
      el = document.getElementById(el);
    }
    if (!el) return;
    scrollTo(el, -60);
  }

  onMounted(() => {
    setTimeout(() => {
      jumpScrollTo(decodeURI(route.hash).replace('#', ''));
    }, 100);

    const arr = [2, 3, 4, 5, 6].map((val) => `h${val}`);
    const nodes = contentRef.value.querySelectorAll(arr.join());
    const list = [];
    [...nodes].forEach((val: HTMLElement) => {
      list.push({ id: val.id, text: val.innerText, rank: val.tagName.slice(1) });
      const linkIcon = app.render(<i className={style.link} onclick={() => {
        jumpScrollTo(val);
        router.replace({ hash: `${val.id}` });
      }}>#</i>)
      val.appendChild(linkIcon);
    })
    outlineList.value = list;
  })
  // #endregion


  return <div ref={mdRef} className={style.content}>
    <Helmet>
      <title>{() => helmet.title + ' | Pl Vue'}</title>
      <meta name='description' content={() => helmet.description} />
    </Helmet>
    <section ref={contentRef} className={['markdown', style.md]} innerHTML={props.data.content}></section>
    <aside className={style.outline}>
      <ul>{() => outlineList.value.map(val =>
        <li style={`--rank: ${val.rank - 2}`} onclick={() => jumpScrollTo(val.id)}>{val.text}</li>)}
      </ul>
    </aside>
  </div>
}

Content.prototype.getInitialProps = async (option: GetInitialPropsOption) => {
  const key = option.path.replace('/docs/', '');
  const [err, res] = await api_getDocsContent(`/plvue/${key}.md`);
  const result = {
    config: backupConfig,
    content: '',
  }
  if (err) return result;

  const title = backupConfig[key];
  result.content = `<h1>${title}</h1>${res.data.content}`;
  return result;
}

export default Content;
