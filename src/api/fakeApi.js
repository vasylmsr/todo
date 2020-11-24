const todos = [
  {
    id: 1,
    title: "Vue is the best JS framework",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    author: "Evan You",
    done: true
  },
  {
    id: 2,
    title: "React is the best JS framework",
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...',
    author: 'Facebook',
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
export const getTodo = (todoId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todo = todos.find(todo => todo.id === todoId)
      if(todo) resolve(todo);
      reject({ status: 404, message: 'Todo not found' });
    }, 1000)
  })

}
