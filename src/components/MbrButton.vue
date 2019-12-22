<template>
  <button class="mbr-button" @click="$emit('click')"><slot /></button>
</template>

<script>
export default {
  name: 'MbrButton'
}
</script>

<style lang="scss" scoped>
.mbr-button {
  color: $text-secondary-color;
  background-color: $primary-color;
}
</style>
