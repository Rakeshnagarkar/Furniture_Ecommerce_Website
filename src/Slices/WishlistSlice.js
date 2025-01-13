import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: { // Corrected the typo here
        items: [],
        
    },
    reducers: {
        addTowishlist(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

             if(!existingItem){
                state.items.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.images[0],
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }

            
        },

        removeFromwishlist(state, action){

            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            
            if(existingItem){

            state.items = state.items.filter(item => item.id != id)


            }


        }
    },
});

export const { addTowishlist,removeFromwishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
