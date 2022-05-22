export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    await app.$axios
      .$get('/api/user')
      .then((authUser) => {
        commit('auth_user/setAuthUser', authUser)
      })
      .catch((err) => {
        console.log(err)
        commit('auth_user/setAuthUser', null)
      })

  }
}