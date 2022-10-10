import { useContext } from 'react';

// Context
import { CartContext } from '../contexts/CartContext';

// Components
import Cart from './Cart';

export default function CartContainer() {
  const { cart } = useContext(CartContext);

  const cartTotal = cart
    .reduce((total, { price }) => total + price, 0)
    .toFixed(2);

  return (
    <div className="absolute top-[70px] left-1/2 z-10 w-[95%] max-w-md -translate-x-1/2 overflow-hidden rounded-md bg-secondary text-tertiary shadow-2xl shadow-secondary/70 md:right-0 md:top-20 md:-translate-x-20 lg:right-0 lg:w-[23.3rem] lg:translate-x-[12.7rem]">
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
            <div className="mb-6 w-full p-3 font-bold">
              <Cart />
            </div>

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
