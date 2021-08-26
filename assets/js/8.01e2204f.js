(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{280:function(n,e,t){n.exports=t.p+"assets/img/mysqlinstall.8840f910.png"},281:function(n,e,t){n.exports=t.p+"assets/img/nodedesc.35b00e81.png"},282:function(n,e,t){n.exports=t.p+"assets/img/mysqlresult.96c556ca.gif"},283:function(n,e,t){n.exports=t.p+"assets/img/mssqlinstall.67057781.png"},284:function(n,e,t){n.exports=t.p+"assets/img/mssqldesc.5f97a5e9.png"},285:function(n,e,t){n.exports=t.p+"assets/img/mssqlresult.8982a606.gif"},286:function(n,e,t){n.exports=t.p+"assets/img/oracledbinstall.d9aa89c1.png"},287:function(n,e,t){n.exports=t.p+"assets/img/oracledesc.848aee2f.png"},288:function(n,e,t){n.exports=t.p+"assets/img/oracleresult.8c080a0a.gif"},394:function(n,e,t){"use strict";t.r(e);var a=t(2),s=Object(a.a)({},function(){var n=this,e=n.$createElement,a=n._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"使用nodered对常用数据库操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用nodered对常用数据库操作","aria-hidden":"true"}},[n._v("#")]),n._v(" 使用nodered对常用数据库操作")]),n._v(" "),a("h2",{attrs:{id:"mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql","aria-hidden":"true"}},[n._v("#")]),n._v(" mysql")]),n._v(" "),a("ul",[a("li",[n._v("安装节点"),a("br"),n._v("\n从node-red的节点管理中安装"),a("br"),n._v(" "),a("img",{attrs:{src:t(280),alt:"mysqlinstall"}})]),n._v(" "),a("li",[n._v("查看帮助"),a("br"),n._v(" "),a("strong",[n._v("节点帮助很重要，一定要仔细阅读。")]),a("br"),n._v(" "),a("img",{attrs:{src:t(281),alt:"nodedesc"}}),a("br"),n._v("\nmsg.topic: 内容是sql脚本语句"),a("br"),n._v("\nmsg.payload: 以数组形式存储sql脚本参数或脚本返回值"),a("br"),n._v("\nmysqlReconnectTime：重连时间可以在settings.js中设置")]),n._v(" "),a("li",[n._v("创建流程"),a("br"),n._v("\n示例采用四个节点，注入、设置topic、mysql、debug")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('[\n    {\n        "id": "fce31c80.e33",\n        "type": "tab",\n        "label": "mysqldemo",\n        "disabled": false,\n        "info": ""\n    },\n    {\n        "id": "5ac7fa51.6e4d44",\n        "type": "inject",\n        "z": "fce31c80.e33",\n        "name": "",\n        "topic": "",\n        "payload": "",\n        "payloadType": "date",\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "x": 110,\n        "y": 100,\n        "wires": [\n            [\n                "84b8d38.57ef73"\n            ]\n        ]\n    },\n    {\n        "id": "2bbf6de4.99bcb2",\n        "type": "mysql",\n        "z": "fce31c80.e33",\n        "mydb": "a052576c.4f3778",\n        "name": "localhost",\n        "x": 500,\n        "y": 100,\n        "wires": [\n            [\n                "a430906f.e73bd"\n            ]\n        ]\n    },\n    {\n        "id": "a430906f.e73bd",\n        "type": "debug",\n        "z": "fce31c80.e33",\n        "name": "",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "x": 670,\n        "y": 100,\n        "wires": []\n    },\n    {\n        "id": "84b8d38.57ef73",\n        "type": "change",\n        "z": "fce31c80.e33",\n        "name": "设定msg.topic",\n        "rules": [\n            {\n                "t": "set",\n                "p": "topic",\n                "pt": "msg",\n                "to": "SELECT * FROM iot_terminal",\n                "tot": "str"\n            }\n        ],\n        "action": "",\n        "property": "",\n        "from": "",\n        "to": "",\n        "reg": false,\n        "x": 320,\n        "y": 100,\n        "wires": [\n            [\n                "2bbf6de4.99bcb2"\n            ]\n        ]\n    },\n    {\n        "id": "a052576c.4f3778",\n        "type": "MySQLdatabase",\n        "z": "",\n        "host": "localhost",\n        "port": "3306",\n        "db": "iot",\n        "tz": "Asia/Shanghai"\n    }\n]\n')])])]),a("ul",[a("li",[n._v("测试结果"),a("br"),n._v(" "),a("img",{attrs:{src:t(282),alt:"mysqlresult"}})])]),n._v(" "),a("h2",{attrs:{id:"mssql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mssql","aria-hidden":"true"}},[n._v("#")]),n._v(" mssql")]),n._v(" "),a("ul",[a("li",[n._v("安装节点"),a("br"),n._v("\n从node-red的节点管理中安装"),a("br"),n._v(" "),a("img",{attrs:{src:t(283),alt:"mssqlinstall"}})]),n._v(" "),a("li",[n._v("查看帮助"),a("br"),n._v(" "),a("strong",[n._v("节点帮助很重要，一定要仔细阅读。重要的事情第二遍")]),a("br"),n._v(" "),a("img",{attrs:{src:t(284),alt:"nodedesc"}}),a("br"),n._v("\nquery中输入sql脚本执行，支持"),a("a",{attrs:{href:"http://mustache.github.io/mustache.5.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("mustache(胡子)"),a("OutboundLink")],1),n._v("语法，包括msg、flow context、global context"),a("br"),n._v("\n如果query为空，则把payload当作脚本执行"),a("br"),n._v("\n多个查询将返回记录集合数组"),a("br"),n._v("\n推荐用受影响的行数校验INSERT、UPDATE、DELETE是否成功"),a("br"),n._v("\nmsg.payload: 通常是返回结果")]),n._v(" "),a("li",[n._v("创建流程"),a("br"),n._v("\n示例采用四个节点，注入、mssql、debug")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('[\n    {\n        "id": "fce31c80.e33",\n        "type": "tab",\n        "label": "mssqldemo",\n        "disabled": false,\n        "info": ""\n    },\n    {\n        "id": "5ac7fa51.6e4d44",\n        "type": "inject",\n        "z": "fce31c80.e33",\n        "name": "",\n        "topic": "",\n        "payload": "",\n        "payloadType": "date",\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "x": 110,\n        "y": 100,\n        "wires": [\n            [\n                "4c7626ac.247368"\n            ]\n        ]\n    },\n    {\n        "id": "a430906f.e73bd",\n        "type": "debug",\n        "z": "fce31c80.e33",\n        "name": "",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "x": 670,\n        "y": 100,\n        "wires": []\n    },\n    {\n        "id": "4c7626ac.247368",\n        "type": "MSSQL",\n        "z": "fce31c80.e33",\n        "mssqlCN": "d8c7fd9f.83ef2",\n        "name": "localhost",\n        "query": "select * from FS_TREELIST",\n        "outField": "payload",\n        "returnType": 0,\n        "throwErrors": 1,\n        "x": 420,\n        "y": 100,\n        "wires": [\n            [\n                "a430906f.e73bd"\n            ]\n        ]\n    },\n    {\n        "id": "d8c7fd9f.83ef2",\n        "type": "MSSQL-CN",\n        "z": "",\n        "tdsVersion": "7_3_B",\n        "name": "jxFrontMachine",\n        "server": "localhost",\n        "port": "1433",\n        "encyption": false,\n        "database": "FrontMachine",\n        "useUTC": true,\n        "connectTimeout": "15000",\n        "requestTimeout": "15000",\n        "cancelTimeout": "5000",\n        "pool": "5"\n    }\n]\n')])])]),a("ul",[a("li",[n._v("测试结果"),a("br"),n._v(" "),a("img",{attrs:{src:t(285),alt:"mssqlresult"}})])]),n._v(" "),a("h2",{attrs:{id:"oracle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oracle","aria-hidden":"true"}},[n._v("#")]),n._v(" oracle")]),n._v(" "),a("ul",[a("li",[n._v("安装节点"),a("br"),n._v("\n从node-red的节点管理中安装"),a("br"),n._v(" "),a("img",{attrs:{src:t(286),alt:"oracledbinstall"}}),a("br"),n._v(" "),a("em",[n._v("没有安装oracle客户端的话配置连接信息后会报DPI-1047错误，"),a("a",{attrs:{href:"https://www.oracle.com/database/technologies/instant-client/winx64-64-downloads.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("下载"),a("OutboundLink")],1),n._v("即时客户端解压包并加入环境变量")])]),n._v(" "),a("li",[n._v("查看帮助"),a("br"),n._v(" "),a("strong",[n._v("节点帮助很重要，一定要仔细阅读。重要的事情说三遍")]),a("br"),n._v(" "),a("img",{attrs:{src:t(287),alt:"oracledesc"}}),a("br"),n._v("\nmsg.payload: 包含要在查询中使用的字段的数组，数组中的第一个元素与查询中的第一个“:fieldname”参数等相对应"),a("br"),n._v("\nmsg.query: 包含SQL查询的字符串，如果不可用，将使用默认SQL"),a("br"),n._v("\nmsg.fieldMappings: 包含对象到数组字段映射的数组。将在msg.payload的内容不是数组时使用。如果不可用，将使用默认字段映射")]),n._v(" "),a("li",[n._v("创建流程"),a("br"),n._v("\n示例采用四个节点，注入、组装查询sql、oracledb、debug")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('[\n    {\n        "id": "fce31c80.e33",\n        "type": "tab",\n        "label": "oracledemo",\n        "disabled": false,\n        "info": ""\n    },\n    {\n        "id": "5ac7fa51.6e4d44",\n        "type": "inject",\n        "z": "fce31c80.e33",\n        "name": "",\n        "topic": "",\n        "payload": "",\n        "payloadType": "date",\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "x": 110,\n        "y": 100,\n        "wires": [\n            [\n                "aa5da6fd.5c0c98"\n            ]\n        ]\n    },\n    {\n        "id": "a430906f.e73bd",\n        "type": "debug",\n        "z": "fce31c80.e33",\n        "name": "",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "x": 670,\n        "y": 100,\n        "wires": []\n    },\n    {\n        "id": "c786068b.ce5028",\n        "type": "oracledb",\n        "z": "fce31c80.e33",\n        "name": "localhost",\n        "usequery": false,\n        "query": "INSERT INTO oracleTableName\\n\\t(fieldName1, fieldName2, Fieldname3)\\n\\tVALUES (\\n\\t\\t:valueOfValuesArrayIndex0,\\n\\t\\t:valueOfValuesArrayIndex1,\\n\\t\\t:valueOfValuesArrayIndex2,\\n\\t)",\n        "usemappings": false,\n        "mappings": "[\\n\\t\\"type\\"\\n]",\n        "server": "e82ba541.cb8538",\n        "resultaction": "multi",\n        "resultlimit": 100,\n        "x": 440,\n        "y": 100,\n        "wires": [\n            [\n                "a430906f.e73bd"\n            ]\n        ]\n    },\n    {\n        "id": "aa5da6fd.5c0c98",\n        "type": "function",\n        "z": "fce31c80.e33",\n        "name": "querysql",\n        "func": "msg.payload = {\\"type\\":\\"SZ\\"};\\nmsg.query = \\"select * from REL_UMP_LMP where type=:type\\";\\nreturn msg;",\n        "outputs": 1,\n        "noerr": 0,\n        "x": 270,\n        "y": 120,\n        "wires": [\n            [\n                "c786068b.ce5028"\n            ]\n        ]\n    },\n    {\n        "id": "e82ba541.cb8538",\n        "type": "oracle-server",\n        "z": "",\n        "host": "localhost",\n        "port": "1521",\n        "reconnect": true,\n        "reconnecttimeout": "5000",\n        "db": "ORCL"\n    }\n]\n')])])]),a("ul",[a("li",[n._v("测试结果"),a("br"),n._v(" "),a("img",{attrs:{src:t(288),alt:"oracleresult"}})])]),n._v(" "),a("foot"),n._v(" "),a("Vssue",{attrs:{title:"noderedDbOperate"}})],1)},[],!1,null,null,null);e.default=s.exports}}]);