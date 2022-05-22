export const state = () => ({
  authUser: null,
})

export const mutations = {
  setAuthUser(state, authUser) {
    state.authUser = authUser
  },
}