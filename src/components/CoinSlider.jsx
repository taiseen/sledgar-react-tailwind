import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { coinInfo } from '../constants/data';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const CoinBox = ({ coin: { coinImg, coinName, amount, highTime, highTimeAmount, lowTime, lowTimeAmount, trendImg, currency1, currency2 } }) => (

  <div className="bg-gray-100 p-6 text-gray-700 rounded-2xl mb-16">

    {/* Row ==> 1 */}
    <div className='flex justify-between'>
      <div className='flex gap-4'>
        <img src={coinImg} alt="" className='w-16' />
        <div>
          <p>{currency1} | {currency2}</p>
          <p>{coinName}</p>
        </div>
      </div>

      <div className='flex gap-4 text-fuchsia-500 text-lg'>
        <span>Change</span>
        <i className='fas fa-angle-down pt-1'></i>
      </div>
    </div>

    {/* Row ==> 2 */}
    <div className='flex items-center justify-between pt-2'>
      <h2 className='text-4xl font-bold'>${amount}</h2>
      <img src={trendImg} alt="" className='w-24' />
    </div>

    {/* Row ==> 3 */}
    <div className='flex items-center justify-between pt-4'>
      <div className='text-left'>
        <p className='text-lg'>{highTime}</p>
        <p className='text-2xl font-bold'>$ {highTimeAmount}</p>
      </div>

      <div className='text-left'>
        <p className='text-lg'>{lowTime}</p>
        <p className='text-2xl font-bold'>$ {lowTimeAmount}</p>
      </div>
    </div>

  </div>
)


const CoinSlider = () => {

  return (
    <section className='p-6 pb-14 lg:px-16 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Latest Exchanges</p>
      <h2 className='text-3xl'>Deals Updated</h2>

      <Swiper
        className="py-8"
        slidesPerView={1}
        spaceBetween={10}
        modules={[Pagination, Navigation, Autoplay]}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
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

    </section>
  )
}

export default CoinSlider