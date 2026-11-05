// Завдання 3. Типізація масивів.
const usernames: string[] = ['Anna', 'Oleh', 'Iryna'];
const ratings: number[] = [5, 4, 3];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Laptop', price: 35000 },
  { id: 2, name: 'Phone', price: 25000 },
];

console.log('Завдання 3:', usernames, ratings, products);

export {};
