import React from 'react'
import Carrito from './carrito'
import Catalogo from './catalogo'
import AgregarEquipo from './agregarEquipo'

import camara from '../assets/camara.jpg'
import camara2 from '../assets/camara2.png'
import lente from '../assets/lente.jpg'
import lente2 from '../assets/lente2.jpg'
import micro from '../assets/micro.jpg'
import { useState } from 'react'
export default function CatCarr() {

    const [products, setProducts] = useState([
        { nombre: "Camera", descripcion: "camara profecional etc.", src: camara, cantidad: 4, id: 1 },
        { nombre: "Lente", descripcion: "camara profecional etc.", src: lente, cantidad: 4, id: 2 },
        { nombre: "Micro", descripcion: "camara profecional etc.", src: micro, cantidad: 4, id: 3 },
        { nombre: "Lente acuatico", descripcion: "camara profecional etc.", src: lente2, cantidad: 4, id: 4 },
        { nombre: "Micro inalambrico", descripcion: "camara profecional etc.", src: camara2, cantidad: 4, id: 5 }
      
    ])

    const [productsCarr, setProductsCarr] = useState([])

    const agregar = (id) => {

        const copiaProducts = [...products]

        const product = copiaProducts.find((p) => (p.id==id))

        if (product.cantidad==0)
            return

        copiaProducts.map((product)=> (product.id == id? product.cantidad = product.cantidad-1: product) )
        setProducts(copiaProducts)

        
        if(productsCarr.length>0)
        {
            const copiaProductsCarr = [...productsCarr]
           
            if (copiaProductsCarr.find((p)=>(p.id===id)) )
                {
                    copiaProductsCarr.map((product)=> (product.id === id? product.cantidad = product.cantidad+1: product) )
                    setProductsCarr(copiaProductsCarr)
                    
        
                }
                else
                {
                    const product = copiaProducts.find((p)=>(p.id===id))
                    setProductsCarr([...copiaProductsCarr, {...product, cantidad:1}])
                }

        }
        else
        {
            const product = copiaProducts.find((p)=>(p.id===id))
            setProductsCarr([{...product, cantidad:1}])
        }
    }

    const eliminar = (id) => {

        const copiaProductsCarr = [...productsCarr]
        const product = productsCarr.find((p)=>(p.id==id))
        const nuevaCopiaProductsCarr = copiaProductsCarr.filter((p)=>(p.id!==id))  
         
        setProductsCarr(nuevaCopiaProductsCarr)
        const cantidad = product.cantidad

        const copiaProducts = [...products]
        copiaProducts.map((product)=> (product.id == id? product.cantidad = product.cantidad+cantidad: product) )
        setProducts(copiaProducts)
        
    }

    return (
        <div className=' flex flex-col justify-between h-screen'  style={{ height: "calc(100vh - 2.5rem)" }}>
            <AgregarEquipo products={products} setProducts={setProducts}></AgregarEquipo>
            <Catalogo products={products} onClick={agregar}></Catalogo>
            <Carrito products={productsCarr} onClick={eliminar}></Carrito>
        </div>
    )
}
