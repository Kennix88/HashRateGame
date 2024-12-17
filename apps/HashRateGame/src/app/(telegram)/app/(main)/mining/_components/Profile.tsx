import { TbCoins } from 'react-icons/tb'

export default function Profile() {
  return (
    <>
      <div className="flex flex-col font-extralight">
        <div className="px-4  opacity-50">Profile</div>
        <div className="bg-surface-container-l2 p-4 rounded-md grid grid-cols-2 gap-2 text-sm">
          <div className="flex flex-row gap-2 flex-wrap col-span-2 items-center">
            <div className="flex justify-center items-center p-1 rounded-md bg-primary w-[40px] h-[40px]">
              🤖
            </div>
            <div className="flex flex-col gap-0">
              <div className="font-bold flex flex-row gap-2 text-[16px] items-center">
                <div>Innokenty Kennix</div>
              </div>
              <div className="text-[12px] flex flex-row gap-2 items-center ">
                <div className="opacity-80">Level</div>
                <div className="font-medium">99</div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-2 flex-wrap col-span-2 items-center">
            <div className="opacity-80">Balance</div>
            <div className="flex flex-row gap-1 items-center text-silver text-nowrap text-[12px]">
              <TbCoins className="text-lg " /> 24 648 310.53
            </div>
            <div className="flex flex-row gap-1 items-center text-gold text-nowrap text-[12px]">
              <TbCoins className="text-lg " /> 107 021.07
            </div>
          </div>
          <div className="flex flex-row gap-2 col-span-2 items-center">
            <div className="opacity-80">Energy</div>
            <div className="bg-surface-container-h h-4 w-full flex items-center justify-start rounded-sm">
              <div className="bg-primary h-full w-[75%] flex items-center justify-center text-on-primary font-normal rounded-sm"></div>
            </div>
            <div className="text-nowrap">1 647/10 500</div>
          </div>
        </div>
      </div>
    </>
  )
}
