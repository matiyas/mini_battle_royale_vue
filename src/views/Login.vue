<template>
  <mbr-auth-box class="auth-box" title="Sign in">
    <mbr-input placeholder="Login" v-model="user.login" required />
    <mbr-input
      placeholder="Password"
      v-model="user.password"
      type="password"
      required
    />
    <mbr-button class="auth-box__sign-in-button">Sign in</mbr-button>
  </mbr-auth-box>
</template>

<script>
import MbrAuthBox from '@/components/MbrAuthBox'
import MbrInput from '@/components/MbrInput'
import MbrButton from '@/components/MbrButton'

export default {
  name: 'Login',
  components: { MbrAuthBox, MbrInput, MbrButton },
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
.auth-box__sign-in-button {
  margin-top: $m-md;
}
</style>
