<template>
  <h1 :class="'title '+  titleclass"><slot></slot></h1>
</template>

<script>
export default {
  props: {
    titleclass: {
      type: String,
      default: 'center'
    }
  }
}
</script>

<style lang="less" >
@import './title.less';
</style>
