import paths from "./paths";

export default [
  {
    path: paths.home,
    name: 'home',
    component: () => import('../pages/Todos'),
  },
  {
    path: `${paths.todos}/:id`,
    name: 'todo',
    component: () => import('../pages/SingleTodo'),
  },
  {
    path: paths.notFound,
    name: 'not-found',
    component: () => import('../pages/NotFound'),
  },
]
