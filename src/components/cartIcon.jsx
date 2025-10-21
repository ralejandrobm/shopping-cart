

import { useProducts } from "../contex/products";

export default function CartIcon() {


  const { productsCarr } = useProducts();
  return (
    <div className="relative inline-block mt-1">
      {/* Icono de carrito */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 6m5-6v6m4-6v6m5-6l-2 6"
        />
      </svg>

      {/* Número arriba */}
      <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
        {productsCarr.length}
      </span>
    </div>
  );
}
