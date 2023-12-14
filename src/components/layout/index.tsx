import style from './style.module.scss';
import { h, Fragment, PropsType } from "pl-vue";
import Header from "./header";
import Footer from "./footer";
import FixedBtns from './fixed-btns';
export default function Layout(props: PropsType<{}>) {
  return <>
    <Header />
    <main className={style.main}>
      {props.children}
    </main>
    <Footer />
    <FixedBtns />
  </>
}
