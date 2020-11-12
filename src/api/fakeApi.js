import { getUniqueId } from "../utils/helpers";

const todos = [
  {
    id: getUniqueId(),
    title: "Create new Zombie application",
    description: 'Bla',
    done: false
  },
  {
    id: getUniqueId(),
    title: "Download my favourite film",
    description: 'Bla',
    done: false
  }
];

function makeFakeRequest(data){
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data)
    }, 1500)
  })
}

export const getTodos = () => makeFakeRequest(todos);
export const getTodo = (todoId) => makeFakeRequest(todos.find(todo => todo === todoId));
