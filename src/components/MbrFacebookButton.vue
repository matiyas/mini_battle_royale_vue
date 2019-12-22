<template>
  <mbr-oauth-button
    class="facebook-button"
    :icon="['fab', 'facebook-square']"
    >{{ $t('components.mbrFacebookButton.text') }}</mbr-oauth-button
  >
</template>

<script>
import MbrOauthButton from '@/components/MbrOauthButton'

export default {
  name: 'MbrFacebookButton',
  components: { MbrOauthButton }
}
</script>

<style lang="scss" scoped>
.facebook-button {
  color: $text-secondary-color;
  background-color: $facebook-color;
}
</style>
