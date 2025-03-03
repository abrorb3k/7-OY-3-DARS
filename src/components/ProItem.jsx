import React from "react";

function ProItem({ product }) {
  return (
    <div>
      <div className="h-full flex flex-col items-center p-5 rounded-2xl shadow-2xl gap-3 cursor-pointer hover:translate-y-[-10px] duration-300">
        <img
          className="w-[150px]  p-3 border-4 border-red-800 shadow-2xl rounded-4xl"
          src={product.image}
          alt="img"
        />
        <strong className="text-black text-2xl "> ${product.price}</strong>
        <h3 className="text-xl text-center text-green-500">{product.title}</h3>
        <p className=" text-xl text-center text-amber-600">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProItem;
