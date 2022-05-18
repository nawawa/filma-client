<template>
  <button @click="logout">
    ログアウト
  </button>
</template>

<script>
export default {
  methods: {
    async logout() {
      await this.$auth.logout();
    }
  }
}
</script>