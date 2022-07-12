import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const CompanySlider = () => {

  return (
    <section className='p-6 pb-14 lg:px-16 text-center dark:bg-[#2F1B58] dark:text-gray-200'>
      <p className='text-sm py-4'>Stellar Partners</p>
      <h2 className='text-3xl'>Built on Stellar</h2>

      <div>
        <Swiper
          className="mySwiper product-slider"
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
            // data.productBox.slice(0, 5).map((product, i) => (
            //   <SwiperSlide key={i} className="slide">
            //     <ProductBox product={product} />
            //   </SwiperSlide>
            // ))
          }

        </Swiper>


      </div>
    </section>
  )
}

export default CompanySlider