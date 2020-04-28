(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{291:function(e,t,r){e.exports=r.p+"assets/img/createproject.f7a47aab.png"},292:function(e,t,r){e.exports=r.p+"assets/img/run.22deeaf3.png"},293:function(e,t,r){e.exports=r.p+"assets/img/verrifier.0b7d19d7.png"},381:function(e,t,r){"use strict";r.r(t);var n=r(2),a=Object(n.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"基于springboot、cxf实现webservice"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于springboot、cxf实现webservice","aria-hidden":"true"}},[e._v("#")]),e._v(" 基于SpringBoot、Cxf实现webservice")]),e._v(" "),n("h2",{attrs:{id:"创建项目"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建项目")]),e._v(" "),n("p",[n("img",{attrs:{src:r(291),alt:"createproject"}})]),e._v(" "),n("h2",{attrs:{id:"添加依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加依赖")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web-services</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.apache.cxf</groupId>\n    <artifactId>cxf-spring-boot-starter-jaxws</artifactId>\n    <version>3.2.6</version>\n</dependency>\n")])])]),n("h2",{attrs:{id:"创建服务接口及实现类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建服务接口及实现类","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建服务接口及实现类")]),e._v(" "),n("p",[e._v("IStudentService")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package com.jiay.webservice.service;\n\nimport javax.jws.WebMethod;\nimport javax.jws.WebService;\n\n@WebService(targetNamespace = "http://service.webservice.jiay.com")\npublic interface IStudentService {\n    @WebMethod\n    public String getName(String name);\n}\n')])])]),n("p",[e._v("StudentServiceImpl")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package com.jiay.webservice.service;\n\nimport org.springframework.stereotype.Service;\n\nimport javax.jws.WebService;\n\n@WebService(serviceName = "studentService",targetNamespace = "http://service.webservice.jiay.com",\n        endpointInterface = "com.jiay.webservice.service.IStudentService")\n@Service\npublic class StudentServiceImpl implements IStudentService {\n    @Override\n    public String getName(String name) {\n        return "hi," + name;\n    }\n}\n')])])]),n("h2",{attrs:{id:"添加配置类"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#添加配置类","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加配置类")]),e._v(" "),n("p",[e._v("WebServiceConfig")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('package com.jiay.webservice.config;\n\nimport com.jiay.webservice.service.IStudentService;\nimport org.apache.cxf.Bus;\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\nimport org.apache.cxf.jaxws.EndpointImpl;\n\nimport javax.xml.ws.Endpoint;\n\n@Configuration\npublic class WebServiceConfig {\n\n    private Bus bus;\n    private IStudentService studentService;\n\n    @Autowired\n    private void dependenceInject(Bus bus, IStudentService studentService) {\n        this.bus = bus;\n        this.studentService = studentService;\n    }\n    @Bean\n    public Endpoint endpointStudentService() {\n        EndpointImpl endpoint = new EndpointImpl(bus, studentService);\n        //接口发布\n        endpoint.publish("/studentService");\n        return endpoint;\n    }\n\n}\n')])])]),n("h2",{attrs:{id:"启动验证"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动验证","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动验证")]),e._v(" "),n("p",[e._v("浏览器内访问验证，出现可用的服务列表表示成功"),n("br"),e._v(" "),n("img",{attrs:{src:r(292),alt:"run"}}),n("br"),e._v("\n客户端工具验证"),n("br"),e._v("\nWebServiceStudio，webservice开源调试工具，"),n("a",{attrs:{href:"https://github.com/Gladitor/WebServiceStudio",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),n("OutboundLink")],1),n("br"),e._v(" "),n("img",{attrs:{src:r(293),alt:"verification"}})]),e._v(" "),n("foot"),e._v(" "),n("Vssue",{attrs:{title:"webservicebasedspringboot"}})],1)},[],!1,null,null,null);t.default=a.exports}}]);