webpackJsonp([54],{176:function(t,e){t.exports=function(t,e,n,o,r){var a,i=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),o&&(u._scopeId=o);var c;if(r?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},u._ssrRegister=c):n&&(c=n),c){var s=u.functional,f=s?u.render:u.beforeCreate;s?u.render=function(t,e){return c.call(e),f(t,e)}:u.beforeCreate=f?[].concat(f,c):[c]}return{esModule:a,exports:i,options:u}}},177:function(t,e,n){var o=n(176)(n(184),null,null,null,null);t.exports=o.exports},178:function(t,e,n){var o=n(176)(n(185),null,null,null,null);t.exports=o.exports},179:function(t,e,n){var o=n(176)(n(182),null,null,null,null);t.exports=o.exports},180:function(t,e,n){var o=n(176)(n(183),null,null,null,null);t.exports=o.exports},182:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(93).then(function(){var e=[n(200)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Content:o}},183:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(10).then(function(){var e=[n(197)];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(78).then(function(){var e=[n(201)];t.apply(null,e)}.bind(this)).catch(n.oe)},a=function(t){return n.e(6).then(function(){var e=[n(198)];t.apply(null,e)}.bind(this)).catch(n.oe)},i=function(t){return n.e(8).then(function(){var e=[n(199)];t.apply(null,e)}.bind(this)).catch(n.oe)},l=function(t){return n.e(84).then(function(){var e=[n(202)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Header:o,SecondHeader:r,HeaderLink:a,HeaderTitle:i,SimpleHeader:l,Title:i}},184:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(91).then(function(){var e=[n(203)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Icon:o}},185:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(77).then(function(){var e=[n(205)];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(95).then(function(){var e=[n(206)];t.apply(null,e)}.bind(this)).catch(n.oe)},a=function(t){return n.e(70).then(function(){var e=[n(204)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Button:o,CDButton:r,ButtonGroup:a}},186:function(t,e,n){var o=n(176)(n(188),null,null,null,null);t.exports=o.exports},188:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(79).then(function(){var e=[n(207)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Posts:o}},190:function(t,e,n){var o=n(176)(n(191),null,null,null,null);t.exports=o.exports},191:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(80).then(function(){var e=[n(213)];t.apply(null,e)}.bind(this)).catch(n.oe)},r=function(t){return n.e(81).then(function(){var e=[n(215)];t.apply(null,e)}.bind(this)).catch(n.oe)},a=function(t){return n.e(96).then(function(){var e=[n(214)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Footer:o,SecondFooter:r,FooterItem:a,Item:a}},252:function(t,e,n){var o=n(176)(n(260),null,null,null,null);t.exports=o.exports},260:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return n.e(11).then(function(){var e=[n(274)];t.apply(null,e)}.bind(this)).catch(n.oe)};e.default={Echarts:o}},442:function(t,e,n){var o=n(176)(n(775),n(466),null,null,null);t.exports=o.exports},466:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("page-header",{slot:"header"},[n("header-title",[t._v(t._s(t.$t("shift.title")))]),t._v(" "),n("header-link",{attrs:{left:!0,isback:!0}},[n("icon",{attrs:{icon:"arrowleft"}}),t._v(t._s(t.$t("default.back")))],1),t._v(" "),n("header-link",{on:{linkClick:function(e){t.vipshow=!1}}},[n("router-link",{attrs:{to:{path:"shiftrecord"}}},[t._v(" "+t._s(t.$t("shift.shiftrecord.title")))])],1)],1),t._v(" "),n("page-content",{attrs:{ispadding:!0}},[n("echarts",{attrs:{option:t.eoption},on:{ready:t.onEchartReady,click:t.onEchartClick}})],1),t._v(" "),n("page-footer",{staticStyle:{padding:"0 0.5rem"}},[n("span",{staticClass:"font06",staticStyle:{"line-height":"1rem",position:"absolute",left:"0.5rem",right:"4.5rem"}},[t._v("上班时间："+t._s(t._f("from")(t.shift.nAddTime))+" 总销售额："+t._s(t._f("decimal")(t.arrData.dSaleTotleMoney))+" 找零："+t._s(t._f("decimal")(t.arrData.dSaleChange)))]),t._v(" "),n("span",{staticStyle:{position:"absolute",right:"0.5rem",width:"4rem"}},[n("m-button",{attrs:{size:"mini"},nativeOn:{click:function(e){t.confirmShift()}}},[t._v("立即交班")])],1)]),t._v(" "),n("posts",{ref:"posts"})],1)},staticRenderFns:[]}},775:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(180),r=n(177),a=n(179),i=n(178),l=n(190),u=n(186),c=n(252);e.default={components:{"page-header":o.Header,"header-link":o.HeaderLink,"header-title":o.HeaderTitle,"page-content":a.Content,"m-button":i.Button,"page-footer":l.Footer,Icon:r.Icon,Echarts:c.Echarts,Posts:u.Posts},data:function(){return{shift:{},eoption:{title:{text:"销售额",subtext:"0.00",x:"56%",y:"35%",textStyle:{fontSize:18,fontWeight:"bolder",color:"#333"},subtextStyle:{color:"#666"}},tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"left",data:["现金","会员卡","银行卡","第三方支付"]},series:[{name:"销售类型",type:"pie",radius:["35%","55%"],center:["60%","40%"],data:[{value:0,name:"现金"},{value:0,name:"会员卡"},{value:0,name:"银行卡"},{value:0,name:"第三方支付"}],itemStyle:{normal:{label:{show:!0,formatter:"{b} : {c} ({d}%)"},labelLine:{show:!0}}}}]},arrData:{}}},methods:{onEchartReady:function(){this.updateRoute()},onEchartClick:function(t,e,n){console.log(arguments)},logout:function(){this.$Cookie.remove("cPwd"),this.$Cookie.remove("cUserID"),this.$router.push({path:"login"})},confirmShift:function(){var t=this;t.$refs.posts&&t.$refs.posts.post(t.$Method.nShitEnd,null,!0).then(function(e){setTimeout(function(){t.logout()},1e3)})},updateRoute:function(){var t=this;t.$refs.posts&&t.$refs.posts.post(t.$Method.nSaleRecordSum).then(function(e){try{try{t.shift=e.arrData.tables.shift.db[0]}catch(t){}if(null==e.arrData)return;t.arrData=e.arrData,t.eoption.title.subtext=e.arrData.dSaleTotleMoney.toDecimal(2),t.eoption.series[0].data=[{value:e.arrData.dSaleMoney.toDecimal(2),name:"现金"},{value:e.arrData.dSaleMemberMoney.toDecimal(2),name:"会员卡"},{value:e.arrData.dSaleBankMoney.toDecimal(2),name:"银行卡"},{value:e.arrData.dSaleThirdMoney.toDecimal(2),name:"第三方支付"}]}catch(t){}},function(t){})}},activated:function(){this.updateRoute(),document.title=this.$t("shift.title")}}}});