import Cat from './Cat';
import './CatContainer.css';
import JSConfetti from 'js-confetti';
import { useState } from 'react';
import useCats from '../hooks/useCats';

export default function CatContainer() {
  const jsConfetti = new JSConfetti();
  const { cats } = useCats();
  console.log('cats in container', cats);
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');

  const handleName = () => {
    setTitle(input);
    setInput('');
  };

  const handleShower = () => {
    jsConfetti.addConfetti({
      emojis: ['💞', '💕', '💓', '💖', '💖'],
    });
  };

  return (
    <div>
      <header>We will map here and then create more cats!</header>
      <label>
        {' '}
        What Is Your Kitten Stable Called?
        <input value={input} onChange={(e) => setInput(e.target.value)} />
      </label>
      <button className="name-button" onClick={handleName}>
        🤍
      </button>
      <h1>{title}</h1>
      <button className="button" onClick={handleShower}>
        Shower Them With Love!
      </button>
      <div className="cat-container">
        {cats.map((cat) => (
          <Cat key={cat.id} {...cat} />
        ))}
        ;
      </div>
    </div>
  );
}
