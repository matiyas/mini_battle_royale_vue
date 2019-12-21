<template>
  <nav class="navbar">
    <div class="mbr-container navbar__container">
      <router-link :to="{ name: 'root_path' }" class="navbar__logo navbar__link">{{ $root.appName }}</router-link>
      <ul class="navbar__links-list">
        <li v-for="(link, index) in links" :key="`navigation-link-${index}`" class="navbar__item">
          <router-link :to="link.to" class="navbar__link">{{ link.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MbrNavigationMenu',
  data() {
    return {
      links: [
        {
          text: this.$t('components.mbrNavigationMenu.links.mainPage'),
          to: { name: 'root_path' }
        },
        {
          text: this.$t('components.mbrNavigationMenu.links.signIn'),
          to: { name: 'login_path' }
        },
        {
          text: this.$t('components.mbrNavigationMenu.links.signUp'),
          to: { name: 'registration_path' }
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  background-color: $bg-primary-color;
}
.navbar__container {
  display: flex;
  justify-content: space-between;
}
.navbar__links-list {
  display: flex;
  list-style: none;
  margin: 0;
}
.navbar__link {
  font-weight: 500;
  display: block;
  text-transform: uppercase;
  color: $text-primary-color;
  padding: $m-md;
  &:hover {
    color: $text-secondary-color;
    background-color: $primary-color;
  }
}
.navbar__logo {
  display: flex;
  align-items: center;
  font-size: $font-size-lg;
  color: $text-secondary-color;
  background-color: $bg-secondary-color;
  padding: 0 $m-lg;
}
</style>
