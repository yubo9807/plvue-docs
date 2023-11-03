import './styles/index.scss';
import { h } from "pl-vue";
import { Router, createRouter } from 'pl-vue/lib/router';
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
  return <Layout>
    <Router />
  </Layout>
}

export default App;
