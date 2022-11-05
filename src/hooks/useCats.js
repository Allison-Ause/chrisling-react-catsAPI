import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCats } from '../services/cat';

export default function useCats() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCats();
        console.log('data', data);
        setCats(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return { cats };
}

// I should put my error handling in here.
// The Try / Catch should go into this function where we CALL the fetch!
