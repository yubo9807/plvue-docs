import style from './style.module.scss';
import { h, Fragment } from "pl-vue";
import { PropsType } from "pl-vue/lib/router";
import Header from "./header";
import Footer from "./footer";

export default function Layout(props: PropsType<{}>) {
  return <>
    <Header />
    <main className={style.main}>
      {props.children}
    </main>
    <Footer />
  </>
}
