import { h, PropsType } from "pl-vue"
import './module.scss'
import { joinClass } from "@/utils/string"

type Props = PropsType<{
  value: () => boolean
  onChange?: (val: boolean) => void
}>
export default function(props: Props) {

  function handleCilik() {
    props.onChange && props.onChange(!props.value());
  }

  return <div className={() => joinClass('comp-switch', props.value() ? 'is-open' : '')} onclick={handleCilik}>
    <div className='round'></div>
  </div>
}
