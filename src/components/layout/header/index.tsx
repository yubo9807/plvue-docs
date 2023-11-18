import { h } from "pl-vue";
import { Link } from "pl-vue/lib/router";
import style from './style.module.scss';
import env from "~/config/env";
import useStoreViewport, { Theme } from '@/store/viewport';
import Select from "@/components/select";
import Option from "@/components/select/option";

export default function() {

  const storeViewport = useStoreViewport();
  function switchChange(val: Theme) {
    storeViewport.setTheme(val);
  }

  return <header className={style.header}>
    <div>
      <Link to="/">
        <h1>Pl Vue</h1>
      </Link>
    </div>
    <nav className={style.navigation}>
      <Select className={() => style.item} value={() => storeViewport.theme} onChange={switchChange}>
        <Option label="跟随系统" value="OS" />
        <Option label="亮色主题" value="light" />
        <Option label="暗色主题" value="dark" />
      </Select>
      <Link className={style.item} to='/docs'>文档</Link>
      <a className={style.item} href={env.GITHUB_URL+'mvvm_vue3'} target="_blank">GitHub</a>
    </nav>
  </header>
}