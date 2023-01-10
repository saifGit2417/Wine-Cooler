import React from 'react'
import style from './ThreeImages.module.css'
import img1 from '../../Assets/Images/img1.webp'
import img2 from '../../Assets/Images/img2.webp'
import img3 from '../../Assets/Images/img3.webp'

function ThreeImages() {
   
    return (
        <div className={style.container}>
            <div className={style.two}>
                <img src={img1} className={style.img1} />
                <img src={img2} className={style.img2} />
            </div>
            <div className={style.third}>
                <img src={img3} alt="" className={style.img3} />
            </div>
        </div>
    )
}

export default ThreeImages