import { Tree } from "pl-vue";
import { createStore } from "pl-vue/lib/store"

type Key = string | symbol
type BtnItem = {
  key:  Key
  ele:  Tree
  sort: number
}

const state = {
  list: [] as BtnItem[],
}

const actions = {
  add(key: Key, ele: Tree, sort: number) {
    const index = state.list.findIndex(item => item.key === key);
    if (index >= 0) return;
    state.list.push({ key, ele, sort });
  },

  delete(key: Key) {
    const index = state.list.findIndex(item => item.key === key);
    if (index < 0) return;
    state.list.splice(index, 1);
  }
}

export default createStore(state, actions);
