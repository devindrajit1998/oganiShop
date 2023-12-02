import React from 'react'
import { Link } from 'react-router-dom'

export default function ShopBtn(props) {
  return (
    <>
    <Link to={`${props.link}`} className="primary-btn">
                            {props.name}
                        </Link>
    </>
  )
}
