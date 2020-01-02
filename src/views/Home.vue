<template>
  <div class="home-container">
    <img class="logo" :src="require('@/assets/images/punisher-logo.png')" />
    <mbr-button class="play-game-button" @click="playGame">Play game</mbr-button>
  </div>
</template>

<script>
import MbrButton from '@/components/MbrButton'
export default {
  name: 'home',
  components: { MbrButton },
  methods: {
    playGame() {
      this.$router.push({ name: 'game_path' })
    }
  }
}
</script>

<style lang="scss">
.home-container {
  text-align: center;
}
.logo,
.play-game-button {
  margin: auto;
  display: block;
}
.logo {
  width: 80%;
  max-width: 400px;
  margin-bottom: $m-xxl;
}
.play-game-button {
  width: 100%;
  max-width: 500px;
  position: relative;
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 90;
    background: linear-gradient(
      135deg,
      rgba(237, 237, 237, 0) 35%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(248, 248, 248, 0) 65%
    );
    background-size: 200% 100%;
    background-position-x: -100%;
    animation: 10s infinite shine;
  }
}
@keyframes shine {
  0% {
    background-position-x: 100%;
  }
  100% {
    background-position-x: -100%;
  }
}
</style>
