import { createApp } from "pl-vue";
import { createRouter } from "pl-vue/lib/router";
import env from "~/config/env";

const router = createRouter({
  base: env.BASE_URL,
  // mode: 'hash',
});

const app = createApp();
app.use(router);

export default app;