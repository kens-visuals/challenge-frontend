// Components
import CoffeeCard from './CoffeeCard';

// Assets
import DATA from '../DATA';

export default function CardsList() {
  const cardsListDisplay = DATA.map((coffee) => (
    <CoffeeCard key={coffee.id} {...coffee} />
  ));

  return (
    <div className="my-10 grid  items-center gap-4 md:grid-cols-2 md:space-y-0 lg:my-6 lg:grid-cols-3">
      {cardsListDisplay}
    </div>
  );
}
