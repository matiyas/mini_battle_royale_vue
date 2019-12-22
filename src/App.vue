<template>
  <div id="app">
    <mbr-navigation-menu />
    <div class="mbr-container container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import MbrNavigationMenu from './components/MbrNavigationMenu'
export default {
  name: 'App',
  components: { MbrNavigationMenu }
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 75px;
  padding: $m-md;
}
@media (min-width: $screen-md-min) {
  .container {
    margin-top: 120px;
  }
}
</style>
