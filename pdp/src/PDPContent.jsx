import { useEffect, useState } from 'react';

import { currencyConverter, getProductById } from 'home/products';

export default function PDPContent() {
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  if (!product) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 my-10 gap-5">
      <div>
        <img src={product.image} alt={product.name} className="w-full h-auto" />
      </div>
      <div>
        <div className="flex">
          <div className="flex-grow font-bold text-3xl">
            <a>{product.name}</a>
          </div>
          <div className="flex-end font-bold text-3xl">{currencyConverter.format(product.price)}</div>
        </div>
        <div className="text-lg mt-10">{product.description}</div>
        <div className="text-lg mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};
