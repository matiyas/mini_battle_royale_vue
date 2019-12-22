<template>
  <mbr-auth-box class="auth-box" title="Sign in">
    <mbr-input placeholder="Login" v-model="user.login" required />
    <mbr-input placeholder="Password" v-model="user.password" required />
  </mbr-auth-box>
</template>

<script>
import MbrAuthBox from '@/components/MbrAuthBox'
import MbrInput from '@/components/MbrInput'

export default {
  name: 'Login',
  components: { MbrAuthBox, MbrInput },
  data() {
    return {
      user: {
        login: null,
        password: null
      }
    }
  }
}
</script>

<style scoped lang="scss">
.auth-box {
  margin: 0 auto;
}
</style>
