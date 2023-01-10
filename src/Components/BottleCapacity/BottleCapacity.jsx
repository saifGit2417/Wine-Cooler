import React from 'react'
import style from './BottleCapacity.module.css'
import BottleCap1 from '../../Assets/Images/BottleCap1.webp'
import BottleCap2 from '../../Assets/Images/BottleCap2.webp'
import BottleCap3 from '../../Assets/Images/BottleCap3.webp'
import BottleCap4 from '../../Assets/Images/BottleCap4.webp'

function BottleCapacity() {
    return (
        <>
            <hr style={{ color: "red", width: "80vw", marginLeft: "10vw" }} />
            <h2>BOTTLE CAPACITY</h2>
            <div className={style.container}>
                <div className={style.bottleblock}>
                    <img src={BottleCap1} alt="" className={style.bottleimage} />
                    <img src={BottleCap2} alt="" className={style.bottleimage} />
                </div>
                <div className={style.bottleblock}>
                    <img src={BottleCap3} alt="" className={style.bottleimage} />
                    <img src={BottleCap4} alt="" className={style.bottleimage} />
                </div>
            </div>
        </>
    )
}

export default BottleCapacity