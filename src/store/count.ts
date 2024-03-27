import { defineStore } from "pl-vue/lib/store";

const state = {
  count: 0,
}

const actions = {
  setCount(num: number) {
    state.count = num;
  },
}

export default defineStore({state, actions});
