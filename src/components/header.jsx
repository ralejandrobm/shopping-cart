import React from 'react'
import { useNavigate } from 'react-router'
import CartIcon from './cartIcon'

export default function Header() {
  const nav = useNavigate()
  return (
    <div className=' bg-blue-900 flex justify-center  cursor-pointer h-10'>
            <p className=' text-white text-2xl pr-4'><a onClick={()=>nav("/agregar")}>agregar producto</a></p>
            <p className=' text-white text-3xl'><a onClick={()=>nav("/")}>Catalogo</a></p>
            <p className=' text-white text-2xl pl-4'><a onClick={()=>nav("/carrito")}>carrito de compras <CartIcon/> </a></p>
            
    </div>
  )
}
