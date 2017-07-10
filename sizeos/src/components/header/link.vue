<template>
  <a @click="clickLink()" :id="isback ? 'left_back' : ''" :class="'button button-link link '+ (left ? 'left' : 'right' ) +( edge ? ' edge' : '')">
    <slot></slot>
  </a>
</template>

<script>
export default {
  props: {
    isback: { // pull left
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    edge: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    clickLink(){
      if(this.isback){
        this.$parent.$router.back();
      }else{
        this.$emit("linkClick");
      }
    }
  }
}
</script>

<style lang="less" >
@import './link.less';
</style>
