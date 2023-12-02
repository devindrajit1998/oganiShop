import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';


const SliderData = [
    {
        name: "Fresh Fruit",
        img: "cat-1.jpg",
        link: ""
    },
    {
        name: "Dried Fruit",
        img: "cat-2.jpg",
        link: ""
    },
    {
        name: "Vegetable",
        img: "cat-3.jpg",
        link: ""
    },
    {
        name: "drink fruits",
        img: "cat-4.jpg",
        link: ""
    }



]

export default function HomeSlider() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={50}
                loop={true} 
            >

                {SliderData.map((curElem, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div
                                className="categories__item set-bg"

                                style={{ backgroundImage: `url("img/categories/${curElem.img}") ` }}
                            >
                                <h5>
                                    <Link to={curElem.link}>{curElem.name}</Link>
                                </h5>
                            </div>

                        </SwiperSlide>
                    )
                })}


            </Swiper>
        </>
    )
}
