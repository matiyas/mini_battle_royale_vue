<template>
  <mbr-auth-box class="auth-box" :title="$t('general.signIn')">
    <mbr-input
      :placeholder="$t('general.username')"
      v-model="user.username"
      required
    />
    <mbr-input
      :placeholder="$t('general.password')"
      v-model="user.password"
      type="password"
      required
    />
    <mbr-button class="auth-box__sign-in-button">{{
      $t('general.signIn')
    }}</mbr-button>
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
        username: null,
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
  width: 100%;
}
@media (min-width: $screen-sm-min) {
  .auth-box__sign-in-button {
    max-width: 200px;
  }
}
</style>
