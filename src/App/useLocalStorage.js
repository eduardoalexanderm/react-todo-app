import React from "react";

function useLocalStorage(itemName, initialValue) {
  const savedItems = localStorage.getItem(itemName); // Mover esta línea arriba
  const [item, setItem] = React.useState(
    savedItems ? JSON.parse(savedItems) : initialValue || [],
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        // set defaultItems to localStorage
        if (!savedItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue || []));
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, []);

  //Guardar los TODOs en localStorage cada vez que se actualice la lista de TODOs
  const saveItemsToLocalStorage = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  return { item, saveItemsToLocalStorage, loading, error };
}

export { useLocalStorage };
