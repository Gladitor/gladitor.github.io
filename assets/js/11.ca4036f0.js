(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{251:function(n,a,e){n.exports=e.p+"assets/img/init.26407cc4.png"},313:function(n,a,e){"use strict";e.r(a);var i=e(2),r=Object(i.a)({},function(){var n=this,a=n.$createElement,i=n._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("h1",{attrs:{id:"springboot-shiro项目集成swagger2"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#springboot-shiro项目集成swagger2","aria-hidden":"true"}},[n._v("#")]),n._v(" springboot-shiro项目集成swagger2")]),n._v(" "),i("p",[n._v("集成版本:")]),n._v(" "),i("ul",[i("li",[n._v("SpringBoot: 2.1.6.RELEASE")]),n._v(" "),i("li",[n._v("Shiro: 1.4.0")]),n._v(" "),i("li",[n._v("Swagger2: 2.8.0")])]),n._v(" "),i("p",[i("img",{attrs:{src:e(251),alt:"swagger"}})]),n._v(" "),i("h2",{attrs:{id:"依赖"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#依赖","aria-hidden":"true"}},[n._v("#")]),n._v(" 依赖")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v("\x3c!-- shiro --\x3e\n<dependency>\n    <groupId>org.apache.shiro</groupId>\n    <artifactId>shiro-spring</artifactId>\n    <version>1.4.0</version>\n</dependency>\n<dependency>\n    <groupId>org.crazycake</groupId>\n    <artifactId>shiro-redis</artifactId>\n    <version>3.2.2</version>\n</dependency>\n<dependency>\n    <groupId>com.github.theborakompanioni</groupId>\n    <artifactId>thymeleaf-extras-shiro</artifactId>\n    <version>2.0.0</version>\n</dependency>\n\x3c!-- swagger --\x3e\n<dependency>\n    <groupId>io.springfox</groupId>\n    <artifactId>springfox-swagger2</artifactId>\n    <version>2.8.0</version>\n</dependency>\n<dependency>\n    <groupId>io.springfox</groupId>\n    <artifactId>springfox-swagger-ui</artifactId>\n    <version>2.8.0</version>\n</dependency>\n")])])]),i("h2",{attrs:{id:"swagger2配置类"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#swagger2配置类","aria-hidden":"true"}},[n._v("#")]),n._v(" swagger2配置类")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('@EnableSwagger2\npublic class Swagger2Config {\n    @Bean\n    public Docket api(){\n        return new Docket(DocumentationType.SWAGGER_2)\n                .apiInfo(apiInfo())\n                .select()\n                .apis(RequestHandlerSelectors.basePackage("com.jiay.autho"))\n                .paths(PathSelectors.any())\n                .build();\n    }\n\n    private ApiInfo apiInfo(){\n        return new ApiInfoBuilder()\n                .title("Autho-api文档")\n                .description("权限系统api文档")\n                //服务条款网址\n                .termsOfServiceUrl("")\n                .version("1.0")\n                .contact(new Contact("JIAY","https://gladitor.github.io/myblog/","eicool110@outlook.com"))\n                .build();\n    }\n}\n')])])]),i("h2",{attrs:{id:"shiro配置"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#shiro配置","aria-hidden":"true"}},[n._v("#")]),n._v(" shiro配置")]),n._v(" "),i("p",[n._v("shiro中添加swagger的放行,否则无法访问swagger-ui.html")]),n._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[n._v('//swagger放行配置\nfilterChainDefinitionMap.put("/swagger-ui.html", "anon");\nfilterChainDefinitionMap.put("/swagger/**", "anon");\nfilterChainDefinitionMap.put("/swagger-resources/**", "anon");\nfilterChainDefinitionMap.put("/v2/**", "anon");\nfilterChainDefinitionMap.put("/webjars/**", "anon");\nfilterChainDefinitionMap.put("/configuration/**", "anon");\n//必须加以下配置，否则无法正常访问swagger中接口内容\nfilterChainDefinitionMap.put("/configuration/security", "anon");\nfilterChainDefinitionMap.put("/configuration/ui", "anon");\n')])])]),i("h2",{attrs:{id:"issue"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#issue","aria-hidden":"true"}},[n._v("#")]),n._v(" ISSUE")]),n._v(" "),i("p",[n._v("按上面配置可正常访问swagger-ui.html，并能正常使用swagger。"),i("br"),n._v("\n下面列出swagger集成中配到的几个问题：")]),n._v(" "),i("ul",[i("li",[n._v("Unable to infer base url."),i("br"),n._v("\n原因是shiro放行中配置不对，需要按【//swagger放行配置】处配置。")]),n._v(" "),i("li",[n._v("按网上的常规配置后能访问swagger-ui.html但接口内容无法正常查看及测试"),i("br"),n._v("\n原因是shiro放行配置不完全，需要加上实例中shiro放行配置最后两行。关于这两行有疑问的朋友参考下面shiro通配符说明。")])]),n._v(" "),i("h2",{attrs:{id:"shiro通配符说明"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#shiro通配符说明","aria-hidden":"true"}},[n._v("#")]),n._v(" shiro通配符说明")]),n._v(" "),i("p",[n._v("?　　匹配单个字符，正确路径/admin, 那么/admin?=authc可以匹配admin + 单个字符，admin12就不能匹配")]),n._v(" "),i("p",[n._v("*　　能匹配任意字符，admin，admin1, admin12, 都可以匹配，多层路径不能匹配，比如admin12/12")]),n._v(" "),i("p",[n._v("**　 匹配多层路径，admin/**　　能匹配admin/1222/12112...., 但是admin12/1545不能匹配")]),n._v(" "),i("Vssue",{attrs:{title:"springboot-swagger2"}})],1)},[],!1,null,null,null);a.default=r.exports}}]);