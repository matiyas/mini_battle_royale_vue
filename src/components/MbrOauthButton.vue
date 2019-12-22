<template>
  <button class="mbr-button button" @click="$emit('click')">
    <font-awesome-icon :icon="icon" size="lg" class="button__icon" />
    <div><slot /></div>
  </button>
</template>

<script>
export default {
  name: 'MbrOauthButton',
  props: {
    icon: Array
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  text-align: left;
  font-size: $font-size-sm;
  padding: $m-md;
}
.button__icon {
  margin-right: $m-md;
}
@media (min-width: $screen-sm-min) {
  .button {
    max-width: 300px;
    padding: $m-md $m-xl;
  }
}
</style>
