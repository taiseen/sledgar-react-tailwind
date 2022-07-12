import images from '../constants/images';
import Graph from '../assets/Graph';

const HeroSection = ({ themeToggling }) => {

  return (
    <section className='px-4 lg:px-36 py-12 text-center dark:bg-[#2B1867] text-gray-700 dark:text-gray-200 relative '>

      {/* <div className='absolute top-0 left-0 right-0 bottom-0  h-full w-full bg-blue-100/20 rounded-b-[800px]'></div> */}


      {/* <div className='absolute top-[-25px] left-[50%] translate-x-[-48%] w-full lg:w-[800px] '>
          <img src={themeToggling ? images.HeroGraphBlack :  images.HeroGraphWhite } alt="" className={`w-full ${themeToggling ? 'opacity-100' : 'opacity-30'}`} />
        </div>  */}

      {/* 🟡 Circle 1 🟡*/}
      {/* <div className={`w-36 h-36 bg-gradient-to-l ${themeToggling ? 'from-indigo-900' : 'from-slate-200'} rounded-full absolute top-[-180px] left-[370px]`}></div> */}

      <div className={`hidden lg:block absolute top-[-160px] left-[350px] w-40 -z-0`}>
        <img src={themeToggling ? images.topLeft_1 : images.topLeft_1_w} alt="" className='w-full' />
      </div>

      {/* 🟡 Circle 2 🟡*/}
      {/* <div className={`w-80 h-80 bg-gradient-to-l ${themeToggling
        ? 'from-[#2B1867] to-[#BF36E6] opacity-10 rotate-[210deg]'
        : 'from-slate-200 rotate-[30deg]'} 
        rounded-full absolute top-40 left-0`}></div> */}

      <div className={`hidden lg:block absolute top-20 left-10 w-[340px] -z-0`}>
        <img src={themeToggling ? images.topLeft_2 : images.topLeft_2_w} alt="" className='w-full' />
      </div>


      {/* 🟡 Circle 3 🟡*/}
      <div className={`hidden lg:block absolute bottom-0 left-[-220px] w-96 -z-0`}>
        <img src={themeToggling ? images.bottomLeft_3 : images.bottomLeft_3_w} alt="" className='w-full' />
      </div>


      {/* 🟡 Circle 4 🟡*/}
      <div className={`hidden lg:block absolute top-0 right-36 w-48 -z-0`}>
        <img src={themeToggling ? images.topRight_4 : images.topRight_4_w} alt="" className='w-full' />
      </div>


      {/* 🟡 Circle 5 🟡*/}
      <div className={`hidden lg:block absolute bottom-0 right-[-120px] w-72 -z-0 `}>
        <img src={themeToggling ? images.bottomRight_5 : images.bottomRight_5_w} alt="" className='w-full' />
      </div>


      {/* 🟡 Circle 6 🟡*/}
      <div className={`hidden lg:block absolute bottom-28 right-[445px] w-32 -z-0`}>
        <img src={themeToggling ? images.bottomRightSmall_6 : images.bottomRightSmall_6_w} alt="" className='w-full' />
      </div>


      {/* 🟡 UI For ==> Graph 🟡*/}
      <div className={`absolute top-40 lg:top-[-50px] left-[50%] translate-x-[-52%] w-full lg:w-[780px]`}>
        {
          themeToggling
            ? <Graph color={`#1F307D`} className={`w-full`}/>
            : <Graph color={`#E6E6E6`} className={`opacity-30 w-full`} />
        }
      </div>


      <h1 className='relative font-bold text-[28px] pt-4 md:text-4xl lg:text-5xl lg:leading-[60px]'>The Most Secure Platform <br /> On Steller</h1>

      <p className='relative pt-8 w-full lg:w-[650px] mx-auto '>StellarLedger is the only Steller wallet where you can buy or create NFTs and be protected from scam or duplicate tokens</p>



      <div className='relative flex items-center justify-center py-10 gap-4 text-slate-200'>

        <div className='flex items-center gap-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#BF36E6] to-blue-800 cursor-pointer hover:shadow-xl duration-200 '>
          <img src={images.appleLogo} alt="" className='w-5' />
          <div className='text-left'>
            <p className='text-xs '>Download on</p>
            <p className=''>Apple store</p>
          </div>
        </div>

        <div className='flex items-center gap-4 px-4 py-2 rounded-lg bg-[#38217F] cursor-pointer hover:shadow-xl duration-200'>
          <img src={images.googlePlayLogo} alt="" className='w-5' />
          <div className='text-left'>
            <p className='text-xs '>Get it on</p>
            <p className=''>Google Play</p>
          </div>
        </div>

      </div>



      <div className='relative flex items-center justify-center'>
        <img src={images.HeroMobile} alt="" className='w-96' />
        <img src={images.HeroRating} alt="" className='w-44 absolute top-[72px] lg:top-20 right-4 lg:right-80' />
        <img src={images.HeroPeople} alt="" className='w-48 absolute bottom-14 lg:bottom-28 left-4 lg:left-72 lg:scale-125' />
      </div>

    </section>
  )
}

export default HeroSection