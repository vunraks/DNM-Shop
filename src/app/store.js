import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import productsReducer from "../features/products/productsSlice";
import ordersReducer from "../features/orders/orders";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
    orders: ordersReducer,
  },
});
