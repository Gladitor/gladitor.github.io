(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{342:function(e,n,r){e.exports=r.p+"assets/img/newproject.5edf7c71.png"},343:function(e,n,r){e.exports=r.p+"assets/img/newproject2.f91bb30c.png"},344:function(e,n,r){e.exports=r.p+"assets/img/folder.93b17075.png"},345:function(e,n,r){e.exports=r.p+"assets/img/applicatinContext.4e5ebace.png"},346:function(e,n,r){e.exports=r.p+"assets/img/run.9999964b.png"},347:function(e,n,r){e.exports=r.p+"assets/img/browser.7b857df9.png"},348:function(e,n,r){e.exports=r.p+"assets/img/verrifier.d222d7b3.png"},381:function(e,n,r){"use strict";r.r(n);var a=r(2),t=Object(a.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cxf实现webservice实战入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cxf实现webservice实战入门","aria-hidden":"true"}},[e._v("#")]),e._v(" Cxf实现webservice实战入门")]),e._v(" "),a("p",[e._v("Idea中webapp项目中基于Cxf实现webservice。")]),e._v(" "),a("h2",{attrs:{id:"新建web项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建web项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 新建web项目")]),e._v(" "),a("p",[e._v("选择maven构建"),a("br"),e._v(" "),a("img",{attrs:{src:r(342),alt:"newproject"}}),a("br"),e._v("\n填入信息"),a("br"),e._v(" "),a("img",{attrs:{src:r(343),alt:"newproject2"}})]),e._v(" "),a("h2",{attrs:{id:"添加依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加依赖")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<properties>\n    <cxf.version>3.2.2</cxf.version>\n    <spring.version>4.3.14.RELEASE</spring.version>\n    <servlet-api.version>2.5</servlet-api.version>\n    <jsp-api.version>2.0</jsp-api.version>\n</properties>\n<dependencies>\n   <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-frontend-jaxws</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-transports-http</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-transports-http</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-transports-udp</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-databinding-jaxb</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-frontend-simple</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-frontend-jaxrs</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-ws-addr</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    \x3c!-- https://mvnrepository.com/artifact/org.apache.cxf/cxf-rt-bindings-soap --\x3e\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-bindings-soap</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>javax.ws.rs</groupId>\n      <artifactId>javax.ws.rs-api</artifactId>\n      <version>2.1</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-rs-security-jose-jaxrs</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-rs-extension-providers</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.apache.cxf</groupId>\n      <artifactId>cxf-rt-rs-security-sso-oidc</artifactId>\n      <version>${cxf.version}</version>\n    </dependency>\n\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-aop</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-aspects</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-beans</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-context</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-context-support</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-core</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-expression</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-jdbc</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-tx</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-web</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-webmvc</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-test</artifactId>\n      <version>4.3.3.RELEASE</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-jms</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>org.springframework</groupId>\n      <artifactId>spring-messaging</artifactId>\n      <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n      <groupId>javax.servlet</groupId>\n      <artifactId>servlet-api</artifactId>\n      <version>${servlet-api.version}</version>\n      <scope>provided</scope>\n    </dependency>\n    <dependency>\n      <groupId>javax.servlet</groupId>\n      <artifactId>jsp-api</artifactId>\n      <version>${jsp-api.version}</version>\n      <scope>provided</scope>\n    </dependency>\n</dependencies>\n")])])]),a("h2",{attrs:{id:"创建java和resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建java和resources","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建java和resources")]),e._v(" "),a("p",[a("img",{attrs:{src:r(344),alt:"folder"}})]),e._v(" "),a("h2",{attrs:{id:"创建spring上下文配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建spring上下文配置文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建spring上下文配置文件")]),e._v(" "),a("p",[e._v("上图中的applicationContext.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd http://cxf.apache.org/jaxws http://cxf.apache.org/schemas/jaxws.xsd"\n       xmlns:jaxws="http://cxf.apache.org/jaxws">\n\n\n</beans>\n')])])]),a("h2",{attrs:{id:"配置web-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置web-xml","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置web.xml")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<?xml version="1.0" encoding="UTF-8"?>\n\n<web-app>\n  <display-name>Archetype Created Web Application</display-name>\n  <context-param>\n    <param-name>contextConfigLocation</param-name>\n    <param-value>classpath:applicationContext.xml</param-value>\n  </context-param>\n  <servlet>\n    <servlet-name>cxfServlet</servlet-name>\n    <servlet-class>org.apache.cxf.transport.servlet.CXFServlet</servlet-class>\n  </servlet>\n  <servlet-mapping>\n    <servlet-name>cxfServlet</servlet-name>\n    <url-pattern>/ws/*</url-pattern>\n  </servlet-mapping>\n  <listener>\n    <listener-class>org.springframework.web.context.ContextLoaderListener</listener-class>\n  </listener>\n</web-app>\n')])])]),a("h2",{attrs:{id:"创建服务实现类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建服务实现类","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建服务实现类")]),e._v(" "),a("p",[e._v("IStudentService")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("package com.jiay.service;\n\nimport javax.jws.WebService;\n\n@WebService\npublic interface IStudentService {\n    public String getName(String name);\n}\n")])])]),a("p",[e._v("IStudentServiceImpl")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package com.jiay.service;\n\nimport javax.jws.WebService;\n\n@WebService\npublic class StudentServiceImpl implements IStudentService {\n    @Override\n    public String getName(String name) {\n        return "hi," + name;\n    }\n}\n')])])]),a("h2",{attrs:{id:"配置applicationcontext-xml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置applicationcontext-xml","aria-hidden":"true"}},[e._v("#")]),e._v(" 配置applicationContext.xml")]),e._v(" "),a("p",[e._v("加入")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<bean id="studentServiceImpl" class="com.jiay.service.StudentServiceImpl"></bean>\n<jaxws:endpoint id="studentService" implementor="#studentServiceImpl" address="/studentService" />\n')])])]),a("p",[a("img",{attrs:{src:r(345),alt:"applicationContext"}})]),e._v(" "),a("h2",{attrs:{id:"启动验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动验证","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动验证")]),e._v(" "),a("p",[e._v("run"),a("br"),e._v(" "),a("img",{attrs:{src:r(346),alt:"run"}}),a("br"),e._v("\n出现上图的提示说明服务创建成功"),a("br"),e._v("\n浏览器中访问"),a("br"),e._v(" "),a("img",{attrs:{src:r(347),alt:"browser"}}),a("br"),e._v("\n客户端工具验证"),a("br"),e._v("\nWebServiceStudio，webservice开源调试工具，"),a("a",{attrs:{href:"https://github.com/Gladitor/WebServiceStudio",target:"_blank",rel:"noopener noreferrer"}},[e._v("地址"),a("OutboundLink")],1),a("br"),e._v(" "),a("img",{attrs:{src:r(348),alt:"verification"}})]),e._v(" "),a("h2",{attrs:{id:"完结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完结","aria-hidden":"true"}},[e._v("#")]),e._v(" 完结")]),e._v(" "),a("p",[e._v("到此一个完整的webservice应用示例就完成了，朋友们动起手来吧。。")]),e._v(" "),a("h2",{attrs:{id:"可能出现的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可能出现的问题","aria-hidden":"true"}},[e._v("#")]),e._v(" 可能出现的问题")]),e._v(" "),a("ul",[a("li",[e._v("服务端服务接口类和实现类不在同一个包内，客户端cxf动态调用服务时的异常")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("org.apache.cxf.common.i18n.UncheckedException: No operation was found with the name {http://impl.webserevice.xxx.com}getDevs\n")])])]),a("p",[e._v("服务端@WebService中targetNamespace要设置成服务接口类所在包名反序，例如接口类包名：com.xxx.webservice，targetNamespace要设置成http://webservice.xxx.com。另外经测试(启动验证中的.NET客户端工具)当客户端不使用cxf调用时并没有此异常。")]),e._v(" "),a("ul",[a("li",[e._v("cxf客户端连续调用不同的服务地址时的异常")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("org.apache.cxf.interceptor.Fault: Marshalling Error: XXXX  is not known to this context\n")])])]),a("p",[e._v("调用新的wsdl前重置上下文。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("//调用方法外部获取cl  \nClassLoader cl = Thread.currentThread().getContextClassLoader();\n//调用方法内部进行新wsdl服务调用前设置上下文  \nThread.currentThread().setContextClassLoader(cl);\n")])])]),a("h3",{staticStyle:{"text-align":"right"}},[e._v("-- Jiay 2019/11/7 11:13")]),e._v(" "),a("foot"),e._v(" "),a("Vssue",{attrs:{title:"webservice"}})],1)},[],!1,null,null,null);n.default=t.exports}}]);