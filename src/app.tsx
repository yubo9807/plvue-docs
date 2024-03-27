import './styles/index.scss';
import { h, onMounted, watch } from "pl-vue";
import { Router, Route } from 'pl-vue/lib/router';
import useStoreViewport, { Theme } from './store/viewport';
import Layout from './components/layout';
import NotFound from "./pages/not-found";
import { throttle } from './utils/optimize';



function App() {
  // #region 设置主题颜色
  const storeViewport = useStoreViewport();
  const THEME_KEY = '__theme__';

  onMounted(() => {
    storeViewport.setTheme(localStorage.getItem(THEME_KEY) as Theme || 'OS');
    const prefers = matchMedia('(prefers-color-scheme: dark)');
    function followOS() {
      document.documentElement.dataset.theme = prefers.matches ? 'dark' : 'light';
    }
    watch(() => storeViewport.theme, value => {
      localStorage.setItem(THEME_KEY, value);
      if (value === 'OS') {
        followOS();
        prefers.addEventListener('change', followOS);
      } else {
        document.documentElement.dataset.theme = value;
        prefers.removeEventListener('change', followOS);
      }
    }, { immediate: true })
  })
  // #endregion

  onMounted(() => {
    const bodyEl = document.body;
    storeViewport.setClientWidth(bodyEl.clientWidth);
    window.addEventListener('resize', throttle(() => {
      storeViewport.setClientWidth(bodyEl.clientWidth);
    }, 60))

    window.addEventListener('scroll', throttle(() => {
      const scrollY = window.scrollY;
      storeViewport.setScrollY(scrollY);
    }, 30))
  })

  return <Layout>
    <Router notFound={NotFound}>
      <Route path='/docs' component={() => import('./pages/docs')} exact={false} />
      <Route path='/' component={() => import('./pages/home')} />
    </Router>
  </Layout>
}

export default App;
