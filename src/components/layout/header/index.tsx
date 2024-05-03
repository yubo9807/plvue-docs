import { h, ref, watch } from "pl-vue";
import { Link } from "pl-vue/lib/router";
import style from './style.module.scss';
import env from "~/config/env";
import useStoreViewport, { Theme } from '@/store/viewport';
import Select from "@/components/select";
import Option from "@/components/select/option";
import app from "@/basic";
import { withoutEvent } from "@/utils/event";

export default function() {

  const storeViewport = useStoreViewport();
  function switchChange(val: Theme) {
    storeViewport.setTheme(val);
  }

  const navRef = ref<HTMLElement>();
  const openNavRef = ref<HTMLElement>();
  const navVisible = ref(false);

  let navWithoutClickFunc: ReturnType<typeof withoutEvent> = null;
  /**
   * 展开/收起导航栏
   */
  function handleNavVisible() {
    if (navVisible.value) {
      navVisible.value = false;
      navWithoutClickFunc && document.removeEventListener('click', navWithoutClickFunc);
    } else {
      navVisible.value = true;
      navWithoutClickFunc = withoutEvent([navRef.value, openNavRef.value], () => {
        navVisible.value = false
      });
    }
  }

  return <header className={style.header}>
    <div>
      <Link to="/">
        <strong className={style.title}>Pl Vue</strong>
      </Link>
    </div>
    <nav ref={navRef} className={[style.navigation, () => navVisible.value && style.active]}>
      <a>v{app.version}</a>
      <a>
        <Select model={storeViewport.theme} onChange={switchChange}>
          <Option label="跟随系统" value="OS" />
          <Option label="亮色主题" value="light" />
          <Option label="暗色主题" value="dark" />
        </Select>
      </a>
      <Link to='/docs' onClick={(to, next) => {
        handleNavVisible();
        next();
      }}>文档</Link>
      <a href={env.GITHUB_URL+'pl-vue'} target="_blank">GitHub</a>
    </nav>
    <span ref={openNavRef} className={style.open} onclick={handleNavVisible}></span>
  </header>
}