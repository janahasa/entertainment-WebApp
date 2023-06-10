import { useEffect, useState } from "react";

// It attempts to retrieve the stored value associated with the given key from localStorage. If a value is found, it is parsed from JSON format and returned. If no value is found or if the stored value is null,
function getSavedValue(key, initValue) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    if (value) return value;
    if (initValue instanceof Function) return initValue();
    return initValue;
  } catch (error) {}
}
export default function useLocalStorage(key, initValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initValue);
  });
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {}
  }, [value]);
  return [value, setValue];
}
