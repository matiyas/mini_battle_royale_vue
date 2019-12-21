<template>
  <div id="app">
    <mbr-navigation-menu />
    <router-view />
  </div>
</template>

<script>
import MbrNavigationMenu from './components/MbrNavigationMenu'
export default {
  name: 'App',
  components: { MbrNavigationMenu }
}
</script>
