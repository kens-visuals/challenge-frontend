import { useState, useContext } from 'react';

import { CartContext } from '../contexts/CartContext';

import Cart from './Cart';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const { cart } = useContext(CartContext);

  return (
    <nav className="relative bg-secondary">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between p-4 lg:max-w-6xl lg:px-0">
        <span className="font-work-sans text-xl font-bold text-primary">
          Coffee<span className="text-tertiary">Script</span>
        </span>

        <div className="relative">
          <button
            type="button"
            onClick={() => setIsCartOpen((prevState) => !prevState)}
            className="focus:outline-dashed focus:outline-tertiary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-tertiary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </button>

          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs">
            {cart.length}
          </span>
        </div>
      </div>

      {isCartOpen && <Cart />}
    </nav>
  );
}
