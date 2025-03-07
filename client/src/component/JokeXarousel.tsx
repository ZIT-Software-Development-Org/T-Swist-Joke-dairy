// components/JokeCarousel.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Joke {
  id: string;
  content: string;
}

export default function JokeCarousel() {
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(() => {
    axios.get('/api/jokes').then((res) => setJokes(res.data));
  }, []);

  return (
    <div className="carousel">
      {jokes.map((joke) => (
        <div key={joke.id} className="joke-card">
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  );
}
