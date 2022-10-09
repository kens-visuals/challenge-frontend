// Components
import CoffeeCard from './CoffeeCard';

// Assets
import DATA from '../DATA';

export default function CardsList() {
  const cardsListDisplay = DATA.map((coffee) => (
    <CoffeeCard key={coffee.id} {...coffee} />
  ));

  return (
    <div className="my-28 w-[95%] space-y-4 md:grid md:grid-cols-2 md:space-y-0">
      {cardsListDisplay}
    </div>
  );
}
