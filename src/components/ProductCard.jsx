import React from "react";
import { FaRegHeart, FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slices/cartSlice";
import { addTowishlist } from "../Slices/WishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const wishlistItems = useSelector((state) => state.wishlist.items)
  const isInCart = cartItems.some((item) => item.id == product.id);
  const isInwishlist = wishlistItems.some((item) => item.id == product.id);

  const handleAddtoCart = () => {
    if (!isInCart) {
      dispatch(addToCart(product));
    }
  };

  const handleAddtowishlist = () => {
    if(!isInwishlist){
      dispatch(addTowishlist(product));
    }
  };

  return (
    <div className="w-full group cursor-pointer h-full">
      <div className="relative overflow-hidden">
        <img src={product.images[0]} alt={product.name} />
        <div className="absolute -bottom-20 group-hover:bottom-2 transition-all duration-500 ease-in-out w-full">
          <button
            onClick={handleAddtoCart}
            className={`w-11/12 block mx-auto ${isInCart ? 'bg-gray-200 hover:bg-gray-400' : 'bg-lime-200 hover:bg-lime-400'} transition-all ease-linear duration-200 py-2`}
          >
            {isInCart ? "Item in Cart" : "Add To Cart"}
          </button>
        </div>
        <div className="p-2 text-xl flex flex-col absolute top-2 -right-20 group-hover:right-2 transition-all duration-500 ease-in-out gap-3">
          <button
            onClick={handleAddtowishlist}
            className={`p-3 rounded-full transition-all ease-linear duration-200 ${isInwishlist ? 'bg-red-500 text-white': 'bg-lime-200 hover:bg-lime-400 '}`}
          >
            <FaRegHeart />
          </button>
          <button className="bg-lime-200 p-3  hover:bg-lime-400 rounded-full transition-all ease-linear duration-200">
            <FaRegEye />
          </button>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold">{product.name}</h1>
          <h4 className="font-bold text-lime-500">$ {product.price}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
