// Завдання 2. Інтерфейси.
interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
}

const product: Product = {
  id: 1,
  name: 'Laptop',
  price: 35000,
  description: 'Powerful laptop',
};

console.log('Завдання 2:', product);

export {};
