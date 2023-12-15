import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function Text({ id }) {
  const [flavorText, setFlavorText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      const data = await response.json();
      console.log(data);
      const flavorText = data.flavor_text_entries[0].flavor_text;
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
