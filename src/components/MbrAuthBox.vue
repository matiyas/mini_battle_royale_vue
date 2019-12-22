<template>
  <div class="box">
    <div class="box__header">
      <span>{{ title }}</span>
    </div>
    <div class="box__form">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MbrAuthBox',
  props: {
    title: String
  }
}
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  max-width: 800px;
  background-color: $bg-primary-color;
  box-shadow: $box-shadow;
}
.box__header {
  background-color: $bg-primary-dark-color;
  color: $text-primary-color;
  padding: $m-sm 0 $m-sm $m-xl;
  font-size: $font-size-lg;
  font-weight: 500;
}
.box__form {
  box-sizing: border-box;
  text-align: center;
  padding: $m-lg $m-xl;
}
@media (min-width: $screen-sm-min) {
  .box__form {
    padding: $m-xl $m-xxl;
  }
}
</style>
