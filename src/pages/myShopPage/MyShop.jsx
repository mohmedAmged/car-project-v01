import AllCarShop from '../../components/allCarShopSec/AllCarShop'
import MyMainHomeHero from '../../components/myMainHomeHeroSec/MyMainHomeHero'
import styles from './myshop.module.css'
export default function MyShop() {
  return (
    <div className={`${styles.myShop_handler}`}>
        <MyMainHomeHero />
        <AllCarShop />
    </div>
  )
}
