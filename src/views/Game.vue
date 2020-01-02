<template>
  <div :id="containerId" class="game-container" />
</template>

<script>
import launchGame from '@/game/game.js'
export default {
  name: 'Game',
  data() {
    return {
      containerId: 'game-container',
      game: null
    }
  },
  created() {
    this.game = launchGame(this.containerId)
  },
  beforeDestroy() {
    this.game.destroy(true)
  }
}
</script>

<style lang="scss" scoped>
.game-container {
  text-align: center;
}
</style>
