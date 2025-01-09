export const setLocalStorage = <T>(key: string, value: T): void => {
  const storedValue = typeof value === 'object' ? JSON.stringify(value) : value;
  localStorage.setItem(key, storedValue as string);
};

export const getLocalStorage = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);

  try {
    return value ? (JSON.parse(value) as T) : null;
  } catch {
    return value as T;
  }
};
