import images from '../constants/images';


const Footer = () => {

  return (
    <footer className='px-4 lg:px-36 dark:bg-[#200A4C] dark:text-gray-300 py-10 pt-28 '>

      <div className='border-t border-gray-500 flex justify-between flex-wrap gap-4 pt-10'>

        <div className='flex-auto space-y-4 max-w-fit '>
          <h2 className='text-2xl lg:text-3xl font-bold tracking-wider text-[#545454] dark:text-white'>
            <span className='text-[#B322F1]'>S</span> L E D G E R
          </h2>
          <p className='w-full lg:w-96 font-light dark:text-slate-400'>
            StellerLedger is operated by an independent commercial entity unaffiliated with the Steller development foundation.
          </p>

          <div className='pt-4 lg:pt-12 space-x-4 flex pb-12'>
            <i className='iconStyling fab fa-facebook'></i>
            <i className='iconStyling fab fa-twitter'></i>
            <i className='iconStyling fab fa-instagram'></i>
          </div>
        </div>

        <div className='flex gap-16 lg:gap-10 pb-8 '>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-xl pb-1 lg:pb-4'>Products</p>
            <a href="/#">Angular</a>
            <a href="/#">React</a>
            <a href="/#">Vue</a>
            <a href="/#">Laravel</a>
          </div>
          <div className='flex flex-col gap-6'>
            <p className='font-bold text-xl pb-1 lg:pb-4'>Useful Links</p>
            <a href="/#">Pricing</a>
            <a href="/#">Settings</a>
            <a href="/#">Orders</a>
            <a href="/#">Help</a>
          </div>
        </div>

        <div className='flex-auto max-w-fit'>
          <p className='font-bold text-xl pb-4'>Download App</p>
          <div className='flex items-center gap-4 pb-4'>
            <img src={images.FooterApple} alt="" className='w-36' />
            <img src={images.FooterGPlay} alt="" className='w-36' />
          </div>
          <p className='font-bold text-xl py-4 lg:py-6'>Contacts</p>
          <div className='space-y-4'>
            <p>
              <i className='text-[#B322F1] pr-4 fas fa-phone'></i>
              +01 234 567 88 &nbsp; | &nbsp;+01 234 567 88
            </p>
            <p>
              <i className='text-[#B322F1] pr-4 fas fa-paper-plane'></i>
              Steller@ledger.com
            </p>
            <p>
              <i className='text-[#B322F1] pr-4 fas fa-location-dot'></i>
              New York, NY 10012 US
            </p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer