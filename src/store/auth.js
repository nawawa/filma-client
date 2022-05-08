export const state = () => ({
  authUser: null,
})

export const mutations = {
  setAuthUser(state, authUser) {
    state.authUser = authUser
  },
}

export const actions = {
  async login({ commit }, { email, password }) {
    await this.$axios.$get('sanctum/csrf-cookie').then(async (res) => {
      const response = await this.$axios
        .$post('/auth/login', { email, password })
        .catch((err) => {
          console.log('ログインしようとしたら、エラーですよ')
          console.log(err.config);
          console.log(err.response);
        })
      commit('setAuthUser', response)
    })
    .catch(err => {
      console.log(err.config);
      console.log(err.request);
      console.log(err.response);
    });
  },
}