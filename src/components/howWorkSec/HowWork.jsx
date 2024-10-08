import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import styles from './howWork.module.css'
import cleander from '../../assets/howWork/calender.png'
import car from '../../assets/howWork/car-icon.png'
import location from '../../assets/howWork/location.png'
export default function HowWork() {
    const workingSteps = [
        {
            icon: cleander,
            title: 'Choose location',
            desc: 'Choose your and find your best car'
        },
        {
            icon: car,
            title: 'Pick-up date',
            desc: 'Select your pick up date and time to book your car'
        },
        {
            icon: location,
            title: 'Book your car',
            desc: 'Book your car and we will deliver it directly to you'
        }
    ]
    return (
        <div className={`${styles.howWork__handler}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <MyMainHeader subTitle='HOW IT WORK' tilte='Rent with following 3 working steps' />
                    </div>
                </div>
                <div className={`${styles.workingSteps}`}>
                    <div className="row justify-content-center">
                        {
                            workingSteps?.map((el, idx)=>(
                                <div key={idx} className="col-md-3 mb-4 d-flex justify-content-center">
                                    <div className={`${styles.workingStepItem}`}>
                                        <img src={el?.icon} alt={el?.title} />
                                        <h5>
                                            {el?.title}
                                        </h5>
                                        <p>
                                            {el?.desc}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
