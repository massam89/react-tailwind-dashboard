import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui/uiSlice";

console.log('first')
const store = configureStore({
    reducer: {
        ui: uiSlice
    }
})

export default store