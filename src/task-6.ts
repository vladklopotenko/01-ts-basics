// Завдання 6. Узагальнені типи (generics).
function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber: number = getFirstElement<number>([1, 2, 3]);
const firstString: string = getFirstElement<string>(['a', 'b', 'c']);
const firstBoolean: boolean = getFirstElement<boolean>([true, false]);

console.log('Завдання 6:', firstNumber, firstString, firstBoolean);

// Контрольна перевірка: якщо розкоментувати наступний рядок,
// TypeScript повідомить про помилку типів.
// getFirstElement<number>([1, 2, '3']);

export {};
