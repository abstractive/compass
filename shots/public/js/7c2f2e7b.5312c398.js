(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7c2f2e7b"],{4129:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{attrs:{view:"lHr LpR lFr"}},[e("compass-header"),e("compass-drawer-dashboard"),e("compass-drawer-information"),e("compass-footer"),e("q-page-container",[e("router-view")],1)],1)},o=[],s=e("e5a0"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-drawer",{attrs:{elevated:"","content-class":"bg-grey-2"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("q-list",{attrs:{highlight:"","no-border":"",link:"","inset-delimiter":""}},[e("q-item",{staticClass:"q-mt-sm q-mb-lg",attrs:{exact:"",to:"/"}},[e("q-item-section",{attrs:{side:"",avatar:""}},[e("q-icon",{attrs:{name:"fas fa-sign-out-alt"}})],1),e("q-item-section",[t._v("Signout")])],1),e("q-item",{staticClass:"q-my-sm",attrs:{exact:"",to:"/dashboard"}},[e("q-item-section",{attrs:{side:"",avatar:""}},[e("q-icon",{attrs:{name:"fas fa-tachometer-alt"}})],1),e("q-item-section",[t._v("Dashboard")])],1),e("q-item",{staticClass:"q-mb-md",attrs:{to:"/dashboard/profile"}},[e("q-item-section",{attrs:{side:"",avatar:""}},[e("q-icon",{attrs:{name:"fas fa-address-card"}})],1),e("q-item-section",[t._v("Profile")])],1),e("q-separator"),e("q-item",{staticClass:"q-my-md",attrs:{to:"/dashboard/needs"}},[e("q-item-section",{attrs:{side:"",avatar:""}},[e("q-icon",{attrs:{name:"fas fa-briefcase"}})],1),e("q-item-section",[t._v("Needs")])],1)],1)],1)},n=[],c={computed:{show:function(){return this.$store.state.showDrawerLeft}}},l=c,d=e("2877"),u=Object(d["a"])(l,i,n,!1,null,null,null),h=u.exports,f=e("a814"),m=e("be74"),p={name:"Dashboard",components:{"compass-header":s["a"],"compass-drawer-dashboard":h,"compass-drawer-information":f["a"],"compass-footer":m["a"]}},b=p,g=Object(d["a"])(b,r,o,!1,null,null,null);a["default"]=g.exports},a814:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-drawer",{attrs:{elevated:"",side:"right","content-class":"bg-grey-2"},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("q-list",{attrs:{highlight:"","no-border":"",link:"","inset-delimiter":""}},[e("q-item",{staticClass:"q-my-sm",attrs:{clickable:"",to:"/handbook"}},[e("q-item-section",{attrs:{side:"",avatar:""}},[e("q-icon",{attrs:{name:"fas fa-book"}})],1),e("q-item-section",[t._v("Handbook")])],1),e("q-separator"),e("q-item",{staticClass:"q-my-sm",attrs:{clickable:"",to:"/contact"}},[e("q-item-section",{attrs:{side:"",avatar:""}},[e("q-icon",{attrs:{name:"fas fa-headset"}})],1),e("q-item-section",[t._v("Contact Us")])],1)],1)],1)},o=[],s=e("b06b"),i={methods:{openURL:s["a"]},computed:{show:function(){return this.$store.state.showDrawerRight}}},n=i,c=e("2877"),l=Object(c["a"])(n,r,o,!1,null,null,null);a["a"]=l.exports},b06b:function(t,a,e){"use strict";var r=e("0967"),o=e("2b0e");a["a"]=function(t,a){var e=window.open;if(!0===r["a"].is.cordova){if(void 0!==cordova&&void 0!==cordova.InAppBrowser&&void 0!==cordova.InAppBrowser.open)e=cordova.InAppBrowser.open;else if(void 0!==navigator&&void 0!==navigator.app)return navigator.app.loadUrl(t,{openExternal:!0})}else if(void 0!==o["a"].prototype.$q.electron)return o["a"].prototype.$q.electron.shell.openExternal(t);var s=e(t,"_blank");if(s)return s.focus(),s;a&&a()}},be74:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-footer",[e("q-toolbar",{attrs:{color:"secondary"}},[e("q-toolbar-title",[t._v("\n      © "),e("b",[e("a",{staticClass:"cursor-pointer",on:{click:function(a){return t.openURL("http://abstractive.org")}}},[t._v("abstractive labs")])]),t._v(";\n      by "),e("a",{staticClass:"cursor-pointer",on:{click:function(a){return t.openURL("https://extremist.digital")}}},[t._v("digitalextremist //")])]),e("q-btn",{attrs:{flat:"",right:"",label:t.showRight?"":"Information","icon-right":"fas fa-info-circle"},on:{click:t.toggleDrawerRight}})],1)],1)},o=[],s=e("b06b"),i={computed:{showRight:function(){return this.$store.state.showDrawerRight}},methods:{openURL:s["a"],toggleDrawerRight:function(){this.$store.dispatch("toggleDrawerRight")}}},n=i,c=e("2877"),l=Object(c["a"])(n,r,o,!1,null,null,null);a["a"]=l.exports},e5a0:function(t,a,e){"use strict";var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-header",[e("q-toolbar",{attrs:{color:"primary"}},[e("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Navigation"},on:{click:t.toggleDrawerLeft}},[e("q-icon",{attrs:{name:"fas fa-bars"}})],1),e("q-toolbar-title",[e("a",{staticClass:"cursor-pointer",on:{click:function(a){return t.$router.push("/")}}},[t._v("^Compass")])]),e("q-btn",{attrs:{flat:"",right:"",label:t.showRight?"":"Information","icon-right":"fas fa-info-circle","aria-label":"Information"},on:{click:t.toggleDrawerRight}})],1)],1)},o=[],s=e("b06b"),i={computed:{showRight:function(){return this.$store.state.showDrawerRight}},methods:{openURL:s["a"],toggleDrawerRight:function(){this.$store.dispatch("toggleDrawerRight")},toggleDrawerLeft:function(){this.$store.dispatch("toggleDrawerLeft")}}},n=i,c=e("2877"),l=Object(c["a"])(n,r,o,!1,null,null,null);a["a"]=l.exports}}]);