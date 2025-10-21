import React from "react";
import Carrito from "./carrito";
import Catalogo from "./catalogo";
import AgregarEquipo from "./agregarEquipo";
import { Routes, Route } from "react-router";

export default function CatCarr() {
  return (
    <div
      className=" flex flex-col justify-between h-screen"
      style={{ height: "calc(100vh - 2.5rem)" }}
    >
      {/*
            <AgregarEquipo products={products} setProducts={setProducts}></AgregarEquipo>
            <Catalogo products={products} onClick={agregar}></Catalogo>
            <Carrito products={productsCarr} onClick={eliminar}></Carrito>
           */}

      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/agregar" element={<AgregarEquipo />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}
