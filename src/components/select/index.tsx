import { h, PropsType } from "pl-vue";
import { OptionValue } from "./option";
import './module.scss';

type Props = PropsType<{
  value: () => OptionValue
  onChange?: (val: OptionValue) => void
  className?: string
}>
export default function(props: Props) {

  props.children.forEach(val => {
    val.attrs.selected = () => props.value() === val.attrs.value;
  })

  function handleChange(e) {
    const val = e.target.value;
    props.onChange && props.onChange(val);
  }

  return <select className={['comp-select', props.className]} onchange={handleChange}>
    {props.children}
  </select>
}