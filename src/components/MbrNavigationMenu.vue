<template>
  <nav class="navbar">
    <div class="mbr-container navbar__container">
      <router-link
        :to="{ name: 'home_path' }"
        class="navbar__logo navbar__link"
        >{{ $root.appName }}</router-link
      >
      <div class="navbar__items-container">
        <ul ref="navbarMenu" class="navbar__menu">
          <li
            v-for="(link, index) in links"
            :key="`navigation-link-${index}`"
            class="navbar__item"
            @click="toggleMenu"
          >
            <router-link :to="link.to" class="navbar__link">{{
              link.text
            }}</router-link>
          </li>
        </ul>
        <button class="navbar__toggle" @click="toggleMenu">
          <font-awesome-icon :icon="['fas', 'bars']" size="2x" />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MbrNavigationMenu',
  data() {
    return {
      menuActive: false,
      links: [
        {
          text: this.$t('components.mbrNavigationMenu.links.mainPage'),
          to: { name: 'home_path' }
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
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive

      const menu = this.$refs.navbarMenu
      menu.style.maxHeight = this.menuActive ? `${menu.scrollHeight}px` : 0
    }
  }
}
</script>

<style scoped lang="scss">
$navbar-shadow: 0 15px 10px -10px #00000040;

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: $bg-primary-color;
  box-shadow: $navbar-shadow;
  z-index: 20;
  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: $accent-color;
  }
}
.navbar__container {
  display: flex;
  justify-content: space-between;
}
.navbar__items-container {
  display: flex;
  align-items: center;
}
.navbar__menu {
  display: block;
  position: absolute;
  background-color: $bg-primary-color;
  top: 71px;
  left: 0;
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
  box-shadow: $navbar-shadow;
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
  max-height: 0;
}
.navbar__link {
  font-weight: 500;
  display: block;
  text-transform: uppercase;
  color: $text-primary-color;
  padding: $m-md;
  text-align: center;
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
  &,
  &:hover {
    background-color: $bg-secondary-color;
  }
}
.navbar__toggle {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0 $m-lg;
  color: $text-secondary-color;
}

@media (min-width: $screen-sm-min) {
  .navbar__logo {
    padding: 0 $m-md;
  }
  .navbar__menu {
    display: flex !important;
    position: static !important;
    box-shadow: none;
  }
  .navbar__menu {
    max-height: initial !important;
  }
  .navbar__toggle {
    display: none;
  }
}
</style>
