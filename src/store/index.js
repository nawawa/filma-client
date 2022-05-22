export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    
    await app.$axios
      .$get('/api/user')
      .then((authUser) => {
        app.$auth.setUser(authUser)
      })
      .catch((err) => {
        app.$auth.setUser(null)
      })

  }
}