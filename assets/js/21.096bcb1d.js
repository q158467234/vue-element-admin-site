(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{189:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),n("p",[n("strong",[t._v("注意事项")]),t._v(" 这里有一个需要非常注意的地方就是 "),n("code",[t._v("404")]),t._v(" 页面一定要最后加载，如果放在 constantRouterMap 一同声明了 "),n("code",[t._v("404")]),t._v(" ，后面的所以页面都会被拦截到"),n("code",[t._v("404")]),t._v(" ，详细的问题见 "),n("a",{attrs:{href:"https://github.com/vuejs/vue-router/issues/1176",target:"_blank",rel:"noopener noreferrer"}},[t._v("addRoutes when you've got a wildcard route for 404s does not work"),n("OutboundLink")],1)])]),t._m(5),t._m(6),n("br"),t._m(7),n("p",[t._v("项目里所有的请求都会走"),n("code",[t._v("@/utils/request.js")]),t._v("里面创建的的 axios实例，它统一做了错误处理，"),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/utils/request.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("完整代码"),n("OutboundLink")],1),t._v("。")]),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),n("p",[t._v("当然还有很多不能被"),n("code",[t._v("eslint")]),t._v("检查出来的错误，vue 也提供了全局错误处理钩子"),n("a",{attrs:{href:"https://vuejs.org/v2/api/#errorHandler",target:"_blank",rel:"noopener noreferrer"}},[t._v("errorHandler"),n("OutboundLink")],1),t._v("，所以本项目也做了相对应的错误收集。\n"),n("img",{attrs:{src:"https://wpimg.wallstcn.com/360e4842-4db5-42d0-b078-f9a84a825546.gif",alt:""}})]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),n("p",[t._v("监听错误："),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/errorLog.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/errorLog.js"),n("OutboundLink")],1)]),n("p",[t._v("错误展示组件："),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/src/components/ErrorLog/index.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/components/ErrorLog"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"错误处理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#错误处理","aria-hidden":"true"}},[this._v("#")]),this._v(" 错误处理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"页面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#页面","aria-hidden":"true"}},[this._v("#")]),this._v(" 页面")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("404")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("页面级的错误处理由 "),s("code",[this._v("vue-router")]),this._v(" 统一处理，所有匹配不到正确路由的页面都会进 "),s("code",[this._v("404")]),this._v("页面。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'*'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" redirect"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/404'")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("401")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("@/permission.js")]),this._v("做了权限控制，所有没有权限进入该路由的用户都会被重定向到 "),s("code",[this._v("401")]),this._v("页面。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"请求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求","aria-hidden":"true"}},[this._v("#")]),this._v(" 请求")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("你可以在"),s("code",[this._v("service.interceptors.response")]),this._v(" respone拦截器之中根据自己的实际业务统一针对不同的状态码或者根据自定义code来做错误处理。如：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("service"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("interceptors"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("use")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  response "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token comment"}},[t._v("/**\n  * code为非20000是抛错 可结合自己业务进行修改\n  */")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),n("span",{attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("20000")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token function"}},[t._v("Message")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        message"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        duration"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n      "),n("span",{attrs:{class:"token comment"}},[t._v("// 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("50008")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("50012")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("||")]),t._v(" res"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("code "),n("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("50014")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        MessageBox"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("confirm")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'你已被登出，可以取消继续留在该页面，或者重新登录'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'确定登出'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          confirmButtonText"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'重新登录'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          cancelButtonText"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'取消'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'warning'")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          store"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("dispatch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'FedLogOut'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            location"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reload")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token comment"}},[t._v("// 为了重新实例化vue-router对象 避免bug")]),t._v("\n          "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  error "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("log")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'err'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token comment"}},[t._v("// for debug")]),t._v("\n    "),n("span",{attrs:{class:"token function"}},[t._v("Message")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      message"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" error"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      type"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'error'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      duration"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{attrs:{class:"token number"}},[t._v("1000")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Promise"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("reject")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为所有请求返回的是"),s("code",[this._v("promise")]),this._v("，所以你也可以对每一个请求通过"),s("code",[this._v("catch")]),this._v(" 错误，从而进行单独的处理。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token function"}},[t._v("getInfo")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function"}},[t._v("then")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("catch")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  xxxx\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("本项目也做了代码层面的错误处理，如果你开启了"),s("code",[this._v("eslint")]),this._v("在编写代码的时候就回提示错误。如：\n"),s("img",{attrs:{src:"https://wpimg.wallstcn.com/b037f47c-1f7b-487f-bb05-32e7300767d2.png",alt:""}})])}],!1,null,null,null);s.default=e.exports}}]);