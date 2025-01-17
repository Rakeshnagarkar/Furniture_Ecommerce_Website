import React from "react";
import { FaFacebook, FaRegCopyright } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="w-11/12 h-full mx-auto gap-3 flex md:flex-row flex-col flex-wrap md:justify-start justify-start items-start md:items-start">
          <div className="col flex flex-col flex-1">
            <h1 className="logo font-bold md:text-2xl text-xl">Havenly Homes</h1>
            <p className="text-sm text-gray-500 italic">
            At Havenly Homes, we believe in providing the finest quality products tailored to suit your style and needs. With a commitment to excellence and customer satisfaction, we strive to make every purchase a seamless experience. Explore our collection and find something special for your home or workspace today.
            </p>
          </div>
          <div className="col flex-1">
            <h1 className="font-bold title py-2 text-2xl">Quick Links</h1>
            <ul className="flex flex-col gap-2 mr-20">
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Home
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                About
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Contact
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Shop
              </li>
            </ul>
          </div>
          <div className="col flex-1">
            <h1 className="font-bold title py-2 text-2xl">Terms & Conditions</h1>
            <ul className="flex flex-col gap-2 mr-32">
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Privacy Policy
              </li>
              <li className="font-bold hover:text-lime-400 cursor-pointer">
                Terms of Use
              </li>
            </ul>
          </div>
          <div className="col flex flex-col flex-1 items-start">
            <h1 className="font-bold title py-2 text-2xl">Social Links</h1>
            <ul className="flex gap-3 text-lg mt-2 mb-4">
              <li>
                <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-sm hover:text-white">
                  <FaFacebook />
                </button>
              </li>
              <li>
                <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-sm hover:text-white">
                  <FaSquareInstagram />
                </button>
              </li>
              <li>
                <button className="p-3 bg-lime-400 hover:bg-lime-500 transition-all ease-linear duration-300 rounded-sm hover:text-white">
                  <FaSquareXTwitter />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="sm:flex-row flex-col w-11/12 sm:pb-2 pb-24 mx-auto border-t border-gray-600 py-2 flex justify-between items-center">
          <h4 className="flex items-center gap-1 font-medium text-sm">
            <FaRegCopyright />RakeshNagarkar. All right reserved
          </h4>
          <img
            src="./img/card.png"
            alt="Payment Methods"
            className="max-w-[150px]"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
