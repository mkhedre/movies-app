import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "./movie/movieSlice"

const store = configureStore({
    reducer:{
        movie:movieSlice
    }
})
export default store