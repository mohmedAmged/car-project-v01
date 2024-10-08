import styles from './logoSlider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
import logo1 from '../../assets/logoSlider/audi.png'
import logo2 from '../../assets/logoSlider/jaguar.png'
import logo3 from '../../assets/logoSlider/nissan.png'
import logo4 from '../../assets/logoSlider/volvo.png'
export default function LogoSlider() {
    const logosItems = [
        {
            logo: logo1
        },
        {
            logo: logo2
        },
        {
            logo: logo3
        },
        {
            logo: logo4
        },
        {
            logo: logo1
        },
        {
            logo: logo2
        },
        {
            logo: logo3
        },
        {
            logo: logo4
        },
        {
            logo: logo1
        },
    ]
    return (
        <div className={`${styles.logoSlider__handler}`}>
            <div className="container-fluid">
                <div className={`${styles.logoItems}`}>
                    <Swiper
                        className='mySwiper'
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 2500,
                            pauseOnMouseEnter: true,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            300: {
                                slidesPerView: 2.2,
                                spaceBetween: 10
                            },
                            426: {
                                slidesPerView: 2.2,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 3.2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 3.2,
                                spaceBetween: 15
                            },
                            995: {
                                slidesPerView: 5.2,
                                spaceBetween: 5
                            },
                        }}
                    >
                        {logosItems.map((el, idx) => {
                            return (
                                <SwiperSlide  className={`my-3 ${styles.logoItem}`} key={idx}>
                                    <img src={el?.logo} alt="logo" />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
