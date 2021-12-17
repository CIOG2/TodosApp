import React from "react";

function useLocalStorage(itemName, initialValue) {  
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
    
    
    React.useEffect(() => {
      setTimeout(() => {
        try {  
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = [];
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }  

          setItem(parsedItem);
          setLoading(false);
        
        } catch (error) {
          console.log('333333333333333');
          setError(error);
          console.log(error);
          console.log('333333333333333');
        }
      },3000  );
    });
  
    const saveItem = (newItem) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    }
  
  
    return { 
      item, 
      saveItem,
      loading,
      error
    };
  }


  export { useLocalStorage };