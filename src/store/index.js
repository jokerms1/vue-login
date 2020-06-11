import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);
const modulesFiles = require.context("./modules", true, /\.js$/);

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

// console.log(modules);

const store = new Vuex.Store({
  modules,
  plugins: [
    createPersistedState({
      key: "vuexPersisted",
      storage: window.localStorage,
      reducer: state => ({
        user: state.user
      })
    })
  ]
});

export default store;
