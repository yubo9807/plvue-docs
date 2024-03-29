import { PagePropsType, Router, Route, Link } from "pl-vue/lib/router";
import { h, onMounted, onUnmounted, ref } from "pl-vue";
import useStoreFixedBtns from '@/store/fixed-btns';
import { api_getDocsConfig } from "@/api/docs";
import style from "./style.module.scss";
import Content from "./content";
import "@/styles/markdown.scss";
import Loading from "@/components/loading";
import { delay } from "@/utils/network";

export let backupConfig = null;

function Docs(props: PagePropsType) {
  backupConfig = props.data;
  onUnmounted(() => {
    backupConfig = null;
  })

  const list = [];
  for (const prop in props.data) {
    list.push({ label: props.data[prop], value: prop });
  }

  const visible = ref(false);  // 移动端侧边栏显示

  // #region 移动端侧边栏按钮
  const storeFixedBtns = useStoreFixedBtns();
  const sideBtn = Symbol('side_btn')
  onMounted(() => {
    const jsx = <li
      className={style.showSide}
      onclick={() => visible.value = !visible.value}
    >〒</li>
    storeFixedBtns.add(sideBtn, jsx, 1);
  })
  onUnmounted(() => {
    storeFixedBtns.delete(sideBtn);
  })
  // #endregion

  return <div className={['leayer', style.container]}>
    <ul className={() => [style.side, visible.value && style.active]} onclick={() => visible.value = false}>
      {list.map(val => 
        <li>
          <Link to={`${props.path}/${val.value}`}>{val.label}</Link>
        </li>
      )}
    </ul>
    <Router prefix={props.path} loading={Loading}>
      <Route path='' redirect={props.path + '/' + list[0].value} component={() => void 0} />
      {...list.map(item => 
        <Route path={'/' + item.value} component={cloneFunction(Content)} />
      )}
    </Router>
  </div>
}

Docs.prototype.getInitialProps = async () => {
  const [err, res] = await api_getDocsConfig();
  if (err) return {};

  const config = JSON.parse(res.data.content);
  backupConfig = config;
  return config;
}

export default Docs;

function cloneFunction(fn: Function) {
  const newFn = function (...args) {
    return fn.apply(this, args);
  }
  newFn.prototype = fn.prototype;
  return newFn;
}
