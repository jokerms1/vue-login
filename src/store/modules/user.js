const state = {
  userInfo: {
    userName: null,
    id: null,
    nickname: null,
    phone: null
  }
};

const mutations = {
  setUserInfo(state, infos) {
    state.userInfo = infos;
  }
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
