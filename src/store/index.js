const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    cookieparser.parse(req.headers.cookie)

    await app.$axios
      .$get('/api/user')
      .then((authUser) => {
        commit('auth/setAuthUser', authUser)
      })
      .catch((err) => {
        console.log('ログインしていませんよ')
        console.log(err.response);
        commit('auth/setAuthUser', null)
      })
  },
}