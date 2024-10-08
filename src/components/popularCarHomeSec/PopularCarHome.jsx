import styles from './popularCarHome.module.css'
import locationIcon from '../../assets/homePoularCar/location.png'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../functions/baseUrl';
import toast from 'react-hot-toast';
import ProductCarCard from '../productCarCardItem/ProductCarCard';
import car1 from '../../assets/productCard/car1.png'
import car2 from '../../assets/productCard/car2.png'
import car3 from '../../assets/productCard/car3.png'
import car4 from '../../assets/productCard/car4.png'
import { NavLink } from 'react-router-dom';

export default function PopularCarHome() {
    const carImages = [
        car1,
        car2,
        car3,
        car4
    ]
    const [carData, setCarData] = useState([]);
    const [filteration, setFilteration] = useState(
        {
            search: '',
        }
    );

    function objectToParams(obj) {
        const params = new URLSearchParams();
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== '') {
                params.append(key, obj[key]);
            }
        }
        return params.toString();
    }

    const fetchCars = async () => {
        try {
            const response = await axios.get(`${baseURL}/cars?limit=5&t=${new Date().getTime()}`);
            setCarData(response?.data);
        } catch (error) {
            toast.error(error?.response?.data.message || 'Something Went Wrong!');
        };
    };

    const filterCars = async () => {
        const urlParams = objectToParams(filteration);
        if (urlParams) {
            await axios.get(`${baseURL}/cars?${urlParams}&t=${new Date().getTime()}`)
                .then(res => {
                    setCarData(res?.data);
                })
                .catch(err => {
                    toast.error(err?.response?.data?.message || 'Something Went Wrong!');
                });
        } else {
            fetchCars();
        };
    };

    const handleChangeInput = (e) => {
        setFilteration({ ...filteration, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        filterCars();
    }, [filteration]);

    useEffect(() => {
        fetchCars();
    }, []);
    return (
        <div className={`${styles.popularCarHome__handler}`}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={`${styles.carHome__search}`}>
                            <img src={locationIcon} alt="location-icon" />
                            <input
                                type="text"
                                className='form-control'
                                name='search'
                                placeholder='Search By Name..'
                                onChange={handleChangeInput}
                            />
                            <button className='mainBtnBlueStyle'>
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <MyMainHeader subTitle='POPULAR RENTAL DEALS' tilte='Most popular cars rental deals' />
                    </div>
                </div>
                <div className="row justify-content-center mt-5">

                    {carData?.length !== 0 ?
                        <>
                            {
                                carData?.slice(0, 4)?.map((el, i) => (
                                    <div key={el?.id} className="col-lg-3 col-md-6 mb-5">
                                        <ProductCarCard prodImg={carImages[i]} prodNameMake={el?.make} prodNameModel={el?.model} prodPrice={el?.price} />
                                    </div>
                                ))
                            }
                        </>
                        :
                        <div className="col-12">
                            <h5 className='text-danger text-center text-capitalize'>
                                No Cars with this search
                            </h5>
                        </div>
                    }

                </div>
                <div className="row">
                    <div className="col-12">
                        <div className={`${styles.btnViewAll}`}>
                            <NavLink to='shop' className={'nav-link'}>
                            <button>
                                Show all vehicles <i className="bi bi-arrow-right-short"></i>
                            </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
