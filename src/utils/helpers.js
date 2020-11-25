export function getSingleTodoUrl(id, title = '') {
  const todoTitleWords = title.toLowerCase().split(' ');
  todoTitleWords.push(id);
  // eslint-disable-next-line no-useless-escape
  return `${todoTitleWords.join('-').replace(/[^0-9a-z\-]/g, '')}`;
}

export const getUniqueId = () => {
  const firstPart = String(new Date().getTime()).slice(-5);
  const secondPart = String(Math.round(Math.random() * 100000))
  return Number(firstPart + secondPart);
}

