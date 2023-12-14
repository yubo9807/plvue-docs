import { createStore } from 'pl-vue/lib/store';

export type Theme = 'light' | 'dark' | 'OS';

const state = {
  theme: 'light' as Theme,  // 系统主题

  clientWidth: 0,  // 视口宽
  scrollY:     0,  // 纵向滚动条位置
}

const actions = {
  setTheme(theme: Theme) {
    state.theme = theme;
  },

  setClientWidth(width: number) {
    state.clientWidth = width;
  },

  setScrollY(scrollY: number) {
    state.scrollY = scrollY;
  },
}

export default createStore(state, actions);
