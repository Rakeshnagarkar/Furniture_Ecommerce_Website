import React from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import Newsletter from "../components/Newsletter";

function Wishlist() {
  const CartItems = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="w-full h-full flex flex-col items-center py-5 mt-14">
      <h1 className="text-center text-xl font-bold py-3">My Wishlist</h1>
      <div className="w-11/12 py-3 min-h-[50vh]">
        <table className="w-full border-collapse border border-gray-300">
          <thead className="bg-gray-300">
            <tr className="font-bold text-left">
              <th className="py-3 px-3 border border-gray-300">ID</th>
              <th className="py-3 px-3 border border-gray-300">Name</th>
              <th className="py-3 px-3 border border-gray-300">Quantity</th>
              <th className="py-3 px-3 border border-gray-300">Price</th>
              <th className="py-3 px-3 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {CartItems.length > 0 ? (
              CartItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100 text-left">
                  <td className="py-3 px-3 border border-gray-300">{item.id}</td>
                  <td className="py-3 px-3 border border-gray-300">{item.name}</td>
                  <td className="py-3 px-3 border border-gray-300">{item.quantity}</td>
                  <td className="py-3 px-3 border border-gray-300">${item.price}</td>
                  <td className="py-3 px-3 border border-gray-300 text-center">
                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaRegTrashCan />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-5 text-center text-gray-500">
                  The Wishlist Is Empty. Start adding some items!
                </td>
              </tr>
            )}
          </tbody>
         
        </table>
      </div>
      <div className='w-11/12 py-5'>
        <Newsletter/>
        
        </div>
    </div>
  );
}

export default Wishlist;
