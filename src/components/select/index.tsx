import { h } from "pl-vue";
import { PropsType } from "pl-vue/lib/router";
import { OptionValue } from "./option";
import './module.scss';
import { joinClass } from "@/utils/string";

type Props = PropsType<{
  value: () => OptionValue
  onChange?: (val: OptionValue) => void
  className?: () => string
}>
export default function(props: Props) {

  props.children.forEach(val => {
    val.attrs.selected = () => props.value() === val.attrs.value;
  })

  function handleChange(e) {
    const val = e.target.value;
    props.onChange && props.onChange(val);
  }

  return <select className={joinClass('comp-select', props.className && props.className())} onchange={handleChange}>
    {props.children}
  </select>
}