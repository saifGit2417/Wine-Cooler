import React from 'react'
import style from './TempreatureZones.module.css'
import Tempzone1 from '../../Assets/Images/Tempzone1.webp'
import Tempzone2 from '../../Assets/Images/Tempzone2.webp'
import Tempzone3 from '../../Assets/Images/tempzone3.webp'

function TempreatureZones() {
    return (
        <>
            <hr  style={{color:"red",width:"80vw",marginLeft:"10vw"}}/>
            <h2> TEMPREATURE ZONES</h2>
            <div className={style.conatiner} >
                <img src={Tempzone1} alt="Tempzone1" className={style.image} />
                <img src={Tempzone2} alt="Tempzone2" className={style.image} />
                <img src={Tempzone3} alt="Tempzone3" className={style.image} />
            </div>
        </>
    )
}

export default TempreatureZones