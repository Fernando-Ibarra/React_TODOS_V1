import React from "react";

// Custom hook
function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() =>{
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          // Verificar si el localStorage contiene algo o esta vacio
          if (!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
          } catch (error){
            setError(error);
          }
      }, 4500);
    });
  
    // localStorage
    const saveItem = (newItem) => {
      try{
        const stringifieldItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifieldItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
    return {item, saveItem, loading, error};
}

export {useLocalStorage};