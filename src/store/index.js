const cookieparser = process.server ? require('cookieparser') : undefined

export const actions = {
  async nuxtServerInit({ commit }, { req, app }) {
    if (req.headers.cookie) {
      cookieparser.parse(req.headers.cookie)
    }
    await app.$axios
    .$get('/api/user')
    .then((authUser) => {
        console.log('authUser を取得できています');
        commit('auth/setAuthUser', authUser)
      })
      .catch((err) => {
        console.log('ログインしていませんよ')
        console.log(err.response.headers);
        commit('auth/setAuthUser', null)
      })
  },
}