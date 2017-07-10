<template>
  <transition name="fade">
    <div :class="transparent ? 'transparent overlay' : 'overlay'"  v-if="show" @click="click && click()">
      <div class="inner" v-bind:style="{ opacity: opacity }"></div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    click: {
      type: Function,
      default: undefined
    },
    transparent: {
      type: Boolean,
      default: false
    },
    opacity: {
      type: Number,
      default: 1
    }
  }
}
</script>

<style lang="less" scoped>
@import "./overlay.less";
</style>
