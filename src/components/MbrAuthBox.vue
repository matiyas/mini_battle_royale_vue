<template>
  <div class="box">
    <div class="box__header">
      <span>{{ title }}</span>
    </div>
    <div class="box__form">
      <input class="box__input" />
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
  width: 70%;
  height: 50vw;
  background-color: $bg-primary-color;
  box-shadow: $box-shadow;
}
.box__header {
  background-color: $bg-primary-dark-color;
  color: rgb(180, 187, 195);
  padding: 15px 0 15px 40px;
  font-size: 40px;
  font-weight: 500;
}
.box__form {
  text-align: center;
  padding: $m-xxl;
}
.box__input {
  width: 100%;
  height: 4em;
}
</style>
