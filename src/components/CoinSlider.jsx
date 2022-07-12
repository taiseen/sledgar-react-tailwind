import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { coinInfo } from '../constants/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef } from 'react';



const CoinBox = ({ coin: { coinImg, coinName, amount, highTime, highTimeAmount, lowTime, lowTimeAmount, trendImg, currency1, currency2 } }) => (

  <div className="bg-gray-100 p-5 text-gray-700 rounded-2xl mb-12 shadow-lg">

    {/* Row ==> 1 */}
    <div className='flex justify-between'>
      <div className='flex gap-4'>
        <img src={coinImg} alt="" className='w-12' />
        <div className='text-left'>
          <p>{currency1} | {currency2}</p>
          <p>{coinName}</p>
        </div>
      </div>

      <div className='flex gap-4 text-fuchsia-500 text-lg cursor-pointer'>
        <span>Change</span>
        <i className='fas fa-angle-down pt-1'></i>
      </div>
    </div>

    {/* Row ==> 2 */}
    <div className='flex items-center justify-between pt-2'>
      <h2 className='text-3xl font-bold tracking-wider'>${amount}</h2>
      <img src={trendImg} alt="" className='w-24' />
    </div>

    {/* Row ==> 3 */}
    <div className='flex items-center justify-between pt-4'>
      <div className='text-left'>
        <p className='text-lg'>{highTime}</p>
        <p className='text-xl font-bold'>$ {highTimeAmount}</p>
      </div>

      <div className='text-left'>
        <p className='text-lg'>{lowTime}</p>
        <p className='text-xl font-bold'>$ {lowTimeAmount}</p>
      </div>
    </div>

  </div>
)


const CoinSlider = () => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const slideNum = useRef(null)

  const sliderNumber = ['1', '2', '3']


  return (
    <section className='px-4 lg:px-0 pt-8 pb-14 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Latest Exchanges</p>
      <h2 className='text-3xl mb-12'>Deals Updated</h2>

      <Swiper
        className="flex flex-wrap"
        slidesPerView={4}
        spaceBetween={20}
        modules={[Pagination, Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        onInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            // direction: 'vertical',
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {
          coinInfo.map(coin => (
            <SwiperSlide key={coin.id}>
              <CoinBox coin={coin} />
            </SwiperSlide>
          ))
        }

      </Swiper>


      {/* Navigation UI */}
      <div className='flex items-center justify-center gap-4'>
        <i ref={prevRef} className="fa-solid fa-angle-left navigationPointerNumber"></i>
        {
          sliderNumber.map(data =>
            <div key={data} className='navigationPointerNumber' ref={slideNum}>
              {data}
            </div>
          )
        }
        <i ref={nextRef} className="fa-solid fa-angle-right navigationPointerNumber"></i>
      </div>

    </section >
  )
}

export default CoinSlider