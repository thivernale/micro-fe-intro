import { useEffect, useState } from 'react';

import { currencyConverter, getProducts } from './products';

export default function HomeContent() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);


  return (
    <div className="grid grid-cols-2 my-10 gap-5">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} className="w-full h-auto" />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a>{product.name}</a>
            </div>
            <div className="flex-end">{currencyConverter.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
        </div>
      ))}
    </div>
  );
};
