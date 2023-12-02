import React from 'react'
import { Link } from 'react-router-dom'

export default function Head(props) {
    return (
        <>
            <section
                className="breadcrumb-section set-bg"
                data-setbg="img/breadcrumb.jpg"
                style={{ backgroundImage: 'url("/img/breadcrumb.jpg")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>{props.title}</h2>
                                <div className="breadcrumb__option">
                                    <Link to="">{props.home}</Link>
                                    <span>  <Link to="">{props.category}</Link></span>

                                    {/* <span>{props.desc}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
