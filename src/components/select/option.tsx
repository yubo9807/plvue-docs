import { h } from "pl-vue";
import { PropsType } from "pl-vue/lib/router";

export type OptionValue = string | number | symbol
type Props = PropsType<{
  label: string
  value: OptionValue
} & {
  [k: string]: any
}>
export default function(props: Props) {
  return <option selected={props.selected} value={props.value}>{props.label}</option>
}