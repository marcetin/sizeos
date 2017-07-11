<template lang="html">
<div>
  <ul class="taskbar">
    <li v-for="(deskapp,index) in deskapps" :key="index" @contextmenu.prevent="showAppMenu" :class="selindex==index?'active':''" v-if="deskapp.status && deskapp.status!=0" @click="$emit('onItemClick',index)"><b ><img :src="deskapp.icon"><span>{{deskapp.name}}</span></b></li>
  </ul>
  <context-menu id="context-app" style="" ref="ctxAppMenu">
    <li >最大化</li>
    <li>最小化</li>
    <li>关闭</li>
    <li>锁定</li>
    <li>开机自启动</li>
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
    selindex:{
      type:Number,
      default:0
    },
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
.taskbar
{

  li{position:relative;float:left;width: 6rem;margin-right:1px;overflow:hidden;color:#F4F4F4;border:1px solid #272C36;border-color:rgba(30, 30, 30, 0.7);cursor:pointer}
  b{background:url(../assets/desktop_spr_x.png) repeat-x;display:block;font-weight:normal;border:1px solid;border-color:#6F758A #585C6D #414F5A}
  b:hover{border-color:#AEB2BA #9196A1 #616A77;background-position:0 -25px}
  .active b{border-color:#AEB2BA #9196A1 #616A77;background-position:0 -25px}
  b:active{border-color:#647382 #8A91A0 #9398A6;background-position:0 -50px}
  b.focus{border-color:#B8BFCA #9EA8B7 #8A99A9;background-position:0 -75px}
  img{position:absolute;top:0.25rem;left:0.25rem;width:0.8rem;height:0.8rem;border-radius:0.1rem}
  span{font-size: 0.7rem;display:block;width:auto;padding:0 0.25rem 0 1.2rem;line-height:1.2rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
}
</style>
