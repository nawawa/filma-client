<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const data = await $axios.$post(`/api/test`);
    return { message: data.message }
  },
}
</script>