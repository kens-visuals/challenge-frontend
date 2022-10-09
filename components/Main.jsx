import { useState } from 'react';

// Componentns
import UsernameForm from './UsernameForm';
import CardsList from './CardsList';

export default function Main() {
  const [username, setUsername] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <main className="">
      {!isSubmitted && (
        <UsernameForm
          username={username}
          setUsername={setUsername}
          setIsSubmitted={setIsSubmitted}
        />
      )}

      {isSubmitted && (
        <div className="mx-auto w-[91%] max-w-3xl lg:max-w-6xl">
          <h1 className="mt-10 max-w-3xl text-5xl text-secondary md:text-6xl">
            Welcome,{' '}
            <span className="h-full font-bungee-inline  font-bold">
              {username}
            </span>{' '}
            what do you feel like drinking today?
          </h1>
          <span className="mt-3 inline-block text-lg text-tertiary">
            Enjoy our humble selection of handcrafted coffee.
          </span>

          <CardsList />
        </div>
      )}
    </main>
  );
}
