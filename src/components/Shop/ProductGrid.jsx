import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { Link } from 'react-router-dom';

export default function ProductGrid() {

    const {totalData} = useProductContext();

    return (
        <>

        {totalData.map((curElem)=>{
             const {id,name, price, category, discount,img} = curElem;
            return (

                <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item ">
                    <div
                        className="product__item__pic set-bg"

                    > <img src={`img/featured/${img}`} alt="" />
                        <ul className="product__item__pic__hover">
                            <li>
                                <a href="#">
                                    <i className="fa fa-heart" />
                                </a>
                            </li>
                            <li>
                            <Link to={`/ProductDetails/${id}`}>
                                                            <i className="fa-solid fa-eye" />
                                                        </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa fa-shopping-cart" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">{name}</a>
                        </h6>
                        <h5>{price}</h5>
                    </div>
                </div>
            </div>

            )
        })}


        </>
    )
}
