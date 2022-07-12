import { appRelatedInfo } from '../constants/data';
import images from '../constants/images';


const ImgInfoVideo = () => {

  return (
    <section className='pb-28 dark:bg-[#200A4C] dark:text-gray-200'>

      <div className=' px-6 lg:px-36 py-6 '>

        {/* 🟨🟨🟨 UI For ==> 1st Group */}
        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center xl:justify-between py-8 lg:border-b border-gray-500'>

          <div className='w-full lg:w-[500px] space-y-4 '>
            <p className='text-sm'>Decentralized Payment Network</p>
            <h2 className='text-3xl'>StellerLedgar is the <br /> Safest Network</h2>
            <p className='text-xs w-full lg:w-[480px] leading-5 dark:text-slate-400 pb-4 '>StellarLedger is a ledger where all assets are held in a very secure wallet, which allows the user to control their funds at all time. Steller is an open-source protocol for exchanging money, its network validates transactions and allows irreversible and cryptographically secure payments.</p>
            <button className='hidden lg:block px-4 py-3 bg-[#9047c4] text-white rounded-lg text-sm'>Learn More</button>
          </div>

          <div className='px-8 w-full lg:w-[500px]'>
            <img src={images.MobileArt} alt="" className='w-full h-full' />
          </div>

          <button className='block lg:hidden w-full mt-10 px-4 py-3 bg-[#9047c4] text-white rounded-lg text-sm'>Learn More</button>

        </div>


        {/* 🟨🟨🟨 UI For ==> 2st Group */}
        <div className='flex flex-wrap items-center justify-center lg:justify-between gap-6 pt-14'>
          {
            appRelatedInfo.map(item =>
              <div key={item.id} className=' mt-8 w-96 space-y-3 pb-8 flex flex-col items-center lg:items-start '>
                <img src={item.img} alt="" className='w-14 pb-6' />
                <h2 className='text-2xl'>{item.title}</h2>
                <p className='text-sm dark:text-slate-400 text-gray-500 text-center md:text-justify'>{item.info}</p>
              </div>
            )
          }
        </div>
      </div>


      {/* 🟨🟨🟨 UI For ==> 3st Group */}
      <div className='dark:bg-[#200A4C] lg:px-36'>


        <div className='border-t-[16px] border-b-[16px] lg:border-[16px] border-gray-100 dark:border-[#301B59] overflow-hidden  relative'>

          <div className='h-[620px] min-w-[200vw] md:min-w-screen md:h-[880px] '>
            <img src={images.VideoBanner} alt="" className='object-cover h-full' />
          </div>

          <div className='pl-6 lg:pl-10 pr-20 lg:pr-28 py-6 lg:py-8 bg-black/70 border-l-2 border-[#B868F1] absolute top-10 left-10 text-gray-300 space-y-2'>
            <p className='text-base lg:text-lg'>StellarLedger Intro</p>
            <p className='text-sm'>Explanation Video</p>
          </div>

          <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-20 lg:w-24 h-20 lg:h-24 bg-gray-200/60 rounded-full grid place-items-center border-8 border-black/20 pl-1.5 cursor-pointer'>
            <i className='fas fa-play text-white text-3xl lg:text-4xl'></i>
          </div>

        </div>

      </div>
      
    </section>
  )
}

export default ImgInfoVideo