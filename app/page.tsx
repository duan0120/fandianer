import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white">
      <div className="bg-[#FFF7E8] px-[86px] pt-[26px] pb-[86px]">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" width={56} height={56} />
          <h1 className="text-[#262626] text-[26px] font-bold ml-[8px]">饭点儿</h1>
        </div>
        <div className="flex items-center justify-around mt-[82px]">
          <p className="text-[#262626] text-[40px] font-bold">到饭点儿，轻轻一摇推荐附近的餐馆</p>
        </div>
        <div className="mt-[60px] flex items-center justify-center">
          <a href="https://apps.apple.com/cn/app/%E9%A5%AD%E7%82%B9%E5%84%BF-%E6%91%87%E4%B8%80%E6%91%87%E6%8E%A8%E8%8D%90%E9%99%84%E8%BF%91%E7%9A%84%E9%A4%90%E9%A6%86/id6743344692"><Image src="/download_on_the_app_store_btn.svg" alt="download" width={185} height={63} /></a>
        </div>
        <div className="flex items-center justify-center">
          <Image className="mt-[71px]" src="/phone.png" alt="download" width={1058} height={613}/>
        </div>
      </div>
      <div className="pt-[70px] flex flex-col items-center text-center">
        <p className="text-[#262626] text-[40px] font-bold">就近、实惠的推荐官</p>
        <div className="text-left mt-[54px] px-[32px]">
          <p className="text-[#65381F] text-[24px] font-bold">准确推荐</p>
          <p className="text-[#262626] text-[20px]">根据您的位置，准确推荐附近的餐馆</p>
          <p className="text-[#65381F] text-[24px] font-bold mt-[20px]">信息真实</p>
          <p className="text-[#262626] text-[20px]">餐馆信息真实有效，并及时更新最新信息</p>
          <p className="text-[#65381F] text-[24px] font-bold mt-[20px]">智能挑选</p>
          <p className="text-[#262626] text-[20px]">精心挑选优质的餐馆，以便每餐都能营养丰富和实惠</p>
        </div>
        <p className="text-[#262626] text-[40px] font-bold mt-[161px]">可在AppStore下载</p>
        <a href="https://apps.apple.com/cn/app/%E9%A5%AD%E7%82%B9%E5%84%BF-%E6%91%87%E4%B8%80%E6%91%87%E6%8E%A8%E8%8D%90%E9%99%84%E8%BF%91%E7%9A%84%E9%A4%90%E9%A6%86/id6743344692" className="mt-[40px]"><Image src="/download_on_the_app_store_btn.svg" alt="download" width={185} height={63} /></a>
        <p className="mt-[115px] mb-[43px] text-[14px] text-[#262626]">© CrazyKids Studio. 2025</p>
      </div>
    </div>
  )
}
