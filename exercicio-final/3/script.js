

const api = 'https://fakestoreapi.com/products/1';

const data = async () => {
    const response = await fetch(api);
    const dataBase = await response.json();
    return dataBase;
  };


