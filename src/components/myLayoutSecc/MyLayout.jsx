import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyHome from "../../pages/myHomePage/MyHome";
import MyFooter from "../myFooterSec/MyFooter";
import MyShop from "../../pages/myShopPage/MyShop";
import MyNavBar from "../myNavBarSecc/MyNavbar";

export default function MyLayout() {
    const [scrollToggle, setScrollToggle] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setScrollToggle(true);
        } else {
            setScrollToggle(false);
        }
    });
    return (
        <>
            <MyNavBar scrollToggle={scrollToggle}/>
            <Routes>
                <Route path='/' element={<MyHome />} />
                <Route path='/shop' element={<MyShop />} />
            </Routes>
            <MyFooter />
        </>
    )
}
