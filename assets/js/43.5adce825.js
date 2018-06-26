(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{164:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),n("p",[t._v("When you package an application, the Javascript package becomes very large, affecting the page load. If we can split the components corresponding to different routes into different code blocks and then load the corresponding components when the route is accessed, this will be more efficient.")]),n("p",[t._v("Combining Vue's "),n("a",{attrs:{href:"https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components",target:"_blank",rel:"noopener noreferrer"}},[t._v("async component feature"),n("OutboundLink")],1),t._v(" and webpack's "),n("a",{attrs:{href:"https://webpack.js.org/guides/code-splitting/",target:"_blank",rel:"noopener noreferrer"}},[t._v("code splitting feature"),n("OutboundLink")],1),t._v(", it's trivially easy to lazy-load route components.")]),t._m(1),n("br"),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),n("p",[t._m(8),n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/231",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-element-admin/issues/231"),n("OutboundLink")],1)]),n("p",[t._v("Production：")]),t._m(9),t._m(10),n("p",[t._v("Of course, there are some side effects of writing this way. due to")]),t._m(11),t._m(12),t._m(13),n("p",[t._v("Use "),n("code",[t._v("babel plugins")]),n("a",{attrs:{href:"https://github.com/airbnb/babel-plugin-dynamic-import-node",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel-plugin-dynamic-import-node"),n("OutboundLink")],1),t._v(".\nIt only does one thing by converting all "),n("code",[t._v("import()")]),t._v(" to "),n("code",[t._v("require()")]),t._v(", so that all asynchronous components can be import synchronously using this plugin. Combined with the bebel environment variable "),n("a",{attrs:{href:"https://babeljs.io/docs/usage/babelrc/#env-option",target:"_blank",rel:"noopener noreferrer"}},[t._v("BABEL_ENV"),n("OutboundLink")],1),t._v(", let it only work in the development environment, in the development environment will convert all import () into require ().")]),n("p",[t._v("This solution to solve the problem of repeated packaging before,  while the invasiveness of the code is also very small, you usually write routing only need to follow the lazy loading method of the "),n("a",{attrs:{href:"https://router.vuejs.org/guide/advanced/lazy-loading.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official document"),n("OutboundLink")],1),t._v(" routing on it, the other are handed to the handle of the cable, When you don't want to use this program, just remove it from Babel's plugins.")]),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),n("p",[t._v("After that, you're done. Routing can be written as usual.")]),t._m(19),n("p",[n("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/pull/727",target:"_blank",rel:"noopener noreferrer"}},[t._v("Related code changes"),n("OutboundLink")],1)]),t._m(20),n("p",[t._v("Webpack4 has been out, greatly improving the speed of packaging and compiling, and may not need to be so complicated afterwards. More page hot updates can be made quickly, completely eliminating the need for previously mentioned solutions.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"lazy-loading-routes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lazy-loading-routes","aria-hidden":"true"}},[this._v("#")]),this._v(" Lazy Loading Routes")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{attrs:{class:"token function-variable function"}},[t._v("Foo")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'./Foo.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("When you think your page's hot reload is slow, you need to look down ↓")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"differentiating-development-and-production-environments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differentiating-development-and-production-environments","aria-hidden":"true"}},[this._v("#")]),this._v(" Differentiating development and production environments")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("[This solution has been eliminated]")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you have more and more pages in your project, using "),e("code",[this._v("lazy-loading")]),this._v(" in the development environment becomes less appropriate, and every change of code that triggers a hot update becomes very slow. Therefore, it is recommended to only use the lazy loading function in the build environment.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Development:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{attrs:{class:"token comment"}},[t._v("// vue-loader at least v13.0.0+")]),t._v("\nmodule"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" file "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("require")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'@/views/'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" file "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("strong",[this._v("Note here that this method only supports "),e("code",[this._v("vue-loader at least v13.0.0+")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("module"),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" file "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'@/views/'")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" file "),n("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'.vue'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"elimination-reason"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elimination-reason","aria-hidden":"true"}},[this._v("#")]),this._v(" Elimination reason")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Every module that could potentially be requested on an import() call is included. For example, import(./locale/${language}.json) will cause every .json file in the ./locale directory to be bundled into the new chunk. At run time, when the variable language has been computed, any file like english.json or german.json will be available for consumption.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("The user can measure whether to adopt this method according to the business situation. If your project is not large and you can also accept the local development hot update speed. You can  continue to use lazy loading to avoid this side effect in all environments.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"new-plan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#new-plan","aria-hidden":"true"}},[this._v("#")]),this._v(" New Plan")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Code:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("First add "),e("code",[this._v("BABEL_ENV")]),this._v(" to "),e("code",[this._v("package.json")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{attrs:{class:"token property"}},[this._v('"dev"')]),e("span",{attrs:{class:"token operator"}},[this._v(":")]),this._v(" "),e("span",{attrs:{class:"token string"}},[this._v('"cross-env BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js"')]),this._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Then "),n("code",[t._v(".babelrc")]),t._v(" can only include the "),n("code",[t._v("babel-plugin-dynamic-import-node")]),n("code",[t._v("plugins")]),t._v(" and make it work only in the "),n("code",[t._v("development")]),t._v(" mode.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v('"env"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v('"development"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{attrs:{class:"token property"}},[t._v('"plugins"')]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token string"}},[t._v('"dynamic-import-node"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" path"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v("'/login'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" component"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("import")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'@/views/login/index'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"improve"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#improve","aria-hidden":"true"}},[this._v("#")]),this._v(" Improve")])}],!1,null,null,null);e.default=a.exports}}]);