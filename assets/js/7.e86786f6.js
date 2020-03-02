(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{254:function(e,r,t){e.exports=t.p+"assets/img/baseversion.9be9c12e.png"},255:function(e,r,t){e.exports=t.p+"assets/img/start.e3efea03.png"},256:function(e,r,t){e.exports=t.p+"assets/img/noderedui.830eb58d.png"},257:function(e,r,t){e.exports=t.p+"assets/img/uibuilder.772b84fd.png"},258:function(e,r,t){e.exports=t.p+"assets/img/flow3.eb259851.png"},259:function(e,r,t){e.exports=t.p+"assets/img/funcnode.0da689dd.png"},260:function(e,r,t){e.exports=t.p+"assets/img/uibuilderconfig.9a77cb61.png"},261:function(e,r,t){e.exports=t.p+"assets/img/nodereduibuilderdemo.e2911f9f.gif"},344:function(e,r,t){"use strict";t.r(r);var s=t(2),i=Object(s.a)({},function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"使用nodered-scadavis实现办公室webscada"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用nodered-scadavis实现办公室webscada","aria-hidden":"true"}},[e._v("#")]),e._v(" 使用nodered + scadavis实现办公室webscada")]),e._v(" "),s("h2",{attrs:{id:"node-red安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-red安装","aria-hidden":"true"}},[e._v("#")]),e._v(" node-red安装")]),e._v(" "),s("p",[e._v("基础环境需要nodejs、npm，没安装的话自行安装一下，安装后查看版本号。"),s("br"),e._v(" "),s("img",{attrs:{src:t(254),alt:"baseversion"}})]),e._v(" "),s("ul",[s("li",[e._v("npm全局安装node-red")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("npm install -g --unsafe-perm node-red\n")])])]),s("ul",[s("li",[e._v("node-red启动"),s("br"),e._v(" "),s("img",{attrs:{src:t(255),alt:"start"}})]),e._v(" "),s("li",[e._v("浏览器器中访问"),s("br"),e._v(" "),s("img",{attrs:{src:t(256),alt:"noderedui"}}),s("br"),e._v("\n我这里已有3个流程，若第一次使用这里是空的。")]),e._v(" "),s("li",[e._v("uibuilder安装"),s("br"),e._v(" "),s("img",{attrs:{src:t(257),alt:"uibuilder"}}),s("br"),e._v("\nuibuilder是一个可以方便的创建一个展示页面的节点，详情查看"),s("a",{attrs:{href:"https://github.com/TotallyInformation/node-red-contrib-uibuilder",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"创建流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建流程","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建流程")]),e._v(" "),s("ul",[s("li",[e._v("添加节点"),s("br"),e._v("\n一个注入节点、一个函数节点、一个uibuilder、一个调试节点。注入发起流程，函数进行数据处理，uibuilder展示数据效果，调试输出数据值用于效果验证，节点间建立连接。\n"),s("img",{attrs:{src:t(258),alt:"flow3"}})]),e._v(" "),s("li",[e._v("节点配置"),s("br"),e._v("\n双击几点可打开节点配置页面，注入节点保持默认配置。"),s("br"),e._v("\n函数节点中进行一个随机数脚本配置"),s("br"),e._v(" "),s("img",{attrs:{src:t(259),alt:"funcnode"}}),s("br"),e._v("\nuibuilder节点进行页面配置"),s("br"),e._v(" "),s("img",{attrs:{src:t(260),alt:"uibuilderconfig"}}),s("br"),e._v("\n添加如下代码：")])]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('<!doctype html>\n<html>\n<head>\n<script src="https://scadavis.io/synoptic/synopticapi.js"><\/script>\n<script src="../uibuilder/vendor/socket.io/socket.io.js"><\/script>\n\x3c!--<script src="../uibuilder/vendor/jquery/dist/jquery.min.js"><\/script>--\x3e\n  \n\x3c!-- REQUIRED: Sets up Socket listeners and the msg object --\x3e\n<script src="./uibuilderfe.js"><\/script>\x3c!--    //dev version --\x3e\n\x3c!--<script src="./uibuilderfe.min.js"><\/script> \t//prod version --\x3e\n</head>\n<body>\n<script>\nvar office = new scadavis({\n          container: "div1",\n          iframeparams: \'frameborder="0" height="490" width="553"\',\n          svgurl: "http://localhost:8028/scadavis/displayfiles/office.svg"\n        });\noffice.zoomTo(0.65);\nuibuilder.start();\nuibuilder.onChange(\'msg\', function (newVal){\n    console.log(newVal);\n    office.storeValue("TAG1", newVal.payload);\n    office.updateValues();\n})\n<\/script>\n</body>\n</html>\n')])])]),s("p",[e._v("上面的office.svg参考"),s("a",{attrs:{href:"https://raw.githubusercontent.com/riclolsen/displayfiles/master/office.svg",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里"),s("OutboundLink")],1),e._v("，需要科学方法才能访问，所以我放到了本地，无法访问需要的朋友可以加qq群获取。")]),e._v(" "),s("h2",{attrs:{id:"效果展示"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#效果展示","aria-hidden":"true"}},[e._v("#")]),e._v(" 效果展示")]),e._v(" "),s("p",[s("img",{attrs:{src:t(261),alt:"nodereduibuilderdemo"}})]),e._v(" "),s("foot"),e._v(" "),s("Vssue",{attrs:{title:"nodered-scadavis"}})],1)},[],!1,null,null,null);r.default=i.exports}}]);