import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, setSearch } from "../redux/productSlice";
import ProItem from "./ProItem";

function Products() {
  const dispatch = useDispatch();
  const { filteredProducts, search } = useSelector((state) => state.products);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        dispatch(setProducts(data));
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [dispatch]);

  const handleSearch = (event) => {
    dispatch(setSearch(event.target.value));
  };

  return (
    <div className="">
      <label className="block ml-7 mt-5 font-bold text-red-800">QIDIRISH</label>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search products..."
        className="border p-2 mb-4 mt-2 ml-7 rounded-4xl bg-gray-400 text-red-800"
      />
      <div className="grid grid-cols-3 gap-10">
        {filteredProducts.map((product) => (
          <ProItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Products);
