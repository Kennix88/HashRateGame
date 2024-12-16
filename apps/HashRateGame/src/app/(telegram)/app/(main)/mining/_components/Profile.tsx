import { TbCoins } from 'react-icons/tb'

export default function Profile() {
  return (
    <div className="flex flex-row gap-2 items-center justify-between py-2 px-3 rounded-md text-on-surface bg-surface-container-l2">
      <div className="flex flex-row gap-2 items-center">
        <div className="flex justify-center items-center p-1 rounded-md bg-primary w-[40px] h-[40px]">
          🤖
        </div>
        <div className="flex flex-col gap-1">
          <div className="font-bold flex flex-row gap-2 text-[16px] items-center">
            <div>Innokenty Kennix</div>
          </div>
          <div className="text-[12px] flex flex-row gap-2 items-center ">
            <div className="flex flex-row gap-1 items-center text-silver">
              <TbCoins className="text-lg " /> 24,648,310.53
            </div>
            <div className="flex flex-row gap-1 items-center text-gold">
              <TbCoins className="text-lg " /> 107,021.07
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-1 rounded-full border-[3px] border-bronze text-bronze w-[40px] h-[40px] font-bold">
        99
      </div>
    </div>
  )
}
