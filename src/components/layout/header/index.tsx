import { h, Fragment, Link } from "pl-vue";
import style from './style.module.scss';
import env from "~/config/env";

export default function() {
  return <header className={style.header}>
    <div>
      <Link to="/">
        <h1>Pl Vue</h1>
      </Link>
    </div>
    <nav className={style.navigation}>
      <Link to='/docs'>文档</Link>
      <a href={env.GITHUB_URL+'mvvm_vue3'} target="_blank">GitHub</a>
    </nav>
  </header>
}