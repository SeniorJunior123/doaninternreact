import React from 'react';
import Header from '../components/header/Header';
import Carousel from '../components/Slider/Carousel';
import PhuongHoang from '../components/HotSale/components/PhuongHoang'
import CaNeon from '../components/HotSale/components/CaNeon'
import CaChuot from '../components/HotSale/components/CaChuot';
import Footer from '../components/footer/Footer'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux';

function HomePage(props) {
    const {userInfo} = useSelector(state => state.userSignin)
    
    return (
        <div style={{position: 'relative'}}>
            <Header></Header>
            <Carousel></Carousel>
            <PhuongHoang></PhuongHoang>
            <CaChuot></CaChuot>
            <CaNeon></CaNeon>
            <Footer></Footer>
            <ScrollToTop></ScrollToTop>
            {
               userInfo && userInfo.isAdmin === false ? (<AppChat></AppChat>) : ""
            }
        </div>
    );
}

export default HomePage;