(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{267:function(t,n,e){t.exports=e.p+"assets/img/httpdemoresult.7137482e.gif"},268:function(t,n,e){t.exports=e.p+"assets/img/jsonserver.0fa5f56b.png"},389:function(t,n,e){"use strict";e.r(n);var a=e(2),s=Object(a.a)({},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"使用nodered实现httpclient和httpserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用nodered实现httpclient和httpserver","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用nodered实现httpclient和httpserver")]),t._v(" "),a("p",[t._v("http应用非常简单，无非客户端请求和服务端提供服务，先上一个效果图，请求服务和提供服务："),a("br"),t._v(" "),a("img",{attrs:{src:e(267),alt:"httpdemoresult"}})]),t._v(" "),a("h2",{attrs:{id:"客户端请求服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端请求服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 客户端请求服务")]),t._v(" "),a("ul",[a("li",[t._v("创建流程"),a("br"),t._v("\n示例采用三个节点，注入、http request、debug")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "id": "cc288cf7.d2442",\n        "type": "inject",\n        "z": "c7956a02.c84278",\n        "name": "",\n        "topic": "",\n        "payload": "",\n        "payloadType": "date",\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "x": 110,\n        "y": 100,\n        "wires": [\n            [\n                "947677aa.2f92c8"\n            ]\n        ]\n    },\n    {\n        "id": "947677aa.2f92c8",\n        "type": "http request",\n        "z": "c7956a02.c84278",\n        "name": "",\n        "method": "GET",\n        "ret": "txt",\n        "paytoqs": false,\n        "url": "http://localhost:8001/students/1",\n        "tls": "",\n        "persist": false,\n        "proxy": "",\n        "authType": "",\n        "x": 300,\n        "y": 100,\n        "wires": [\n            [\n                "b6fa8b31.a0f9a8"\n            ]\n        ]\n    },\n    {\n        "id": "b6fa8b31.a0f9a8",\n        "type": "debug",\n        "z": "c7956a02.c84278",\n        "name": "",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "x": 500,\n        "y": 100,\n        "wires": []\n    }\n]\n')])])]),a("h2",{attrs:{id:"服务端提供服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务端提供服务","aria-hidden":"true"}},[t._v("#")]),t._v(" 服务端提供服务")]),t._v(" "),a("ul",[a("li",[t._v("创建流程"),a("br"),t._v("\n示例采用三个节点，http in、http request、http response")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[\n    {\n        "id": "d4450f50.c8d0e",\n        "type": "http in",\n        "z": "c7956a02.c84278",\n        "name": "",\n        "url": "/nhs",\n        "method": "get",\n        "upload": false,\n        "swaggerDoc": "",\n        "x": 100,\n        "y": 220,\n        "wires": [\n            [\n                "d2a5e002.21a2b"\n            ]\n        ]\n    },\n    {\n        "id": "dc29f6d5.3fc0e8",\n        "type": "http response",\n        "z": "c7956a02.c84278",\n        "name": "",\n        "statusCode": "",\n        "headers": {},\n        "x": 530,\n        "y": 220,\n        "wires": []\n    },\n    {\n        "id": "d2a5e002.21a2b",\n        "type": "http request",\n        "z": "c7956a02.c84278",\n        "name": "",\n        "method": "GET",\n        "ret": "txt",\n        "paytoqs": false,\n        "url": "http://localhost:8001/students/1",\n        "tls": "",\n        "persist": false,\n        "proxy": "",\n        "authType": "",\n        "x": 300,\n        "y": 240,\n        "wires": [\n            [\n                "dc29f6d5.3fc0e8"\n            ]\n        ]\n    }\n]\n')])])]),a("h2",{attrs:{id:"json-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json-server","aria-hidden":"true"}},[t._v("#")]),t._v(" json-server")]),t._v(" "),a("p",[t._v("示例中http://localhost:8001/students/1是使用"),a("a",{attrs:{href:"https://github.com/typicode/json-server",target:"_blank",rel:"noopener noreferrer"}},[t._v("json-server"),a("OutboundLink")],1),t._v("搭建的一个本地测试服务"),a("br"),t._v(" "),a("img",{attrs:{src:e(268),alt:"jsonserver"}})]),t._v(" "),a("foot"),t._v(" "),a("Vssue",{attrs:{title:"noderedhttp"}})],1)},[],!1,null,null,null);n.default=s.exports}}]);