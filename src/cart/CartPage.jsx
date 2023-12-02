import React from 'react'
import Head from '../components/common/Head'
import Layout from '../components/common/Layout'
import { useProductContext } from '../components/context/ProductContext'
// import { useParams } from 'react-router-dom';

export default function CartPage() {
    const { cart, removeAllCart,dltSingleData } = useProductContext();
    // const { id } = useParams();


    return (

        <>
            <Layout />
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Head title="Vegetable’s Package" home="Home" category="category" />
                        </div>
                        <div className="col-md-12 my-5">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th />
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {cart.map((curElem) => {
                                            const {id, name, price, img } = curElem;
                                            console.log('cart name', name)
                                            return (
                                                <tr key={id}>
                                                    <td className="shoping__cart__item">
                                                        <img src={`img/featured/${img}`} alt="" />
                                                        <h5>{name}</h5>
                                                    </td>
                                                    <td className="shoping__cart__price">{price}</td>
                                                    <td className="shoping__cart__quantity">
                                                        <div className="quantity">
                                                            <div className="pro-qty">
                                                                <span className="dec qtybtn">-</span>
                                                                <input type="text" defaultValue={1} />
                                                                <span className="inc qtybtn">+</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="shoping__cart__total">total price</td>
                                                    <td className="shoping__cart__item__close">
                                                        <i className="fa-solid fa-xmark" onClick={()=>dltSingleData(id)} />
                                                    </td>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                            <button className="btn btn-danger" onClick={removeAllCart}>CLEAR CART</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
