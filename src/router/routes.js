const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/index"),
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
  },
  {
    path: "/h5s",
    name: "h5s",
    component: () => import("@/views/h5s")
  }
];
export default routes;
