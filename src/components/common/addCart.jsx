import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext';


export default function AddCart() {
const {id} = useParams();
const {addCart} = useProductContext()
console.log("id = >", id)
  return (
    <>
<button className='primary-btn' onClick={()=> addCart(id)}>ADD TO CART</button>
    </>
  )
}
