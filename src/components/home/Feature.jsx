import React from 'react'
import { useProductContext } from '../context/ProductContext';
import { Link } from 'react-router-dom';



export default function Feature() {

    const { selectedCategory, Menu, filterData, handleCategoryClick } = useProductContext();
    return (
        <>
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <div className="featured__controls">
                                <ul>
                                    {
                                        Menu.map((curElem, index) => {
                                            return (
                                                <li className={curElem.category === selectedCategory ? "active" : ""} onClick={() => handleCategoryClick(curElem.category)} key={index}>
                                                    {curElem.category}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        {
                            filterData.map((curElem, index) => {
                                const {id, name, price, img, category } = curElem;
                                return (
                                    <div className={`col-lg-3 col-md-4 col-sm-6 ${category}`} key={index}>
                                        <div className="featured__item">
                                            <div
                                                className="featured__item__pic set-bg"

                                            >
                                            <img src={`img/featured/${img}`} alt="" />
                                                <ul className="featured__item__pic__hover">
                                                    <li>
                                                        <a href="!#">
                                                            <i className="fa fa-heart" />
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link to={`/ProductDetails/${id}`}>
                                                            <i className="fa-solid fa-eye" />
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <a href="!#">
                                                            <i className="fa fa-shopping-cart" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="featured__item__text">
                                                <h6>
                                                    <a href="!#">{name}</a>
                                                </h6>
                                                <h5>{price}</h5>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
