import React from "react";

function ProItem({ product }) {
  return (
    <div>
      <div className="h-full flex flex-col items-center p-7 rounded-2xl hover:border-gray-600 border-1 border-transparent shadow-2xl gap-3 cursor-pointer hover:translate-y-[-10px] duration-300">
        <img
          className="w-1/3 shadow-2xl rounded-xl"
          src={product.image}
          alt="img"
        />
        <strong className="text-black text-2xl "> ${product.price}</strong>
        <h3 className="text-xl text-center text-red-800">{product.title}</h3>
        <p className=" text-xl text-center text-gray-600">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default ProItem;
