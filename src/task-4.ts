// Завдання 4. Типізація функцій.
function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}, Age: ${age}`);

  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo('Anna', 25);
printUserInfo('Oleh', 30, 'oleh@example.com');

export {};
