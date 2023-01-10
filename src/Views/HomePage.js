import React from 'react'
import BottleCapacity from '../Components/BottleCapacity/BottleCapacity'
import MainNavbar from '../Components/MainNavbar/MainNavbar'
import SevenBlock from '../Components/SevenBlocks/SevenBlock'
import ShopByBrand from '../Components/ShopByBrand/ShopByBrand'
import TempreatureZones from '../Components/TempreatureZones/TempreatureZones'
import ThreeImages from '../Components/ThreeImages/ThreeImages'
import TopNavbar from '../Components/topNavbar/topNavbar'

function HomePage() {
    return (
        <div>
            <TopNavbar />
            <MainNavbar />
            <SevenBlock />
            <ThreeImages />
            <TempreatureZones />
            <BottleCapacity />
            <ShopByBrand />
        </div>
    )
}

export default HomePage