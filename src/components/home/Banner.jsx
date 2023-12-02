import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ShopBtn from '../common/ShopBtn';

const SliderData = [{
    smTitle: "FRUIT FRESH",
    mainTitle1: " Fruit",
    mainTitle2: " 100% Organic",
    shipping: "Free Pickup and Delivery Available",
    button: "Shop Now",
    BgImg: "https://c4.wallpaperflare.com/wallpaper/951/454/494/berries-raspberries-food-fruits-wallpaper-preview.jpg"
},
{
    smTitle: "VEGETABLE FRESH",
    mainTitle1: " Vegetable",
    mainTitle2: " 100% Organic",
    shipping: "Free Pickup and Delivery Available",
    button: "Shop Now",
    BgImg: "https://w0.peakpx.com/wallpaper/929/367/HD-wallpaper-fruits-fruits-vegetables-fruit-vegetable.jpg"
}]

export default function Banner() {

    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true} 
            >
                {SliderData.map((curElem, index) => {

                 const {smTitle,mainTitle1,mainTitle2,shipping,button,BgImg} = curElem;
                    return (
                        <SwiperSlide key={index}>
                            <div className="hero__item set-bg" style={{ backgroundImage: `url("${BgImg}") ` }}>
                                <div className="hero__text">
                                    <span>{smTitle}</span>
                                    <h2>
                                        {mainTitle1} <br />
                                       {mainTitle2}
                                    </h2>
                                    <p>{shipping}</p>
                                    <ShopBtn name={`${button}`} />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
