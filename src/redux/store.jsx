import { configureStore } from "@reduxjs/toolkit";
import CoinsSlice from "./coinSlice";

export const store = configureStore({
    reducer: {
        coinsStore: CoinsSlice
    }
})