import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCoins = createAsyncThunk("coins/getCoins", async ()=>{
    const res = await axios.get("https://api.coinpaprika.com/v1/tickers")
    return res.data
})

const coinsSlice = createSlice({
    name: "coins",
    initialState: {coins: undefined, isLoding: false},
    extraReducers: {
        [getCoins.pending]: (state, action)=>{
            state.isLoding = true
        },
        [getCoins.fulfilled]: (state, action)=>{
            state.coins = action.payload;
            state.isLoding = false
        },
        [getCoins.rejected]: (state, action)=>{
            state.isLoding = false
        },
    },
})

export default coinsSlice.reducer;