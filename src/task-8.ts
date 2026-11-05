// Завдання 8. HTTP-запит та типізація відповіді Axios.
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.data);
}

fetchPosts()
  .then((posts: Post[]) => {
    console.log('Завдання 8: назва першого поста:', posts[0]?.title);
    console.log('Усі отримані пости:', posts);
  })
  .catch((error: unknown) => {
    console.error('Помилка HTTP-запиту:', error);
  });
