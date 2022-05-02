<template>
  <p>
    {{ message }}
  </p>
</template>

<script>
import axios from 'axios';
export default {
  async asyncData({ $config: { apiURL } }) {
    const { data } = await axios.get(`${apiURL}/test`);
    return { message: data.message }
  },
}
</script>