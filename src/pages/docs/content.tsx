import { PagePropsType, GetInitialPropsOption, Helmet } from "pl-vue/lib/router";
import { h, onMounted, ref, render } from "pl-vue";
import { joinClass } from "@/utils/string";
import { api_getDocsContent } from "@/api/docs";
import style from "./style.module.scss";
import { backupConfig } from ".";
import { copyToBoard } from "@/utils/browser";
import Message from "@/components/message";

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
      const el = render(<span className={style.copy} onclick={() => {
        copyToBoard(codeStr);
        Message.success('复制成功');
      }}>copy</span>);
      val.parentElement.appendChild(el);
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

export default Content;
