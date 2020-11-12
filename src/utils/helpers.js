export function getSingleTodoUrl(id, title = '') {
  const todoTitleWords = title.toLowerCase().split(' ');
  todoTitleWords.push(id);
  // eslint-disable-next-line no-useless-escape
  return `${todoTitleWords.join('-').replace(/[^0-9a-z\-]/g, '')}`;
}

export const getUniqueId = () => new Date().getTime() + String(Math.random());

