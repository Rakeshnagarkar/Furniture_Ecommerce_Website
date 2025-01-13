import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Newsletter() {
  return (
    <div className="relative py-12 sm:py-20 lg:py-36 bg-gray-500 overflow-hidden isolate">
      <div className="px-4 lg:px-6 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="max-w-xl lg:max-w-md">
            <h1 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
              Subscribe for Newsletter
            </h1>
            <p className="mt-3 text-md text-gray-200 leading-7 font-bold">
              Stay updated with our latest news and offers.
            </p>
            <div className="mt-4 flex gap-2 relative z-10">
              {/* Input Field */}
              <input
                type="text"
                name="email"
                id="email"
                required
                autoComplete="email"
                placeholder="Enter Your Email"
                className="w-full flex-1 rounded-md border-0 bg-gray-800 px-3 py-2 text-gray-100 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6 font-bold placeholder-gray-400"
              />
              {/* Subscribe Button */}
              <button
                className="flex-none rounded-md bg-blue-600 py-2 px-4 font-bold text-gray-100 shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
            {/* Icon Section 1 */}
            <div className="flex flex-col items-start group">
              <div className="p-2 rounded-md group-hover:ring-2 group-hover:ring-gray-500 bg-gray-600 transition-all duration-200 ring-1 ring-gray-400">
                {/* Calendar Icon with hover effect */}
                <CalendarDaysIcon className="w-6 h-6 text-gray-100 group-hover:text-gray-300 transition duration-300 ease-in-out" />
              </div>
              <div className="text-left mt-3">
                <h3 className="leading-7 text-gray-100 font-bold">Weekly Articles</h3>
                <p className="mt-2 text-gray-300 text-sm font-bold">
                  Receive insightful weekly articles delivered to your inbox.
                </p>
              </div>
            </div>

            {/* Icon Section 2 */}
            <div className="flex flex-col items-start group">
              <div className="p-2 rounded-md group-hover:ring-2 group-hover:ring-gray-500 bg-gray-600 transition-all duration-200 ring-1 ring-gray-400">
                {/* Hand Raised Icon with hover effect */}
                <HandRaisedIcon className="w-6 h-6 text-gray-100 group-hover:text-gray-300 transition duration-300 ease-in-out" />
              </div>
              <div className="text-left mt-3">
                <h3 className="leading-7 text-gray-100 font-bold">No Spam</h3>
                <p className="mt-2 text-gray-300 text-sm font-bold">
                  We value your privacy and promise no spam, ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* gradient */}
      <div className="absolute top-0 -translate-x-1/2 left-1/2 xl:-top-6 blur-3xl">
        <div
          className="aspect-[1100/700] opacity-25 w-[60rem] bg-gradient-to-tr from-blue-700 to-red-500"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 0.1%, 80% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 47.1% 44.1%)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Newsletter;
