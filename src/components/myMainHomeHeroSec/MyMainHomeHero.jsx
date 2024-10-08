import styles from './myMainHomeHero.module.css'
import car from '../../assets/homeHeroSec/car-1.png'
import android from '../../assets/homeHeroSec/andriod.png'
import ios from '../../assets/homeHeroSec/ios.png'
export default function MyMainHomeHero() {
  return (
    <div className={`${styles.myMainHomeHero__handler}`}>
        <div className="container-fluid m-0">
            <div className={`row align-items-center ${styles.restyleRow}`}>
                <div className="col-md-6">
                    <div className={`${styles.mainHomeHero_text}`}>
                        <h1>
                            Find, book and rent a car <span>Easily</span>
                        </h1>
                        <p>
                            Get a car wherever and whenever you need it with your IOS and Android device.
                        </p>
                        <div className={`${styles.mainHomeHero_text_download}`}>
                            <img src={android} alt="android" />
                            <img src={ios} alt="ios" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <div className={`${styles.mainHomeHero_img}`}>
                        <img src={car} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
