<template>
  <section>
    <h1>ログイン</h1>
    <form @submit.prevent="submit">
      <div>
        <label for="email">email</label>
        <input type="text" id="email" v-model="email" />
      </div>
      <div>
        <label for="password">password</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">login</button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async submit() {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password
        }
      })
        .then((res) => {
          
        })
        .catch(err => {

        });
    },
  },
}
</script>