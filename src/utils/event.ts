
/**
 * 注册容器外部事件
 * @param els 第一项为目标元素，后续为排除元素
 * @param callback 
 * @param eventName 
 * @returns
 */
export function withoutEvent(els: HTMLElement[], callback: Function, eventName = 'click') {
  function func(e: MouseEvent) {
    let node = e.target as HTMLElement;
    while(node) {
      if (els.includes(node)) return;
      if (node === document.body) break;  // 未找到
      node = node.parentNode as HTMLElement;
    }
    if (node !== els[0]) {
      callback();
      document.removeEventListener(eventName, func);
    }
  }
  setTimeout(() => {
    document.addEventListener(eventName, func);
  })
  return func;
}
