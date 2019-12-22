<template>
  <div class="box">
    <div class="box__header">
      <span>{{ title }}</span>
    </div>
    <div class="box__form">
      <slot />
      <div class="box__oauth">
        <div class="oauth__title">{{ $t('general.or') }}</div>
        <mbr-facebook-button class="oauth__button" />
        <mbr-google-button class="oauth__button" />
      </div>
    </div>
  </div>
</template>

<script>
import MbrFacebookButton from '@/components/MbrFacebookButton'
import MbrGoogleButton from '@/components/MbrGoogleButton'
export default {
  name: 'MbrAuthBox',
  props: {
    title: String
  },
  components: { MbrFacebookButton, MbrGoogleButton }
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
.box__oauth {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-top: 2px solid $bg-secondary-color;
  margin-top: $m-xxl;
  padding-top: $m-md;
}
.oauth__title {
  color: $text-primary-color;
  background-color: $bg-primary-color;
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  width: fit-content;
  margin: auto;
  padding: 0 $m-lg;
}
.oauth__button {
  width: 100%;
  margin-top: $m-lg;
}

@media (min-width: $screen-sm-min) {
  .box__form {
    padding: $m-xl $m-xxl;
  }
  .box__oauth {
    justify-content: space-around;
  }
}
</style>
