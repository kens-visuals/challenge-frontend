import { useContext, useState, useEffect } from 'react';
import Confetti from 'react-confetti';

// Context
import { CartContext } from '../contexts/CartContext';

// Components
import Cart from './Cart';

export default function CartContainer() {
  const { cart, setCart } = useContext(CartContext);
  const [hasCheckedOut, setHasCheckedOut] = useState(false);

  const cartTotal = cart
    .reduce((total, { price }) => total + price, 0)
    .toFixed(2);

  const handleCheckOut = () => {
    setHasCheckedOut(true);
    setCart([]);
  };

  useEffect(() => {
    const timer = setTimeout(() => setHasCheckedOut(false), 4000);

    return () => clearTimeout(timer);
  }, [cart]);

  return (
    <div className="absolute top-[70px] left-1/2 z-10 w-[95%] max-w-md -translate-x-1/2 overflow-hidden rounded-md bg-secondary text-tertiary shadow-2xl shadow-secondary/70 md:right-0 md:top-20 md:-translate-x-20 lg:right-0 lg:w-[23.3rem] lg:translate-x-[12.7rem]">
      <span className="block border-b border-dashed border-tertiary p-3 font-bungee-inline text-xl font-bold md:p-5">
        Cart
      </span>

      {/* If user hasn't checked out just show cart, when they check out show the message */}
      {!hasCheckedOut ? (
        <div className="w-full">
          {cart.length === 0 ? (
            <span className="inline-block w-full py-8 text-center font-bold">
              Your cart is empty
            </span>
          ) : (
            <div>
              <div className="w-full p-3 font-bold md:p-5">
                <Cart />
              </div>

              <div className="flex items-center justify-between">
                <span className="w-1/2 bg-tertiary p-3 font-bold text-secondary md:pl-5">
                  Total: ${cartTotal}
                </span>

                <button
                  type="submit"
                  onClick={handleCheckOut}
                  className="w-1/2 bg-primary p-3 font-work-sans font-bold transition-colors duration-300 hover:bg-tertiary hover:text-secondary focus:outline-dashed focus:outline-tertiary"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          <Confetti
            width={1000}
            height={1000}
            colors={['#f0f0f0', '#FF5F49']}
          />
          <span className="inline-block w-full py-8 px-8 text-center font-bold">
            THANK YOU! <br /> We will notify you once it&apos;s ready!
          </span>
        </div>
      )}
    </div>
  );
}
