const routes = [
  {
    path: "/",
    component: () => import("@/views/login/index")
  },
  {
    path: "/main",
    component: () => import("@/views/main/index")
  }
];
export default routes;
