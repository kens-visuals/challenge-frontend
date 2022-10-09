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

      {isSubmitted && <CardsList />}
    </main>
  );
}
