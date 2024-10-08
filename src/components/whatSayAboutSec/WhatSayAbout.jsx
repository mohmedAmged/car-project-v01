import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import styles from './whatSayAbout.module.css'
import img1 from '../../assets/whatSayAbout/Rectangle 8 (1).png'
import img2 from '../../assets/whatSayAbout/girl.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import Autoplay from "../../../node_modules/swiper/modules/autoplay.mjs";
export default function WhatSayAbout() {
    const sliderBlogItems = [
        {
            icon: img1,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
        {
            icon: img2,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
        {
            icon: img1,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
        {
            icon: img2,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
        {
            icon: img1,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
        {
            icon: img2,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
        {
            icon: img1,
            name: 'Charlie Johnson',
            desc: 'I feel very secure when using caretalls services Your customer care team is very enthusiastic and the driver is always on time'
        },
    ]
    return (
        <div className={`${styles.whatSayAbout__handler}`}>
            <div className="container-fluid">
                <MyMainHeader subTitle='TESTIMONIALS' tilte='What peole say about us?' />
                <div className={`${styles.whatSayAbout__slider}`}>
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
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            426: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            600: {
                                slidesPerView: 2.2,
                                spaceBetween: 15
                            },
                            768: {
                                slidesPerView: 1.4,
                                spaceBetween: 15
                            },
                            995: {
                                slidesPerView: 2.1,
                                spaceBetween: 20
                            },
                        }}
                    >
                        {sliderBlogItems.map((el, idx) => {
                            return (
            <SwiperSlide className={`my-3`} key={idx}>
                <div className={`${styles.sliderItem}`}>
                    <div className={`${styles.sliderImg}`}>
                        <img src={el.icon} alt="image" />
                    </div>
                    <>
                        <div className={`${styles.sliderItemText}`}>
                            <div className={`${styles.itemReview}`}>
                                <h5>
                                    5.0 <span>stars</span>
                                </h5>
                                <div className={`${styles.stars}`}>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                                <p>
                                    {el?.desc}
                                </p>
                                <h4>
                                    {el?.name}
                                </h4>
                                <p className={`${styles.location}`}>
                                    From New York, US
                                </p>
                            </div>
                        </div>
                    </>
                    
                </div>
            </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
