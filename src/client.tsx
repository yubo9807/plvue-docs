import { h } from "pl-vue";
import app from './basic'
import App from './app';

const node = app.render(<App />);
const root = document.getElementById('root')
root.innerHTML = '';
root.appendChild(node);
