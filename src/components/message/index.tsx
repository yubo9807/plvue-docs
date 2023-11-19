import './module.scss';
import { joinClass } from "@/utils/string";
import { h, onMounted, ref, render } from "pl-vue";
import { PropsType } from "pl-vue/lib/router";
import { delay } from "@/utils/network";
import { isBrowser } from "pl-vue/lib/utils";

const queue = new Set();
const ANI_TIME = 400;
const SORT     = '--sort';

type Props = PropsType<{
  message:   string
  type:      'info' | 'success' | 'error' | 'warning'
  duration?: number | null
}>
function Comp(props: Props) {

  const hidden   = ref(true);
  const elRef    = ref<HTMLElement>();
  let   timer    = null;

  const id = Symbol('id');
  queue.add(id);

  onMounted(async () => {
    await delay(100);
    hidden.value = false;
    anewClose();
  })

  async function close() {
    hidden.value = true;
    await delay(ANI_TIME);
    queue.delete(id);
    if (queue.size === 0) {
      wrapEl.remove();
    } else {
      const styles = window.getComputedStyle(elRef.value);
      const index = Number(styles.getPropertyValue(SORT));
      elRef.value.remove();
      [...wrapEl.children].forEach((val: HTMLElement) => {
        const styles = window.getComputedStyle(val);
        const sort = Number(styles.getPropertyValue(SORT));
        val.style.setProperty(SORT, `${sort > index ? sort - 1 : sort}`);
      })
    }
  }

  function cancelClose() {
    clearTimeout(timer);
    hidden.value = false;
  }
  
  function anewClose() {
    if (props.duration === null) return;
    timer = setTimeout(close, props.duration || 4000);
  }

  return <div
    ref={elRef}
    className={() => joinClass('comp-message', props.type, hidden.value && 'hidden')}
    style={`--animation-time: ${ANI_TIME / 1000}; --sort: ${queue.size - 1}`}
    onmouseenter={cancelClose}
    onmouseout={anewClose}
  >
    {props.message}
    <span className='icon-close' onclick={close}>×</span>
  </div>
}

let wrapEl: HTMLElement = null;
function Message(config: Props) {
  if (!isBrowser()) return;
  const el = render(<Comp {...config} />);
  wrapEl ??= render(<div className='comp-message-wrap'></div>);
  wrapEl.appendChild(el);
  document.body.appendChild(wrapEl);
}

Message.info = (message: string) => Message({ message, type: 'info' });
Message.success = (message: string) => Message({ message, type: 'success' });
Message.error = (message: string) => Message({ message, type: 'error' });
Message.warning = (message: string) => Message({ message, type: 'warning' });
Message.closeAll = async () => {
  if (!isBrowser() && !wrapEl) return;
  [...wrapEl.children].forEach(val => {
    val.classList.add('hidden');
    val.remove();
  })
  queue.clear();
  wrapEl.remove();
}

export default Message;
