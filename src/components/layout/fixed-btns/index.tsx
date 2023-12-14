import style from './style.module.scss';
import useStoreFixedBtns from '@/store/fixed-btns';
import useStoreViewport from '@/store/viewport';
import { scrollTo } from '@/utils/browser';
import { computed, h, onMounted, ref, watch } from "pl-vue";
import { deepClone } from 'pl-vue/lib/utils';

export default function () {

  const storeFixedBtns = useStoreFixedBtns();
  const btns = computed(() => {
    const newArr = deepClone(storeFixedBtns.list).sort((a, b) => b.sort - a.sort);
    return newArr.map(item => item.ele)
  });

  onMounted(() => {
    const hidden = ref(true);

    const jsx = <li
      style={{ display: () => hidden.value ? 'block' : 'none' }}
      onclick={scrollTo}
    >⬆︎</li>

    storeFixedBtns.add(Symbol('to_top'), jsx, 0);

    const storeViewport = useStoreViewport();
    watch(() => storeViewport.scrollY, value => {
      hidden.value = value > 40;
    }, { immediate: true });
  })

  return <ul className={style.fixedBtns}>
    {() => btns.value}
  </ul>
}
