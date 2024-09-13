import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers/axiosinstance";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, productId },{rejectWithValue}) => {
    try {
      const method = productId ? "put" : "post";
      const endpoint = productId ? `/products/${productId}` : "/products";

      const { data } = await axiosInstance[method](endpoint, { product });
      return data;
    } catch (error) {
        return rejectWithValue("Error saving product");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk("products/fetchHomePageProducts", async(_,{rejectWithValue})=>{
    try {
        const {data} = await axiosInstance.get("/products");
        return  data;
    } catch (error) {
        return rejectWithValue("Error fetching products");
    }
})
const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    homePageProducts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(saveProduct.pending, (state) => {
        state.loading = true;
    })
    builder.addCase(saveProduct.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
    })
    builder.addCase(saveProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;

    })

    builder.addCase(fetchHomePageProducts.pending, (state)=> {
        state.loading = true;
    })
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action)=> {
        state.loading = false;
        state.homePageProducts = action.payload.products;
    })
    builder.addCase(fetchHomePageProducts.rejected, (state, action)=> {
        state.loading = false;
        state.error = action.payload;
    })
    
  },
});

export const productReducer = productSlice.reducer;
