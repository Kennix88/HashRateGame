import addSuffixToNumber from '../../../../../../utils/addSuffixToNumber.util'

export default function Information() {
  return (
    <div className="flex flex-col font-extralight">
      <div className="px-4  opacity-50">Information</div>
      <div className="bg-surface-container-l2 p-4 rounded-md text-sm grid grid-cols-2 gap-2 ">
        <div className="flex flex-row gap-2 col-span-2 items-center">
          <div className="opacity-80">Complexity</div>
          <div className="text-nowrap">{addSuffixToNumber(1647, 2)}</div>
        </div>
      </div>
    </div>
  )
}
