import styles from './downloadApp.module.css'
import android from '../../assets/homeHeroSec/andriod.png'
import ios from '../../assets/homeHeroSec/ios.png'
import mobile from '../../assets/whatSayAbout/iPhone-14.png'
export default function DownLoadApp() {
  return (
    <div className={`${styles.downloadApp__handler}`}>
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6">
                    <div className={`${styles.downloadApp__text}`}>
                        <h5>
                            Download Rentcars App for <span>FREE</span>
                        </h5>
                        <p>
                            For faster, easier booking and exclusive deals.
                        </p>
                        <div className={`${styles.downloadLinks}`}>
                            <img src={android} alt="android" />
                            <img src={ios} alt="ios" />
                        </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex justify-content-end">
                    <div className={`${styles.downloadApp__image}`}>
                        <img src={mobile} alt="mobile" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
