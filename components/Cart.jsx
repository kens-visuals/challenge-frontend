import { useContext } from 'react';
import { nanoid } from 'nanoid';

// Context
import { CartContext } from '../contexts/CartContext';

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);

  // Remove duplicate elements and instead show their quantity
  const duplicateCount = cart.reduce((acc, curr) => {
    const str = JSON.stringify(curr);
    acc[str] = (acc[str] || 0) + 1;
    return acc;
  }, {});

  // Find the current item and reduce its quantity in the cart
  const handleRemovingFromCart = (name) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.name === name
      );

      if (indexOfItemToRemove === -1) return currentCart;

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };

  const handleAddingInCart = (name, price) =>
    setCart((currentCart) => [...currentCart, { name, price }]);

  return Object.entries(duplicateCount).map(([obj, count]) => {
    const { name, price } = JSON.parse(obj);

    return (
      <div
        key={nanoid()}
        className="flex w-full items-center justify-between font-work-sans"
      >
        <span className="inline-block flex-1">{name}:</span>

        <span className="mr-4 inline-block">${price}</span>

        <button
          type="button"
          aria-label="Add"
          className="p-1 text-primary transition-all duration-300 hover:text-tertiary focus:outline-dashed focus:outline-tertiary"
          onClick={() => handleAddingInCart(name, price)}
        >
          +
        </button>
        <span className="mx-3 inline-block w-4">{count}x</span>
        <button
          type="button"
          aria-label="Remove"
          className="p-1 text-primary transition-all duration-300 hover:text-tertiary focus:outline-dashed focus:outline-tertiary"
          onClick={() => handleRemovingFromCart(name)}
        >
          -
        </button>
      </div>
    );
  });
}
