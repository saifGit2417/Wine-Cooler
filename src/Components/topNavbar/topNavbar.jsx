import React from 'react'
import style from './topNavbar.module.css'
import { FaTruckLoading, FaQuestionCircle, FaUserAlt, FaShoppingCart } from 'react-icons/fa';



function TopNavbar() {
    return (
        <div className={style.container}>
            <div className={style.innercontainer}>
                <p className={style.logo}><FaTruckLoading /> DELIVERY</p>
                <p className={style.logo}><FaQuestionCircle /> HELP</p>
                <p className={style.logo}> <FaUserAlt />MY ACOUNT</p>
                <p className={style.cart}>Basket:&#8356;0.00
                    <span className={style.cartLogo}>
                        <FaShoppingCart />
                    </span>
                </p>
            </div>
        </div>
    )
}

export default TopNavbar