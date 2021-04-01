(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{262:function(t,a,n){t.exports=n.p+"assets/img/target.a2287cae.png"},389:function(t,a,n){"use strict";n.r(a);var e=n(2),r=Object(e.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"datax-alibaba"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datax-alibaba","aria-hidden":"true"}},[t._v("#")]),t._v(" DataX --alibaba")]),t._v(" "),e("h2",{attrs:{id:"简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),e("p",[t._v("DataX是阿里开源ETL工具，全面支持常见数据库，并在阿里广泛使用，详情参考"),e("a",{attrs:{href:"https://github.com/alibaba/DataX",target:"_blank",rel:"noopener noreferrer"}},[t._v("github地址"),e("OutboundLink")],1),e("br"),t._v("\n下面以MySQL->SQLSERVER,SQLSERVER->SQLSERVER为例记录datax的基本用法，然后结合crontab实现数据抽取任务。")]),t._v(" "),e("h2",{attrs:{id:"datax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datax","aria-hidden":"true"}},[t._v("#")]),t._v(" datax")]),t._v(" "),e("h3",{attrs:{id:"环境配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),e("p",[t._v("datax是java实现，通过python脚本加载json配置文件执行，因此需要JDK1.8和python2.x，这是官方建议的版本。")]),t._v(" "),e("h3",{attrs:{id:"datax打包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datax打包","aria-hidden":"true"}},[t._v("#")]),t._v(" datax打包")]),t._v(" "),e("p",[t._v("从github clone源码到本地，mvn打包:mvn -U clean package assembly:assembly -Dmaven.test.skip=true，本地编译报错无法找到com.aliyun.openservices：tablestore-streamclient：jar：1.0.0-SNAPSHOT，找到osstreamreader的pom.xml，更改如下：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("<dependency>\n    <groupId>com.aliyun.openservices</groupId>\n    <artifactId>tablestore-streamclient</artifactId>\n    \x3c!--<version>1.0.0-SNAPSHOT</version>--\x3e\n\t<version>1.0.0</version>\n</dependency>\n")])])]),e("p",[t._v("mvn -U clean package assembly:assembly -Dmaven.test.skip=true 重新打包")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[INFO] BUILD SUCCESS\n[INFO] -----------------------------------------------------------------\n[INFO] Total time: 08:12 min\n[INFO] Finished at: 2019-04-03T18:05:48+08:00\n[INFO] Final Memory: 133M/960M\n[INFO] -----------------------------------------------------------------\n")])])]),e("p",[t._v("也可以从github下载打包好的文件直接使用，github上的包有可能不是最新的。\n打包好的文件目录如下"),e("br"),t._v(" "),e("img",{attrs:{src:n(262),alt:"target"}}),e("br"),t._v("\nbin是python脚本目录，job是任务配置目录，plugin是抽取插件目录。")]),t._v(" "),e("h3",{attrs:{id:"mysql-sqlserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-sqlserver","aria-hidden":"true"}},[t._v("#")]),t._v(" MySQL->SQLSERVER")]),t._v(" "),e("p",[t._v("配置文件内容：抽取测试表中数据到目标表")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "job": {\n        "setting": {\n            "speed": {\n\t\t\t    "byte":10485760\n\t\t\t}\n        },\n        "content": [\n            {\n                "reader": {\n                    "name": "mysqlreader",\n                    "parameter": {\n                        "username": "root",\n                        "password": "mysql123",\n                        "where": "",\n                        "connection": [\n                            {\n                                "querySql": [\n                                    "select * from db_info_p;"\n                                ],\n                                "jdbcUrl": [\n                                    "jdbc:mysql://localhost:3306/test"\n                                ]\n                            }\n                        ]\n                    }\n                },\n                "writer": {\n                    "name": "sqlserverwriter",\n                    "parameter": {\n\t\t\t\t\t    "username": "sa",\n                        "password": "sa1",\n\t\t\t\t\t\t"column": [\n\t\t\t\t                    \'*\'\n\t\t\t                    ],\n                        "connection": [\n                            {\n                                "table": [\n                                    "db_info_p"\n                                ],\n                                "jdbcUrl": "jdbc:sqlserver://192.168.1.151:1000;DatabaseName=FrontMachineTest"\n                            }\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\n')])])]),e("h3",{attrs:{id:"sqlserver-sqlserver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sqlserver-sqlserver","aria-hidden":"true"}},[t._v("#")]),t._v(" SQLSERVER->SQLSERVER")]),t._v(" "),e("p",[t._v("配置文件内容：抽取三个月之前的数据到备份表，删除当前表中相应的数据")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('{\n    "job": {\n        "setting": {\n            "speed": {\n\t\t\t    "byte":10485760\n\t\t\t}\n        },\n        "content": [\n\t\t\t{\n                "reader": {\n                    "name": "sqlserverreader",\n                    "parameter": {\n                        "username": "sa",\n                        "password": "sa1!",\n                        "where": "",\n                        "connection": [\n                            {\n                                "querySql": [\n                                    "select * from t_gwlssj where sjsj<DATEADD(M,-3,GETDATE());"\n                                ],\n                                "jdbcUrl": [\n                                    "jdbc:sqlserver://172.16.10.45:1000;DatabaseName=NCYS_GCDB"\n                                ]\n                            }\n                        ]\n                    }\n                },\n                "writer": {\n                    "name": "sqlserverwriter",\n                    "parameter": {\n\t\t\t\t\t    "username": "sa",\n                        "password": "sa1!",\n\t\t\t\t\t\t"column": [\n\t\t\t\t                    \'*\'\n\t\t\t                    ],\n                        "connection": [\n                            {\n                                "table": [\n                                    "t_gwlssj_bak"\n                                ],\n                                "jdbcUrl": "jdbc:sqlserver://172.16.10.45:1000;DatabaseName=NCYS_GCDB"\n                            }\n                        ],\n\t\t\t\t\t\t"postSql": [\n                            "delete from t_gwlssj where sjsj<DATEADD(M,-3,GETDATE());"\n                        ]\n                    }\n                }\n            }\n        ]\n    }\n}\n')])])]),e("p",[t._v("注意writer和reader的connection配置是有区别的writer中数据库连接字符串不能配置多个，否则会报出找不到合适驱动的异常信息。"),e("br"),t._v("\n其它datax更详细的配置可参考官网说明。")]),t._v(" "),e("h2",{attrs:{id:"crontab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab","aria-hidden":"true"}},[t._v("#")]),t._v(" crontab")]),t._v(" "),e("h3",{attrs:{id:"环境配置-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 环境配置")]),t._v(" "),e("p",[t._v("1、下载nircmd，"),e("a",{attrs:{href:"http://www.nirsoft.net/utils/nircmd.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载地址"),e("OutboundLink")],1),e("br"),t._v("\n2、安装nircmd，并同意copy到系统目录，若有安全软件风险提醒则需要添加信任。")]),t._v(" "),e("h3",{attrs:{id:"crontab配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crontab配置","aria-hidden":"true"}},[t._v("#")]),t._v(" crontab配置")]),t._v(" "),e("p",[t._v("1、下载crontab，"),e("a",{attrs:{href:"https://github.com/qiu8310/crontab",target:"_blank",rel:"noopener noreferrer"}},[t._v("github地址"),e("OutboundLink")],1),e("br"),t._v("\n2、更改crontab下bin目录中crontab.bat、crontab_install.bat、crontab_uninstall.bat中crontab的路径。"),e("br"),t._v("\n3、配置任务")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# 每隔1天执行一次\n* * */1 * * python F:/datax/bin/datax.py F:/datax/job/sclssj_job.json\n* * */1 * * python F:/datax/bin/datax.py F:/datax/job/gwlssj_job.json\n* * */1 * * python F:/datax/bin/datax.py F:/datax/job/rcgglssj_job.json\n")])])]),e("p",[t._v("4、安装定时任务"),e("br"),t._v("\n执行crontab_install.bat")]),t._v(" "),e("p",[t._v("查看定时任务执行成功，数据抽取成功，大功告成。")]),t._v(" "),e("foot"),t._v(" "),e("Vssue",{attrs:{title:"datax"}})],1)},[],!1,null,null,null);a.default=r.exports}}]);