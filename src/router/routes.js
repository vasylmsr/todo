export default [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Todos'),
  },
  {
    path: '/todos/:id',
    name: 'todo',
    component: () => import('../pages/SingleTodo'),
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../pages/NotFound'),
  },
]
