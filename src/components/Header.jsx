import images from '../constants/images';


const Header = ({ themeToggling, setThemeToggling }) => {


  return (
    <header className='px-4 lg:px-36 py-6 flex items-center justify-between flex-wrap  dark:bg-[#2B1867] text-gray-700 dark:text-gray-200 z-40'>

      {/* 🟨🟨🟨 UI For ==> Logo */}
      <div className='flex items-center gap-4 justify-center z-50'>

        <img src={images.Logo} alt="" className='w-12 ' />

        <div>
          <h1 className='text-xl md:text-2xl font-bold'>SLIDEGER</h1>
          <p className='text-xs md:text-sm '>Decentralized Payment Network</p>
        </div>
      </div>

      <div className='hidden lg:block border-r border-gray-500 h-8 z-50'></div>


      {/* 🟨🟨🟨 UI For ==> Menu */}
      <nav className='hidden lg:block space-x-6'>
        <a href="/#">Home</a>
        <a href="/#">Exchange</a>
        <a href="/#">Market</a>
        <a href="/#">NFT</a>
        <a href="/#">Downloads</a>
      </nav>


      {/* 🟨🟨🟨 UI For ==> Theme Toggling */}
      <div className='flex items-center gap-4'>
        
        <div className='bg-gray-200 rounded-2xl w-14 h-8 relative p-1 cursor-pointer dark:bg-[#4D398A]'
          onClick={() => setThemeToggling(pre => !pre)}>
          <i className={`fas ${themeToggling ? 'fa-sun right-1 rotate-[360deg] text-white bg-gray-400' : 'fa-moon bg-black text-white'} rounded-full px-1 text-base absolute transform ease-out duration-1000`}>
          </i>
        </div>

        <div className='hidden lg:block border-[5px] border-gray-200 dark:border-[#4B3982] rounded-full'>
          <img src={images.USA_Logo} alt="" className='w-8 ' />
        </div>
      </div>

      <div className='hidden lg:block border-r border-gray-500 h-8 z-50'></div>

      {/* 🟨🟨🟨 UI For ==> User Login */}
      <div className='hidden lg:flex items-center gap-4 cursor-pointer'>
        <i className='fas fa-user-alt'></i>
        <p>Login</p> 
        <span>/</span>
        <p>Signup</p>
      </div>
    </header>
  )
}

export default Header