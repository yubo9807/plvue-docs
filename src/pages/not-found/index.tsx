import { h } from "pl-vue";
import style from './style.module.scss';
import { Link } from "pl-vue/lib/router";

export default function NotFound() {
  // return <Redirect to="/" />
  return <div className={style.pageNotFound}>
    <strong>404</strong>
    <p>
      <Link to="/">&lt;- 回到首页</Link>
    </p>
  </div>
}
