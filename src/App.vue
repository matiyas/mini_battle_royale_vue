<template>
  <div id="app">
    <mbr-navigation-menu />
    <div class="mbr-container container">
      <router-view />
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
  margin-top: 120px;
}
</style>
