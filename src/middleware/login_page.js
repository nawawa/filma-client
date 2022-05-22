export default function ({ store, redirect }) {
  if (store.state.auth_user.authUser) {
    return redirect('/')
  }
}