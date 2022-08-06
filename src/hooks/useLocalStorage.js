import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [Value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(Value));
  }, [key, Value]);

  return [Value, setValue];
}

export default useLocalStorage;
