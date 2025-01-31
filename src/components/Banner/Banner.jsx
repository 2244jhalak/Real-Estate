import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Cover1 from '../../../src/assets/images/Cover1.jpg'
import Cover2 from '../../../src/assets/images/Cover2.jpg'
import Cover3 from '../../../src/assets/images/Cover3.jpeg'


const Banner = () => {
    return (
        <div className='z-30'>
            <div className='w-full'>
            
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                      <SwiperSlide>
                               <img className='w-full lg:h-[580px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover3} alt="" />
                               
                      </SwiperSlide>
                      <SwiperSlide>
                                <img className='w-full lg:h-[580px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover1} alt="" />
                                
                               
                      </SwiperSlide>
                      <SwiperSlide>
                                <img className='w-full lg:h-[580px] h-[270px] md:h-[450px] rounded-b-lg' src={Cover2} alt="" />
                                
                      
                      </SwiperSlide>
                      
                </Swiper>
                
            </div>
            
        </div>
    );
};

export default Banner;