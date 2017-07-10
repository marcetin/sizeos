<template lang="html">
<div>
  <ul class="deskicon container" v-dragula>
    <li v-for="(deskapp,index) in deskapps" :key="index" @contextmenu.prevent="showAppMenu" @click="$emit('onItemClick',index)">
      <img :src="deskapp.icon">
      <span>{{deskapp.name}}</span>
    </li>
  </ul>
  <context-menu id="context-app" ref="ctxAppMenu">
    <li>打开</li>
    <li>重命名</li>
    <li>卸载</li>
  </context-menu>
</div>
</template>
<script>
import {contextMenu} from '../components/contextmenu'
export default {
  components: {
    contextMenu
  },
  methods:{
    showAppMenu(e){
      this.$refs.ctxAppMenu.open(e);
      this.$emit("AppMenuShow");
    },
    hideAppMenu(){
      this.$refs.ctxAppMenu.ctxVisible=false;
    }
  },
  props: {
    deskapps: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {

    }

  }
};
</script>

<style lang="less">
.deskicon
{
  li{
    float: left;
    width: 4rem;
    height: 4rem;
    padding: 0.5rem 0;
    text-align: center;
    cursor: pointer;
    &:hover ,
    &.hover ,
    &.focus {background: #999;background-color:rgba(0,0,0,0.2);}
    border-radius: 0.15rem 0.15rem 0.15rem 0.15rem;
    img{
      border-radius: 0.15rem 0.15rem 0.15rem 0.15rem;
      display: block;
      height: 1.6rem;
      width: 1.6rem;
      margin: auto;
    }
    span{
      background: none repeat scroll 0 0 rgba(0, 0, 0, 0.3);
      border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
      font-size: 0.6rem;
      filter: none;
      color: #fff;
      display: inline-block;
      height: 1rem;
      line-height: 1rem;
      margin-top: 0.25rem;
      overflow: hidden;
      padding: 0 0.4rem;
      position: relative;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      z-index: 1;
    }
  }
}
</style>
