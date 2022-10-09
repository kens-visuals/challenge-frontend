import Image from 'next/image';

export default function CoffeeCard({ name, price, img }) {
  return (
    <div className="rounded-r-md bg-secondary p-5 py-8 font-work-sans text-tertiary">
      <div className="flex items-center justify-between">
        <div className="mb-6 w-2/3">
          <span className="mb-4 inline-block text-3xl">{name}</span>
          <span className="text-5xl font-bold">
            <span className="font-bold text-primary">$</span>
            {price}
          </span>
        </div>
        <Image src={img} width={140} height={140} />
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm border border-transparent bg-primary p-2 text-lg font-bold text-secondary transition-all duration-300 hover:border hover:border-primary hover:bg-transparent hover:text-primary"
      >
        Add to Cart
      </button>
    </div>
  );
}
