<template>
  <div class="page">
    <div id="root-main" >
      <div id="root-ground" class="page" @contextmenu.prevent="showGroudMenu"/>
      <div id="root-startmenu" >
        <deskicon :deskapps="deskapps" ref="deskicon" @onItemClick="onItemClick" @AppMenuShow="$refs.ctxGroudMenu.ctxVisible=false"/>
      </div>
      <webview v-for="(deskapp,index) in taskApps" :key="index" :style="'z-index:'+(selindex==index?'4':'3')"  :title="deskapp.name" :show="deskapp.status && deskapp.status==1" @closeLsn="deskapp.status=0" @min="deskapp.status=2" class="root-webview" :src="deskapp.src" ></webview>
    </div>
    <div id="root-bottom" >
      <taskbar id="root-bottom-task" :selindex="selindex" :deskapps="taskApps" @onItemClick="onTaskBarItemClick" ref="taskbar" @AppMenuShow="$refs.ctxGroudMenu.ctxVisible=false"/>
    </div>
    <img @click="hideAllTask" src="../assets/taskico.png" id="bottomlefticon"></img>
    <context-menu id="context-menu" ref="ctxGroudMenu">
      <li >新建文件夹</li>
      <li class="disabled">新建文档</li>
      <li>打开终端</li>
      <li>更改背景</li>
    </context-menu>
  </div>
</template>
<script>
//status:0.未打开 1.显示 2.隐藏
import {contextMenu} from '../components/contextmenu'
import Deskicon from "./DeskIcon"
import Taskbar from "./TaskBar"
import {Webview} from '../components/webview'
export default {
  components: {
    contextMenu,
    Taskbar,
    Webview,
    Deskicon
  },
  data() {
    return {
      selindex:0,
      myapps: [
        {
          name:"微信",
          sort:1,
          status:0,
          addtime:0,
          icon:require("../assets/i/icon11.png"),
          src:"https://wx.qq.com"
        },

        {
          name:"QQ",
          sort:2,
          status:0,
          addtime:0,
          icon:require("../assets/i/icon12.png"),
          src:"http://w.qq.com"
        },
        {
          name:"YY",
          sort:3,
          status:0,
          addtime:0,
          icon:require("../assets/i/icon13.png"),
          src:"http://www.yy.com"
        },
        {
          name:"兔博士",
          sort:4,
          status:0,
          addtime:0,
          icon:require("../assets/i/icon14.png"),
          src:"http://www.toopos.com/pos"
        },
        {
          name:"百度",
          sort:5,
          status:0,
          addtime:0,
          icon:require("../assets/i/icon11.png"),
          src:"http://www.baidu.com"
        }
      ]
    }
  },
  methods:{
    hideAllTask(){
      for (var i in this.taskApps) {
        this.taskApps[i].status=2;
      }

    },
    showGroudMenu(e){
      this.$refs.ctxGroudMenu.open(e);
      this.$refs.deskicon.hideAppMenu();
    },
    onItemClick(index){
      var arrNew=this.deskapps[index];
      if(arrNew.status==0){
        arrNew.addtime=new Date().getTime();
        this.selindex=this.taskApps.length;
      }
      arrNew.status=1;
      this.$set(this.deskapps, index, arrNew);
    },
    onTaskBarItemClick(index){
      if(this.selindex==index && this.taskApps[index].status==1){
        this.taskApps[index].status=2;
      }else{
        this.taskApps[index].status=1;
        this.selindex=index;
      }

    }
  },
  computed: {
    taskApps(){
      return this.deskapps.filter((d) => {
        if(d.status && d.status!=0){
          return true;
        }
        return false;
      }).keysort("addtime",false);
    },
    deskapps(){
      return this.myapps.keysort("sort",false);
    }
  }
}
</script>
<style lang="less" >
  @import '../styles/root.less';
</style>
