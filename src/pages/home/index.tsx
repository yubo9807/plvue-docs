import style from './style.module.scss';
import { h } from 'pl-vue';
import { Helmet, Link } from 'pl-vue/lib/router';
import { joinClass } from "@/utils/string";
import env from "~/config/env";

function Home() {

  const description = 'Pl Vue 是一个将响应式数据的使用高度交予开发者决定的一个库，它不依赖于任何第三方库。该库提供了组件化、挂载钩子、Router、Store 以及服务端渲染相关 API。';

  return <div>
    <Helmet>
      <title>首页 | Pl Vue</title>
      <meta name='description' content={description} />
    </Helmet>
    <div className={style.banner}>
      <div className={style.box}>
        <div className={style.bg}>
          <strong>Pl Vue</strong>
          <p>一个 JS 库，只关心数据与函数之间的联动</p>
        </div>
        <Link className={style.btn} to='/docs/reactivity'>API 参考</Link>
      </div>
    </div>

    <article className={joinClass('leayer', 'module-gap', style.article)}>
      <p className={style.paragraph}>
        {description}项目搭建可参考 
        &nbsp;<a href={env.GITHUB_URL+'mvvm_vue3'}>GitHub</a>
        。
      </p>
      <p className={style.mark}>该库本身与 Vue 框架无任何关系，只是多数 API 在命名上相同而已。</p>
    </article>

    <ul className={joinClass('leayer', 'module-gap', style.peculiarity)}>
      <li>
        <h2>响不响应式的，高度交予开发者决定</h2>
        <p>
          JSX 编程方式，响应式数据统一使用函数的方式包裹。可以规避一些响应式数据滥用，在一定程度上优化了性能。
          <Link to='/docs/property'>了解更多</Link>
        </p>
      </li>
      <li>
        <h2>无虚拟 DOM 参与</h2>
        <p>将用到响应式数据的函数进行收集，在数据更新后执行相应的函数。因此直接省去了节点的比较。</p>
      </li>
      <li>
        <h2>最接近原生应用的开发方式</h2>
        <p>无论是属性、事件绑定、还是动态加载，都与原生应用毫无差别。</p>
      </li>
      <li>
        <h2>代码精简，minify &lt; 20k</h2>
        <p>手写 h 与 Fragment，将代码体积精简到极致。</p>
      </li>

    </ul>
  </div>
}

export default Home;
