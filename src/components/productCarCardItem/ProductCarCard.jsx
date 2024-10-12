import styles from './productCarCard.module.css'
import icon1 from '../../assets/productCard/icon11.png'
import icon2 from '../../assets/productCard/icon1.png'
import icon3 from '../../assets/productCard/icon2.png'
import icon4 from '../../assets/productCard/icon3.png'
// eslint-disable-next-line react/prop-types
export default function ProductCarCard({prodImg, prodNameMake, prodNameModel, prodPrice}) {
    const futureItems =[
        {
            futName: '4 Passagers',
            icon: icon1,
        },
        {
            futName: 'Auto',
            icon: icon2,
        },
        {
            futName: 'Air Conditioning',
            icon: icon3,
        },
        {
            futName: '4 Doors',
            icon: icon4,
        }
    ]
  return (
    <div className={`${styles.productCarCard__handler}`}>
        <div className={`${styles.productCarCard__info}`}>
            <div className={`${styles.productImg}`}>
                <img src={prodImg} alt={prodNameMake} />
            </div>
            <h5>
                {prodNameMake} {prodNameModel}
            </h5>
            <p className={`${styles.productReview}`}>
                <i className="bi bi-star-fill"></i>
                4.8
                <span>
                    (2.436 reviews)
                </span>
            </p>
            <ul className={`${styles.listedFutures} row justify-content-between`}>
                {
                    futureItems?.map((el,idx)=>(
                        <li className={`${styles.listedFutureItem} col-6 p-0`} key={idx}>
                            <img src={el.icon} alt={el.futName} />
                            <span>
                                {el.futName}
                            </span>
                        </li>
                    ))
                }
            </ul>
            <div className={`${styles.productPrice}`}>
                <h5>
                    Price
                </h5>
                <h5 className={`${styles.TotPrice}`}>
                    {prodPrice}
                </h5>
            </div>
            <div className={`${styles.btnSubmit} mainBtnBlueStyle`}>
                View Details <i className="bi bi-arrow-right-short"></i>
            </div>
        </div>
    </div>
  )
}
