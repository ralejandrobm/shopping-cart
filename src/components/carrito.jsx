import React from 'react'


export default function Carrito({products, onClick}) {



    return (
        <div className=' flex flex-wrap  bottom-0 justify-center  bg-blue-500 w-screen'>
            {products.map((product) => (
                <div key={product.id} className='flex justify-center shadow-md shadow-gray-600 border border-gray-500 min-w-2/12 max-w-3/5 bg-white m-2 gap-2 rounded p-1'>
                    <p>{product.nombre}</p>
                    <p className=' text-gray-500'>cant: {product.cantidad}</p>
                    <button onClick={()=>onClick(product.id)} className=" m-1 w-5 h-5 flex items-center justify-center rounded-full  active:scale-90 transition-all duration-150 ease-in-out cursor-pointer">
                        ❌
                    </button>
                </div>
            ))}


        </div>
    )
}
