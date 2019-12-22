<template>
  <button class="mbr-button facebook-button" @click="$emit('click')">
    <font-awesome-icon
      :icon="['fab', 'facebook-square']"
      size="lg"
      class="facebook-button__icon"
    />
    {{ $t('components.mbrFacebookButton.text') }}
  </button>
</template>

<script>
export default {
  name: 'MbrFacebookButton'
}
</script>

<style lang="scss" scoped>
.facebook-button {
  color: $text-secondary-color;
  background-color: $facebook-color;
}
.facebook-button__icon {
  margin-right: $m-sm;
}
</style>
