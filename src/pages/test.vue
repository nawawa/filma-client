<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
export default {
  async asyncData({ $config: { apiURL }, $axios }) {
    const data = await $axios.$get(`${apiURL}/test`);
    return { message: data.message }
  },
}
</script>