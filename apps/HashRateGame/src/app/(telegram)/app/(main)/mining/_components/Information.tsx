import { TbCoins } from 'react-icons/tb'
import addSuffixToNumber from '../../../../../../utils/addSuffixToNumber.util'

export default function Information() {
  return (
    <div className="flex flex-col font-extralight">
      <div className="px-4  opacity-50">Information</div>
      <div className="bg-surface-container-l2 p-4 rounded-md text-sm flex flex-row flex-wrap gap-4 ">
        <div className="flex flex-row gap-2 w-full items-center">
          <div className="opacity-80 text-nowrap">Total mined</div>
          <div className="bg-surface-container-h h-4 w-full flex items-center justify-start rounded-sm">
            <div className="bg-gold h-full w-[34%] flex items-center justify-center text-on-primary font-normal rounded-sm"></div>
          </div>
          <div className="text-nowrap font-normal text-gold">
            {addSuffixToNumber(235_000)}/{addSuffixToNumber(1_000_000_000)}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="opacity-80">Status</div>
          <div className="text-nowrap bg-warning-container text-on-warning-container rounded-sm px-2 font-normal">
            Pending
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="opacity-80">Complexity</div>
          <div className="text-nowrap font-normal ">
            {addSuffixToNumber(1647, 2)}
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="opacity-80">Income</div>
          <div className="flex flex-row gap-1 items-center text-silver text-nowrap font-normal">
            <TbCoins className="text-lg " /> {addSuffixToNumber(246.53)}/hr
          </div>
          <div className="flex flex-row gap-1 items-center text-gold text-nowrap font-normal">
            <TbCoins className="text-lg " /> {addSuffixToNumber(10.07)}/hr
          </div>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="opacity-80">Energy consumption</div>
          <div className="text-nowrap font-normal ">
            {addSuffixToNumber(53, 2)}/min
          </div>
        </div>
      </div>
    </div>
  )
}
