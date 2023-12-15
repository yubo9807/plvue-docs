import { PagePropsType, Router, Route, Link, useRouter, useRoute } from "pl-vue/lib/router";
import { h, nextTick, onMounted, onUnmounted, ref, watch } from "pl-vue";
import useStoreFixedBtns from '@/store/fixed-btns';
import { joinClass } from "@/utils/string";
import { api_getDocsConfig } from "@/api/docs";
import style from "./style.module.scss";
import Content from "./content";
import "@/styles/markdown.scss";

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

  const active  = ref('');     // 侧边栏高亮
  const visible = ref(false);  // 移动端侧边栏显示

  let unwatch = null;
  onMounted(() => {
    const route  = useRoute();
    const router = useRouter();

    // 路由发生变化
    unwatch = watch(() => route.path, value => {
      const type = value.replace(props.path, '');

      // 重定向
      if (!type || !(type.slice(1) in props.data)) {
        nextTick(() => {
          router.replace(props.path + '/' + list[0].value);
        })
        return;
      }

      // 设置高亮
      active.value = type.slice(1);
    }, { immediate: true })
  })
  onUnmounted(() => {
    unwatch();
  });



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
