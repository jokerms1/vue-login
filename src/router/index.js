import Vue from "vue";
import Router from "vue-router";
// import HelloWorld from "@/components/HelloWorld";
import routes from "./routes";
import store from "../store/index";
Vue.use(Router);
console.log(store.state.user.userInfo.userName);

const router = new Router({
  routes,
  scrollBehavior: () => ({ y: 0 }),
});

// router.beforeEach((to, from, next) => {
//   if (to.path === "/login") {
//     next();
//   } else if (to.path === "/main") {
//     next();
//   } else if (to.path !== "/login") {
//     if (store.state.user.userInfo.userName) {
//       if (to.path == "/") {
//         next({
//           path: "/main",
//         });
//       } else {
//         next();
//       }
//     } else {
//       next({
//         path: "/login",
//       });
//     }
//   } else {
//     next();
//   }
// });

export default router;
