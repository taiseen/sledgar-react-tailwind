import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { companyLogo } from '../constants/data';



const CompanySlider = ({ themeToggling }) => {

  return (
    <section className='p-6 pb-14 lg:px-16 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Stellar Partners</p>
      <h2 className='text-3xl'>Built on Stellar</h2>

      <div>
        <Swiper
          className="py-12 flex items-center justify-center"
          slidesPerView={3}
          spaceBetween={10}
          modules={[Pagination, Navigation, Autoplay]}
          centeredSlides={true}
          loop={true}
          // navigation={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 4500,
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
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
        >
          {
            companyLogo.map(img => (
              // console.log(img.darkImg)
              <SwiperSlide key={img.id}>
                <div className="flex items-center justify-center pb-8">
                  <img src={img.darkImg} alt="" className='w-60 lg:w-48' />
                  {/* <div className='w-1 h-8 bg-black dark:bg-gray-400'></div> */}
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  )
}

export default CompanySlider