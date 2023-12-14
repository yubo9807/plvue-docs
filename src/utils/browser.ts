
/**
 * 滚动条、锚链接（记得取消 a 标签默认事件）跳转过渡  默认回到顶部
 * @param el 元素节点
 */
export function scrollTo(el: HTMLElement = document.documentElement) {
  const num = el.offsetTop || 0;
  window.scrollTo({
    top: num,
    behavior: "smooth",
  });
}
