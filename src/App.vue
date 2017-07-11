<template>
  <div id="app">
    <transition enter-active-class="animated fadeInRight" leave-active-class="animated fadeOutLeft">
       <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style lang="less">
@import './styles/page.less';
@import './styles/transition.less';
</style>
