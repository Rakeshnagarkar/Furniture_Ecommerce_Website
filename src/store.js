import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './Slices/cartSlice'
import wishlistSlice from './Slices/WishlistSlice'


const store = configureStore({

    reducer:{
        cart: cartReducer,
        wishlist: wishlistSlice
    }
})

export default store;