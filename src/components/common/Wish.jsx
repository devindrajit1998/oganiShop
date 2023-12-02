import React from 'react'
import { useProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'

export default function Wish() {
    const { id } = useParams();
    const {addWish} = useProductContext()
  return (
    <>
<button style={{background: "transparent", border: "none"}} onClick={()=> addWish(id)}> <i class="fa-regular fa-heart" /></button>
    </>
  )
}
