import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={`${className}`}
      style={{ display: 'none'}}
      onClick={onClick}
    />
  );
}

function Carousel(props) {
  let {slider, slider1, slider2} = props
  const [nav, setNav] = useState({nav1: null, nav2: null})

  useEffect(() => {
    setNav({
      nav1: slider1,
      nav2: slider2
    })
  }, [])

  const settings = {
    loop:true,
    dots: false,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 2500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 
  const next = () =>  {
    slider1.slickNext();
  }
  const previous = () => {
    slider2.slickPrev();
  }

  return (
    <section id="carousel">
      <div className="carousel">
        <div className="carousel-left">
          <div className="carousel-left-slide">
            <Slider asNavFor={nav.nav2}
                    ref={slider => (slider1 = slider)} 
                    {...settings} >
              <div key={1}>
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/441/675/products/cabuomvangrouwtetrab0da54310af.jpg?v=1703000559217"></img>
              </div>
              <div key={2}>
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/441/675/products/tetrablackskirt.jpg?v=1703000559253"></img>
              </div>
              <div key={3}>
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/441/675/products/cabuomdaquangrouwtetrav.jpg?v=1703000559160"></img>
              </div>
              <div key={4}>
                <img src="https://bizweb.dktcdn.net/thumb/grande/100/441/675/products/cachidomatdogowlightalbinotetr.jpg?v=1703000559337"></img>
              </div>
            </Slider>
            <div className='carousel-left-move' onClick={() => previous()}>
                <div className="prev">
                    <LeftOutlined></LeftOutlined>
                </div>
                <div className="next" onClick={() => next()}>
                    <RightOutlined></RightOutlined>
                </div>
            </div>
          </div>
          <div className="carousel-left-bottom">
            <Slider asNavFor={nav.nav1}
                    ref={slider => (slider2 = slider)}
                    slidesToShow={4}
                    swipeToSlide={true}
                    focusOnSelect={true}
                     >
              
              <div>
                TRỢ GIÁ MÙA DỊCH <br></br> Ưu đãi vô địch
              </div>
              <div>
                Hàng loạt cá hấp dẫn  <br></br>  Hotsale giảm sập sàn
              </div>
              <div>
              Cá Neon bao đẹp  <br></br>  Giá mới cực tốt
              </div>
              <div>
              Phượng Hoàng siêu xinh  <br></br>  Mua đi chờ chi
              </div>
              <div>
              Các loại cá khác không kém   <br></br>   Mua xã ga
              </div>

            </Slider>
          </div>
        </div>
        <div className="carousel-right">
          <div className="carousel-right-item">
            <img src="https://sieuthicakoi.vn/storage/74/8b/748btwynotio63ex8dngp3kbvwod_thiet-ke-thi-cong-ho-ca-koi-8.webp"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://sieuthicakoi.vn/storage/92/hs/92hszddvjq6nwe8uix8j8dburwtn_thiet-ke-thi-cong-ho-ca-koi-7.webp"></img>
          </div>
          <div className="carousel-right-item">
            <img src="https://sieuthicakoi.vn/storage/c0/fm/c0fmlnd3fa8x7tfcn79by9j36rvf_thiet-ke-thi-cong-ho-ca-koi-9.webp"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
