import styles from './allCarShop.module.css'
import locationIcon from '../../assets/homePoularCar/location.png'
import car1 from '../../assets/productCard/car1.png'
import car2 from '../../assets/productCard/car2.png'
import car3 from '../../assets/productCard/car3.png'
import car4 from '../../assets/productCard/car4.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../functions/baseUrl'
import toast from 'react-hot-toast'
import MyMainHeader from '../myMainHeaderSec/MyMainHeader'
import ProductCarCard from '../productCarCardItem/ProductCarCard'
export default function AllCarShop() {
    const carImages = [
        car1,
        car2,
        car3,
        car4,
        car1,
        car2,
        car3,
        car4,
        car1,
        car2,
        car3,
        car4,
        car1,
        car2,
        car3,
        car4,
    ]
    const [allCarsData, setAllCarsData] = useState([]);
    const [carData, setCarData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 12;
    const [totalPages, setTotalPages] = useState(1);

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
            const response = await axios.get(`${baseURL}/cars?t=${new Date().getTime()}`);
            const fetchedCars = response?.data;
            setAllCarsData(fetchedCars);
            const totalCars = fetchedCars.length;
            setTotalPages(Math.ceil(totalCars / carsPerPage));
            setCarData(fetchedCars.slice(0, carsPerPage));
        } catch (error) {
            toast.error(error?.response?.data.message || 'Something Went Wrong!');
        };
    };

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
            const startIndex = (newPage - 1) * carsPerPage;
            const endIndex = startIndex + carsPerPage;
            setCarData(allCarsData.slice(startIndex, endIndex));
        }
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
        fetchCars(currentPage);
    }, [currentPage]);
    return (
        <div className={`${styles.allCarShop__handler}`}>
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
                                carData?.map((el, i) => (
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

                <div className="pagination-container my-4 d-flex justify-content-center">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                Previous
                            </button>
                        </li>
                        {[...Array(totalPages)].map((_, index) => (
                            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                <button
                                    className="page-link"
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button
                                className="page-link"
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
