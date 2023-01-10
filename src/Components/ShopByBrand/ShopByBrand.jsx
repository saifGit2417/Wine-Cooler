import React from 'react'
import style from "./ShopByBrand.module.css"
import ShopByBrand1 from '../../Assets/Images/ShopByBrand1.webp'
import ShopByBrand2 from '../../Assets/Images/ShopByBrand2.webp'
import ShopByBrand3 from '../../Assets/Images/ShopByBrand3.webp'
import ShopByBrand4 from '../../Assets/Images/ShopByBrand4.webp'
import ShopByBrand5 from '../../Assets/Images/ShopByBrand5.webp'
import ShopByBrand6 from '../../Assets/Images/ShopByBrand6.webp'
import ShopByBrand7 from '../../Assets/Images/ShopByBrand7.webp'
import ShopByBrand8 from '../../Assets/Images/ShopByBrand8.webp'
import ShopByBrand9 from '../../Assets/Images/ShopByBrand9.webp'

function ShopByBrand() {
    return (
        <>
            <hr style={{ color: "red", width: "80vw", marginLeft: "10vw" }} />
            <h2>SHOP BY BRAND</h2>
            <div className={style.container}>
                <div className={style.innerContainer}>
                    {/* <table>
                        <tr>
                            <td><img src={ShopByBrand1} alt="" className={style.images} /></td>
                            <td><img src={ShopByBrand2} alt="" className={style.images} /></td>
                            <td><img src={ShopByBrand3} alt="" className={style.images} /></td>
                        </tr>
                    </table> */}
                    <img src={ShopByBrand1} alt="" className={style.images} />
                    <img src={ShopByBrand2} alt="" className={style.images} />
                    <img src={ShopByBrand3} alt="" className={style.images} />
                </div>
                <div className={style.innerContainer}>
                    {/* <table>
                        <tr>
                            <td><img src={ShopByBrand4} alt="" className={style.images} /></td>
                            <td><img src={ShopByBrand5} alt="" className={style.images} /></td>
                            <td><img src={ShopByBrand6} alt="" className={style.images} /></td>
                        </tr>
                    </table> */}
                    <img src={ShopByBrand4} alt="" className={style.images} />
                    <img src={ShopByBrand5} alt="" className={style.images} />
                    <img src={ShopByBrand6} alt="" className={style.images} />
                </div>
                <div className={style.innerContainer}>
                    {/* <table>
                        <tr>
                            <td><img src={ShopByBrand7} alt="" className={style.images} /></td>
                            <td><img src={ShopByBrand8} alt="" className={style.images} /></td>
                            <td><img src={ShopByBrand9} alt="" className={style.images} /></td>
                        </tr>
                    </table> */}
                    <img src={ShopByBrand7} alt="" className={style.images} />
                    <img src={ShopByBrand8} alt="" className={style.images} />
                    <img src={ShopByBrand9} alt="" className={style.images} />
                </div>
            </div>
        </>
    )
}

export default ShopByBrand