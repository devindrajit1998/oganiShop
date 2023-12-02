import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useProductContext } from '../context/ProductContext';

import 'swiper/css';
import { Link } from 'react-router-dom';
export default function Sale() {




    const { sale } = useProductContext();
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}
            >
                {sale.map((curElem) => {
                    const {id,name, price, category, discount,img} = curElem;
                    return <SwiperSlide >
                        <div class="product__discount__item">
                            <div class="product__discount__item__pic set-bg">
                                <img src={`img/featured/${img}`} alt="" />
                                <div class="product__discount__percent">{discount} <span>%</span> </div>
                                <ul class="product__item__pic__hover">
                                    <li><a href="!#"><i class="fa fa-heart"></i></a></li>
                                    <li> <Link to={`/ProductDetails/${id}`}>
                                                            <i className="fa-solid fa-eye" />
                                                        </Link></li>
                                    <li><a href="!#"><i class="fa fa-shopping-cart"></i></a></li>
                                </ul>

                            </div>
                            <div class="product__discount__item__text">
                                <span>{category}</span>
                                <h5><a href="!#">{name}</a></h5>
                                <div class="product__item__price">{price}</div>
                            </div>
                        </div>

                    </SwiperSlide>
                })}




            </Swiper>
        </>
    )
}
