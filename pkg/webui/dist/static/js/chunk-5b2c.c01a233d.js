(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5b2c"],{BBXM:function(t,e,a){"use strict";a.r(e);var o=a("LuOy"),c=a.n(o);for(var s in o)"default"!==s&&function(t){a.d(e,t,function(){return o[t]})}(s);e.default=c.a},LuOy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("wk8/");e.default={data:function(){return{form:{code:""},accountInfo:[],state:!0}},mounted:function(){this.getAccountInfo()},methods:{getAccountInfo:function(){var t=this;(0,o.security)().then(function(e){t.accountInfo=e.data.result})},onSubmit:function(){var t=this;(0,o.bindcode)({google_2fa_token:this.form.code}).then(function(e){return 200===e.code?(t.$message("绑定成功"),void location.reload()):void t.$message("绑定失败！")})},onClose:function(){var t=this;(0,o.close2fa)({google_2fa_token:this.form.code}).then(function(e){return 200===e.code?(t.$message("关闭成功"),void location.reload()):void t.$message("关闭失败！")})},changeState:function(){this.state=!this.state}}}},UuQg:function(t,e,a){},VEth:function(t,e,a){"use strict";var o=a("UuQg");a.n(o).a},XR2B:function(t,e,a){"use strict";var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return 0===t.accountInfo.is_open?a("div",[a("div",{staticClass:"card twofactor-manager"},[t._m(0),t._v(" "),a("div",{staticClass:"card-content with-border"},[a("div",{staticClass:"twofactor-bind"},[a("div",{staticClass:"twofactor-qrcode"},[a("img",{staticClass:"avatar",attrs:{src:t.accountInfo.code}})]),t._v(" "),a("div",{staticClass:"bind-validator is-bfc"},[a("div",{staticClass:"form-inline input-button"},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"80px"}},[a("el-row",{staticClass:"row-bg",attrs:{type:"flex"}},[a("el-col",{attrs:{span:10}},[a("el-form-item",[a("el-input",{attrs:{placeholder:"验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("立即绑定")])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"card-tip"},[t._v("用身份验证器扫描左边的二维码，即可获得验证码")])])]),t._v(" "),a("div",{staticClass:"twofactor-account-info"},[a("h4",[t._v("帐户信息")]),t._v(" "),a("div",{staticClass:"card-tip"},[t._v("若扫描二维码失败，您可以在您的身份验证器中输入以下帐户信息。")]),t._v(" "),a("div",{staticClass:"form-account-info"},[a("el-form",{attrs:{model:t.form,"label-width":"200px"}},[a("el-form-item",{attrs:{"label-width":"100px",label:"帐户名称"}},[a("el-input",{attrs:{disabled:!0,placeholder:t.accountInfo.account},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":"100px",label:"密钥"}},[a("el-input",{attrs:{disabled:!0,placeholder:t.accountInfo.secret},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1),t._v(" "),a("el-form-item",{attrs:{"label-width":"100px",label:"算法"}},[a("el-input",{attrs:{disabled:!0,placeholder:"基于时间"},model:{value:t.form.account,callback:function(e){t.$set(t.form,"account",e)},expression:"form.account"}})],1)],1)],1)])])])]):a("div",{staticClass:"filter-container"},[a("h4",{staticClass:"margin-resp-bottom"},[t._v("您已经开启了两步验证")]),t._v(" "),a("el-form",{staticClass:"filter-item",attrs:{model:t.form}},[!0===t.state?a("el-row",[a("el-button",{attrs:{type:"danger"},on:{click:t.changeState}},[t._v("关闭")])],1):a("el-row",[a("el-input",{staticClass:"filter-item",attrs:{placeholder:"输入身份验证器中的验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{display:"inline-block"},attrs:{type:"danger"},on:{click:t.onClose}},[t._v("确认关闭")])],1)],1)],1)},c=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-header"},[e("h4",{staticClass:"card-title"},[this._v("两步验证")]),this._v(" "),e("div",{staticClass:"card-tip"},[e("p",[this._v("要开启二步验证，您需要先安装 "),e("a",{staticClass:"qr-modal",attrs:{"data-soft":"ga"}},[this._v("谷歌身份验证器")]),this._v("；")])])])}];a.d(e,"a",function(){return o}),a.d(e,"b",function(){return c})},Z1jb:function(t,e,a){"use strict";a.r(e);var o=a("XR2B"),c=a("BBXM");for(var s in c)"default"!==s&&function(t){a.d(e,t,function(){return c[t]})}(s);a("VEth");var n=a("KHd+"),i=Object(n.a)(c.default,o.a,o.b,!1,null,"2b647740",null);i.options.__file="security.vue",e.default=i.exports}}]);