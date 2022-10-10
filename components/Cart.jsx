import { useContext } from 'react';
import { nanoid } from 'nanoid';

import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const cartTotal = cart
    .reduce((total, { price = 0 }) => total + price, 0)
    .toFixed(2);

  const duplicateCount = cart.reduce((acc, curr) => {
    const str = JSON.stringify(curr);
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  //   const handleRemovingFromCart = (id) => {
  //     setCart((currentCart) => {
  //       const indexOfItemToRemove = currentCart.findIndex(
  //         (cartItem) => cartItem.id === id
  //       );

  //       if (indexOfItemToRemove === -1) {
  //         return currentCart;
  //       }

  //       return [
  //         ...currentCart.slice(0, indexOfItemToRemove),
  //         ...currentCart.slice(indexOfItemToRemove + 1),
  //       ];
  //     });
  //   };

  const cartItemsDisplay = Object.entries(duplicateCount).map(
    ([obj, count]) => {
      const { name, price } = JSON.parse(obj);

      return (
        <div
          key={nanoid()}
          className="flex w-full items-center justify-between font-work-sans"
        >
          <span className="inline-block flex-1">{name}:</span>

          <span className="mr-4 inline-block">${price}</span>

          <span className="inline-block w-5">{count}x</span>

          {/* <button
            type="button"
            onClick={() => handleRemovingFromCart(nanoid())}
          >
            Remove
          </button> */}
        </div>
      );
    }
  );

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
