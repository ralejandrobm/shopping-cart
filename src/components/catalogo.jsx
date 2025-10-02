import React from 'react'


export default function Catalogo({products, onClick}) {




    return (
        <>
            <div className=' flex flex-wrap  justify-around align-baseline pb-2'>
                {products.map((product) => (
                    <div key={product.id} className='flex justify-center shadow-md shadow-gray-600 border border-gray-500 min-w-2/5 max-w-3/4 m-2 p-2 rounded gap-2'>
                        <div>
                            <h1 className='my-2 font-bold'>{product.nombre}</h1>
                            <p className=' text-gray-500'>{product.descripcion}</p>
                            <p className=' text-gray-500'>cantidad : {product.cantidad}</p>
                            <button onClick={()=>onClick(product.id)} className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95  active:bg-green-600 transition-all duration-150 ease-in-out mt-2">
                                Agregar
                            </button>
                        </div>
                        <div>
                            <img src={product.src} alt="imagen" className=' w-40 h-40' />
                        </div>

                    </div>
                ))}
            </div>


        </>
    )
}
