import React from "react";
import { useState } from "react";

export default function AgregarEquipo({products, setProducts}) {
  const [visible, setVisible] = useState(false);

  const [image, setImage] = useState(null);

  const [product, setProduct] = useState({
     nombre: "", descripcion: "", src: null, cantidad: 1, id: Date.now() 
  })

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(file);
      console.log(URL.createObjectURL(file));
      setImage(URL.createObjectURL(file));

      setProduct({...product, src:URL.createObjectURL(file)})
    }
  };

  const agregarEquipo = (e) => {
    e.preventDefault();
        const copyProducts = [...products, product]

        setProducts(copyProducts)
        setProduct({
            nombre: "", descripcion: "", src: null, cantidad: 1, id: Date.now() 
         })
         setImage(null)
  }

  return (
    <div className=" w-screen flex justify-center">
      <div className="flex  flex-col justify-between items-center border border-gray-500 w-11/12 m-1 p-1 rounded">
        <div className="w-full flex">
          <div className=" flex justify-center text-center w-screen">
            <p className="  "> Agregar equipo de video</p>
          </div>
          <button
            onClick={() => setVisible(!visible)}
            className="cursor-pointer"
          >
            {visible ? "⬆️" : "⬇️"}
          </button>
        </div>
        {visible && (
          <form className=" flex flex-col mt-2 w-3/4" onSubmit={agregarEquipo}>
            <label htmlFor="nombre"> nombre: </label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              placeholder="nombre del equipo"
              className="border my-2 p-1 rounded"
              required
              value={product.nombre}
              onChange={(e) => setProduct({...product, nombre: e.target.value})}
            />
            <label htmlFor="descripcion"> descripción: </label>
            <textarea
              id="descripcion"
              name="descripcion"
              placeholder="describe el equipo"
              className="border my-2 p-1 rounded"
              required
              value={product.descripcion}
              onChange={(e) => setProduct({...product, descripcion: e.target.value})}
            />
            <label htmlFor="cantidad"> cantidad: </label>
            <input
              type="number"
              id="cantidad"
              name="cantidad"
              placeholder="cantidad"
              className="border my-2 p-1 rounded"
              min={1}
              required
              value={product.cantidad}
              onChange={(e) => setProduct({...product, cantidad: e.target.value})}
            />
            <label htmlFor="imagen"> imagen: </label>
            <input
              id="imagen"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border my-2 p-1 rounded"
              name="imagen"
              required
              
              
            />
            <img src={image} alt="imagen" className=" w-40 h-40" />
            <button
             type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 active:scale-95  active:bg-green-600 transition-all duration-150 ease-in-out mt-2"
            >
              Agregar equipo
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
