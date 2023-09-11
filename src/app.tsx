import './styles/index.scss';
import { h, Router, createRouter } from "pl-vue";
import env from '~/config/env';
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
  return <Router />
}

export default App;
