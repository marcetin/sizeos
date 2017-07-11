<template>
  <div >
    <overlay :show="show" @closeLsn="close"></overlay>
    <transition :name="direction" >
      <div v-show="show"
           :class="'popup-modal ' +className +(type)">
        <page-header>
          <header-title>{{title}}</header-title>
          <header-link v-if="leftButtonText" @linkClick="leftClick" :left="true" >{{leftButtonText}}</header-link>
          <header-link @linkClick="rightClick">{{closeButtonText}}</header-link>
        </page-header>
        <div class="modal-content" >
          <div :class="ispadding?'content-padded':''"><slot></slot></div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { Header, HeaderLink, Title } from '../header'
import {Overlay}  from '../overlay'
export default {
  components: {
    Overlay,
    'page-header': Header,
    'header-link': HeaderLink,
    'header-title': Title
  },
  props: {
    ispadding: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Popup Title'
    },
    leftButtonText:{
      type: String
    },
    closeButtonText: {
      type: String
    },
    type: {
      type: String,
      default: 'full'
    },
    className: {
      type: String,
      default: ''
    },
    direction:{
      type: String,
      default: 'bottom'
    }
  },
  methods: {
    close () {
      this.$emit("closeLsn");
    },
    leftClick(){
      this.$emit("leftClick");
    },
    rightClick(){
      if(this.closeButtonText){
        this.close();
      }
      this.$emit("rightClick");
    }
  }
}
</script>

<style lang="less" scoped>
@import './popup.less';
</style>
