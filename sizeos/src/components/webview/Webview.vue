<template>
  <div v-show="show">
    <overlay :show="show" @closeLsn="close" :click="min" :transparent="true"></overlay>
    <transition  :name="direction" >
      <vue-drr ref="vdrr"  :bounds='{parent:true}' :rotatable='false' v-show="show"
           :class="'popup-modal ' +className +(type)" style="margin:0 !important;padding:0 !important;border:1px solid #999 !important;border-radius:0.2rem;">
        <div class="title-bar" >
          {{title}}
          <div class="title-handle">
            <a class="ha-min" btn="hide" @click="min">最小化</a>
            <a class="ha-max" btn="max" @click="changeFull()"  v-if="type=='modal'">最大化</a>
            <a class="ha-revert" btn="revert" @click="changeMini()" v-if="type=='full'">还原</a>
            <a class="ha-close" btn="close" @click="close()">关闭</a>
          </div>
        </div>
        <div class="modal-content" style="overflow:hidden !important;bottom:1.5rem;top:1.3rem;">
          <webview v-if="runv==2" partition="trusted" allownw class="mywebview" :src="src" autosize="on" minwidth="300" minheight="200"></webview>
          <iframe v-if="runv==1" class="mywebview" :src="src" autosize="on" width="100%" height="100%" frameborder="0" seamless ></iframe>
        </div>
        <div class="set-bar"><div class="pull-right"><a class="btn" id="refresh"><i class="icon ico-refresh"></i><span class="btn-con">刷新</span></a></div></div>
      </vue-drr>
    </transition>
  </div>
</template>
<script>
import VueDRR from 'vue-drag-resize-rotate'
import {Overlay}  from '../overlay'
export default {
  components: {
    'vue-drr': VueDRR,
    Overlay
  },
  props: {
    src:{
      type: String,
      required: true
    },
    ispadding: {
      type: Boolean,
      default: false
    },
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    leftButtonText:{
      type: String
    },
    closeButtonText: {
      type: String
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
  data(){
    return{
      type:"modal",
      runv:0
    }
  },
  methods: {
    close () {
      this.$emit("closeLsn");
    },
    min(){
      this.$emit('min');
    },
    leftClick(){
      this.$emit("leftClick");
    },
    rightClick(){
      if(this.closeButtonText){
        this.close();
      }
      this.$emit("rightClick");
    },
    changeFull(){
      this.type="full";
      this.$refs.vdrr.localx=0;
      this.$refs.vdrr.localy=0;
      this.$refs.vdrr.localw=this.$el.offsetWidth;
      this.$refs.vdrr.localh=this.$el.offsetHeight;
    },
    changeMini(){
      this.type="modal";
      this.$refs.vdrr.localx=this.$el.offsetWidth/6;
      this.$refs.vdrr.localy=this.$el.offsetHeight/6;
      this.$refs.vdrr.localw=this.$el.offsetWidth/1.5;
      this.$refs.vdrr.localh=this.$el.offsetHeight/1.5;
    }
  },
  mounted(){
    var runv=1;
    try {
      eval("require('os')");
      runv=2;
    } catch (e) {

    } finally {

    }
    this.runv=runv;
    this.changeMini();
  }
}
</script>

<style lang="less" scoped>
@import './webview.less';
@import '../popup/popup.less';
</style>
