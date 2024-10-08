import DownLoadApp from "../../components/downloadAppSec/DownLoadApp";
import HowWork from "../../components/howWorkSec/HowWork";
import LogoSlider from "../../components/logoSliderSec/LogoSlider";
import MyMainHomeHero from "../../components/myMainHomeHeroSec/MyMainHomeHero";
import PopularCarHome from "../../components/popularCarHomeSec/PopularCarHome";
import WhatSayAbout from "../../components/whatSayAboutSec/WhatSayAbout";
import WhyChooseUs from "../../components/whyChooseUsSec/WhyChooseUs";
import styles from './myHome.module.css'
export default function MyHome() {
  return (
    <div className={`${styles.myHome_handler}`}>
        <MyMainHomeHero />
        <PopularCarHome />
        <HowWork />
        <LogoSlider />
        <WhyChooseUs />
        <WhatSayAbout />
        <DownLoadApp />
    </div>
  )
}
