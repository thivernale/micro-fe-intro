import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { currencyConverter, getProductById } from 'home/products';
import placeAddToCart from 'addtocart/placeAddToCart';

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = useRef(null);

  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

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
            {product.name}
          </div>
          <div className="text-end font-bold text-3xl">{currencyConverter.format(product.price)}</div>
        </div>
        <div ref={addToCart}></div>
        <div className="text-lg mt-10">{product.description}</div>
        <div className="text-lg mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
};
