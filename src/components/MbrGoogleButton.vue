<template>
  <mbr-oauth-button class="google-button" :icon="['fab', 'google']">{{
    $t('components.mbrGoogleButton.text')
  }}</mbr-oauth-button>
</template>

<script>
import MbrOauthButton from '@/components/MbrOauthButton'

export default {
  name: 'MbrGoogleButton',
  components: { MbrOauthButton }
}
</script>

<style lang="scss" scoped>
.google-button {
  color: $text-secondary-color;
  background-color: $google-color;
}
</style>
