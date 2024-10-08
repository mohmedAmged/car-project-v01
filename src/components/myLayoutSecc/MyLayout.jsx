// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MyHome from "../../pages/myHomePage/MyHome";
// import MyFooter from "../myFooterSec/MyFooter";
import MyShop from "../../pages/myShopPage/MyShop";
// import MyNavBar from "../myNavBarSecc/MyNavbar";

export default function MyLayout() {

    return (
        <>
            
            <Routes>
                <Route path='/' element={<MyHome />} />
                <Route path='/shop' element={<MyShop />} />
            </Routes>
        </>
    )
}
