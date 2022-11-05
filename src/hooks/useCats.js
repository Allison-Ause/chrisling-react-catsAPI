import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCats } from '../services/cat';

export default function useCats() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCats();
      console.log('data, data');
      setCats(data);
    };
    fetchData();
  }, []);
  return { cats };
}
