import { useEffect, useState } from 'react';
import { Header, CoinSlider, CompanySlider, Footer, HeroSection, ImgInfoVideo, IntroAbout } from './components';


const App = () => {

  const [themeToggling, setThemeToggling] = useState(false);


  useEffect(() =>
    themeToggling
      ? window.document.body.classList.add('dark')
      : window.document.body.classList.remove('dark'),
    [themeToggling]
  )

  return (

    <main className='overflow-hidden'>
      <Header themeToggling={themeToggling} setThemeToggling={setThemeToggling} />
      <HeroSection themeToggling={themeToggling}/>
      <IntroAbout />
      <CoinSlider />
      <ImgInfoVideo />
      <CompanySlider />
      <Footer />
    </main>

  )
}

export default App