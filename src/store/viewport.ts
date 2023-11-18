import { createStore } from 'pl-vue/lib/store';

export type Theme = 'light' | 'dark' | 'OS';

const state = {
  theme: 'light' as Theme,
}

const actions = {
  setTheme(theme: Theme) {
    state.theme = theme;
  }
}

export default createStore(state, actions);
