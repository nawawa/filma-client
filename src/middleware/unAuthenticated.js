export default function ({ store, redirect }) {
  console.log('unAuthenticated.js' ,store.state.auth.authUser);
  if (store.state.auth.authUser) {
    return redirect('/login_user')
  }
}