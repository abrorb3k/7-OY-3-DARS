import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  filteredProducts: [],
  search: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.filteredProducts = state.products.filter((product) =>
        product.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
});

export const { setProducts, setSearch } = productSlice.actions;

export default productSlice.reducer;
