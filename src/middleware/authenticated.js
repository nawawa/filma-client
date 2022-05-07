export default function ({ store, redirect }) {
  console.log('authenticated.js' ,store.state.auth.authUser);
  if (!store.state.auth.authUser) {
    return redirect('/login')
  }
}