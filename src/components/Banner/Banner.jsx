import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Cover1 from '../../../src/assets/images/Cover1.jpg'
import Cover2 from '../../../src/assets/images/Cover2.jpg'
import Cover3 from '../../../src/assets/images/Cover3.jpeg'


const Banner = () => {
    return (
        <div className='mt-10 z-30'>
            <div className='lg:w-full lg:mx-0 md:mx-3 mx-2'>
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                      <SwiperSlide>
                               <img className='w-full lg:h-[580px] h-[270px] md:h-[450px] rounded-lg' src={Cover3} alt="" />
                               
                      </SwiperSlide>
                      <SwiperSlide>
                                <img className='w-full lg:h-[580px] h-[270px] md:h-[450px] rounded-lg' src={Cover1} alt="" />
                                
                               
                      </SwiperSlide>
                      <SwiperSlide>
                                <img className='w-full lg:h-[580px] h-[270px] md:h-[450px] rounded-lg' src={Cover2} alt="" />
                                
                      
                      </SwiperSlide>
                      
                </Swiper>
                
            </div>
            
        </div>
    );
};

export default Banner;