import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Text({ id }) {
  const [flavorText, setFlavorText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await response.json();
      const flavorText = data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text.replace(/\f/g, ' ');
      setFlavorText(flavorText);
    };

    fetchData();
  }, [id]);

  return (
    <div className={styles.flavorText}>
      {flavorText && <p>{flavorText}</p>}
    </div>
  );
}
