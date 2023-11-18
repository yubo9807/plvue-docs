import './styles/index.scss';
import { h, onMounted, watch } from "pl-vue";
import { Router, createRouter } from 'pl-vue/lib/router';
import useStoreViewport, { Theme } from './store/viewport';
import env from '~/config/env';
import Layout from './components/layout';
import Home from './pages/home';
import Docs from './pages/docs';
import NotFound from "./pages/not-found";

const router = createRouter({
  base: env.BASE_URL,
  mode: 'hash',
  routes: [
    { path: '/', component: Home, },
    { path: '/docs', component: Docs, exact: false, },
    { component: NotFound, },
  ]
});


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
        document.documentElement.dataset.theme = storeViewport.theme;
        prefers.removeEventListener('change', followOS);
      }
    }, { immediate: true })
    
  })
  // #endregion

  return <Layout>
    <Router />
  </Layout>
}

export default App;
