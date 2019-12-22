<template>
  <mbr-auth-box class="auth-box" title="Sign in" />
</template>

<script>
import MbrAuthBox from '@/components/MbrAuthBox'

export default {
  name: 'Login',
  components: { MbrAuthBox }
}
</script>

<style scoped lang="scss">
.auth-box {
  margin: 0 auto;
}
</style>
