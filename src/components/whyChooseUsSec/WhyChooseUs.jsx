import styles from './whyChooseUs.module.css'
import carImage from '../../assets/chooseUs/Audi 1.png'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import icon1 from '../../assets/chooseUs/dollar.png'
import icon2 from '../../assets/chooseUs/user.png'
import icon3 from '../../assets/chooseUs/message.png'
import icon4 from '../../assets/chooseUs/chat.png'
export default function WhyChooseUs() {
    const advantagesItems = [
        {
            icon: icon1,
            title: 'Best price guaranteed',
            desc: 'Find a lower price? We’ll refund you 100% of the difference.'
        },
        {
            icon: icon2,
            title: 'Experience driver',
            desc: 'Don’t have driver? Don’t worry, we have many experienced driver for you.'
        },
        {
            icon: icon3,
            title: '24 hour car delivery',
            desc: 'Book your car anytime and we will deliver it directly to you.'
        },
        {
            icon: icon4,
            title: '24/7 technical support',
            desc: 'Have a question? Contact Rentcars support any time when you have problem.'
        },
    ]
  return (
    <div className={`${styles.whyChooseUs__handler}`}>
        <div className="container-fluid ps-0">
            <div className={`row align-items-center ${styles.reStyleRow}`}>
                <div className="col-md-6">
                    <div className={`${styles.carImage_box}`}>
                        <img src={carImage} alt="car" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className={`${styles.whyChooseUs_text}`}>
                        <div className="row">
                            <div className={`col-12 ${styles.addPadding}`}>
                                <MyMainHeader addClass='reStyle' subTitle='WHY CHOOSE US' tilte='We offer the best experience with our rental deals'/>
                            </div>
                            <div className="col-12">
                                <ul className={`${styles.advItems}`}>
                                    {
                                        advantagesItems?.map((el, idx)=>(
                                            <li className={`${styles.advItem}`} key={idx}>
                                                <img src={el.icon} alt="icon" />
                                                <div className={`${styles.advItem_text}`}>
                                                    <h5>
                                                        {el?.title}
                                                    </h5>
                                                    <p>
                                                        {el.desc}
                                                    </p>
                                                </div>
                                            </li>

                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
