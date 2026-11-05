// Завдання 5. Union Type.
type Status = 'loading' | 'success' | 'error';

function logStatus(status: Status): void {
  console.log(`Status: ${status}`);
}

logStatus('loading');
logStatus('success');
logStatus('error');

export {};
