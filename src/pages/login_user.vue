<template>
  <section>
    <h1>ログインしましたね</h1>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log(this.$store.state.auth.user);
    console.log(this.$store.state.auth.loggedIn);
  }
}
</script>