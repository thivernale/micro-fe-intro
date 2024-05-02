const API_SERVER = 'http://localhost:8080';

export const getProducts = async () =>
  fetch(`${API_SERVER}/products`).then(res => res.json());

export const getProductById = async (id) =>
  fetch(`${API_SERVER}/products/${id}`).then(res => res.json());

export const currencyConverter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 2,
});
