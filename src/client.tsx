import { h, render } from "pl-vue";
import App from "./app";

const root = document.getElementById('root')
root.innerHTML = '';
root.appendChild(render(<App />));
