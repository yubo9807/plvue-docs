
/**
 * 滚动条、锚链接（记得取消 a 标签默认事件）跳转过渡  默认回到顶部
 * @param el 元素节点
 */
export function scrollTo(el: HTMLElement = document.documentElement, skew = 0) {
  const num = el.offsetTop || 0;
  window.scrollTo({
    top: num + skew,
    behavior: "smooth",
  });
}

/**
 * 劫持粘贴板
 * @param text 需要复制的字符
 */
export function copyToBoard(text: string) {
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}
