import React from "react";
import { Link } from "react-router-dom";
import CartOffset from "./CartOffset";
import WishlistOffset from "./WishlistOffset";
import { BsShop, BsCart4 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

function Navbar() {
  const navitems = [
    { label: "Home", path: "/", icon: <IoHomeOutline /> },
    { label: "Shop", path: "/shop", icon: <BsShop /> },
    { label: "Cart", path: "/cart", icon: <BsCart4 /> },
    { label: "Wishlist", path: "/wishlist", icon: <FaRegHeart /> },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-10 bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-2 p-5">
      <div className="w-10/12 mx-auto flex justify-between items-center py-2">
        <div className="flex-1 flex items-center">
          <h1 className="font-bold text-2xl font-sans">Heavenly Homes</h1>
        </div>
        <div className="sm:flex-1 sm:w-auto w-full sm:shadow-none z-50 sm:py-0 py-3 flex sm:relative fixed sm:bottom-auto bottom-0 sm:bg-transparent bg-white justify-center items-center">
        <ul className="navbar-list flex justify-center w-full items-center mr-28 space-x-6">
  {navitems.map((item) => (
    <li
      key={item.path}
      className="navbar-item sm:rounded-none rounded-full"
    >
      <Link
        to={item.path}
        className="flex items-center justify-center transition hover:text-lime-600"
        aria-label={item.label}
      >
        {/* Label for larger screens */}
        <span className="sm:block hidden">{item.label}</span>

        {/* Icon for mobile screens */}
        <span
          className="sm:hidden block hover:bg-lime-400 rounded-full"
          style={{
            display: "flex", // Ensure the icon is visible
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem", // Define hover area size
            height: "2.5rem", // Define hover area size
            fontSize: "2rem", // Ensure the icon size is preserved
          }}
        >
          {item.icon} {/* Render the icon */}
        </span>
      </Link>
    </li>
  ))}
</ul>


        </div>
        <div className="flex-1 text-xl gap-4 flex justify-end items-center">
          <WishlistOffset />
          <CartOffset />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
