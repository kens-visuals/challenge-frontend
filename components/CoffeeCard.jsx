import { useContext } from 'react';
import Image from 'next/image';

// Context
import { CartContext } from '../contexts/CartContext';

export default function CoffeeCard({ name, price, img, description }) {
  const { setCart } = useContext(CartContext);

  const handleAddingToCart = () =>
    setCart((prevState) => [...prevState, { name, price }]);

  return (
    <div className="flex h-full flex-col justify-between rounded-r-md bg-secondary p-5 py-8 font-work-sans text-tertiary">
      <div className="flex h-full items-center justify-between">
        <div className="w-2/3">
          <span className="mb-2 inline-block text-3xl">{name}</span>
          <p className="w-[90%] text-xs">{description}</p>
        </div>
        <Image src={img} width={140} height={140} />
      </div>
      <div className="my-6 h-0.5 w-full bg-primary" />
      <div className="flex items-center justify-between">
        <span className="text-5xl font-bold">
          <span className="font-bold text-primary">$</span>
          {price}
        </span>
        <button
          type="button"
          onClick={() => handleAddingToCart(name, price)}
          className="rounded-sm  border border-transparent bg-primary p-2 font-bungee-inline text-base font-bold uppercase text-secondary transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary focus:outline-dashed focus:outline-2 focus:outline-tertiary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
