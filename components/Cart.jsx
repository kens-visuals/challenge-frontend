import { useContext } from 'react';
import { nanoid } from 'nanoid';

import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart } = useContext(CartContext);

  const cartTotal = cart
    .reduce((total, { price = 0 }) => total + price, 0)
    .toFixed(2);

  const cartItemsDisplay = cart.map(({ name, price }) => (
    <div
      key={nanoid()}
      className="flex w-full items-center justify-between font-work-sans"
    >
      <span>{name}:</span>
      <span>{price}</span>
    </div>
  ));

  return (
    <div className="absolute top-[70px] left-1/2 z-10 w-[95%] max-w-md -translate-x-1/2 overflow-hidden rounded-md bg-secondary text-tertiary shadow-2xl shadow-secondary/70 md:right-0 md:top-20 md:-translate-x-20 lg:top-28 lg:right-0 lg:w-96 lg:translate-x-48">
      <span className="block border-b border-dashed border-tertiary p-3 font-bungee-inline text-xl font-bold">
        Cart
      </span>

      <div className="w-full">
        {cart.length === 0 ? (
          <span className="inline-block w-full py-8 text-center font-bold">
            Your cart is empty
          </span>
        ) : (
          <div>
            <div className="mb-6 w-full p-3 font-bold">{cartItemsDisplay}</div>

            <div className="flex items-center justify-between">
              <span className="w-1/2 bg-tertiary p-3 font-bold text-secondary">
                Total: ${cartTotal}
              </span>

              <button
                type="submit"
                className="w-1/2 bg-primary p-3 font-work-sans font-bold transition-colors duration-300 hover:bg-tertiary hover:text-secondary focus:outline-dashed focus:outline-tertiary"
              >
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
