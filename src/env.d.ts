import { IntrinsicElements as PlVueIntrinsicElements } from 'pl-vue/lib/jsx';

declare global {
  namespace JSX {
    interface IntrinsicElements extends PlVueIntrinsicElements {}
  }
}
