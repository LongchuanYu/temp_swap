(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{6279:function(t,e,a){"use strict";a.r(e);var s,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-mt-sm"},[a("q-infinite-scroll",{attrs:{offset:250},on:{load:t.onLoad},scopedSlots:t._u([{key:"loading",fn:function(){return[a("div",{staticClass:"row justify-center q-my-md"},[a("q-spinner-dots",{attrs:{color:"primary",size:"40px"}})],1)]},proxy:!0}])},[a("q-pull-to-refresh",{on:{refresh:t.refresher}},[a("q-list",t._l(t.items,(function(e,s){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:s,attrs:{clickable:""},on:{click:function(a){return t.handleClick(e.id)}}},[a("q-item-section",{staticClass:"q-pl-sm",attrs:{thumbnail:""}},[a("img",{staticStyle:{width:"150px",height:"150px","object-fit":"cover"},attrs:{src:t.$axios.defaults.baseURL+e.imageUrl,alt:""}})]),a("q-item-section",{attrs:{top:""}},[a("span",{staticClass:"text-weight-bold q-mb-xs"},[t._v(t._s(e.name))]),a("span",{staticClass:"text-subtitle2 q-mb-xs"},[t._v("评分：9.5")]),a("div",{staticClass:"flex justify-start q-mb-md"},[a("q-badge",{attrs:{color:"blue"}},[t._v("Good！")])],1),a("div",{staticClass:"flex justify-start items-center"},[a("q-avatar",{staticClass:"q-mr-sm",attrs:{size:"xs"}},[a("img",{attrs:{src:e.author.avatar,alt:""}})]),a("div",{staticClass:"text-caption"},[t._v(t._s(e.author.username))])],1)])],1)})),1)],1)],1)],1)},o=[],n=a("9523"),r=a.n(n),c={data:function(){return{items:"",_meta:"",shareData:{page:1,per_page:10}}},methods:(s={refresher:function(t){t()},handleClick:function(t){this.$router.push({name:"Detail",params:{id:t}})},_getCookbooks:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=this.shareData.page,s=this.shareData.per_page,i="api/cookbooks/?page=".concat(a,"&per_page=").concat(s);this.$axios.get(i).then((function(a){console.log(a),t.items=a.data.items,t._meta=a.data._meta,e&&e()})).catch((function(t){console.log(t)}))}},r()(s,"refresher",(function(t){this._getCookbooks(t)})),r()(s,"onLoad",(function(t,e){var a=this;if(!this.items||!this._meta||this._meta&&this._meta.page>this._meta.pages)e();else{var s=this._meta.page+1,i=this.shareData.per_page,o="api/cookbooks/?page=".concat(s,"&per_page=").concat(i);this.$axios.get(o).then((function(t){a._meta=t.data._meta,a.items=a.items.concat(t.data.items),e()})).catch((function(t){console.log(t)}))}})),s),created:function(){this._getCookbooks()}},l=c,m=a("2877"),p=a("eebe"),h=a.n(p),u=a("ef35"),f=a("59d7"),d=a("1c1c"),g=a("66e5"),_=a("4074"),v=a("58a8"),b=a("cb32"),k=a("8380"),q=a("714f"),x=Object(m["a"])(l,i,o,!1,null,null,null);e["default"]=x.exports;h()(x,"components",{QInfiniteScroll:u["a"],QPullToRefresh:f["a"],QList:d["a"],QItem:g["a"],QItemSection:_["a"],QBadge:v["a"],QAvatar:b["a"],QSpinnerDots:k["a"]}),h()(x,"directives",{Ripple:q["a"]})}}]);