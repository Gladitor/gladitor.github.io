(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(t,r,e){},284:function(t,r,e){t.exports=e.p+"assets/img/bp.752abb96.png"},285:function(t,r,e){t.exports=e.p+"assets/img/depend.ae06b726.png"},286:function(t,r,e){t.exports=e.p+"assets/img/start.77bdbb7a.png"},287:function(t,r,e){t.exports=e.p+"assets/img/prop.205d907e.png"},288:function(t,r,e){t.exports=e.p+"assets/img/hello.a4b4d5ee.png"},289:function(t,r,e){t.exports=e.p+"assets/img/package1.d180feb4.png"},290:function(t,r,e){t.exports=e.p+"assets/img/error1.8881a073.png"},291:function(t,r,e){t.exports=e.p+"assets/img/depex.eeaf9cb4.png"},292:function(t,r,e){t.exports=e.p+"assets/img/sbsi.27957a06.png"},293:function(t,r,e){t.exports=e.p+"assets/img/repT8.d82e6ffc.png"},294:function(t,r,e){t.exports=e.p+"assets/img/ex_dis.d60a8cee.png"},295:function(t,r,e){t.exports=e.p+"assets/img/multien.39e36490.png"},296:function(t,r,e){t.exports=e.p+"assets/img/custompara.3116c16d.png"},297:function(t,r,e){t.exports=e.p+"assets/img/classano1.cdd81b1b.png"},298:function(t,r,e){t.exports=e.p+"assets/img/classano2.1b636251.png"},299:function(t,r,e){t.exports=e.p+"assets/img/interceptor.61aa5679.png"},300:function(t,r,e){"use strict";var a=e(142);e.n(a).a},355:function(t,r,e){"use strict";e.r(r);e(300);var a=e(2),n=Object(a.a)({},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"springcloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springcloud","aria-hidden":"true"}},[t._v("#")]),t._v(" SpringCloud")]),t._v(" "),a("h2",{attrs:{id:"spring-boot-基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-基础","aria-hidden":"true"}},[t._v("#")]),t._v(" spring boot 基础")]),t._v(" "),a("p",[t._v("之前有springMVC的使用经历，很多地方是跟springMVC对比的角度叙述的，有springMVC的经验会更好理解。")]),t._v(" "),a("h3",{attrs:{id:"开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始","aria-hidden":"true"}},[t._v("#")]),t._v(" 开始")]),t._v(" "),a("p",[t._v("创建maven项目，更改build path,去除错误提示"),a("br"),t._v(" "),a("img",{attrs:{src:e(284),alt:"bp"}}),a("br"),t._v("\n配置sb(spring boot后文统称sb)依赖"),a("br"),t._v(" "),a("img",{attrs:{src:e(285),alt:"depend"}}),a("br"),t._v("\n更改App类如第一张图，执行main方法，sb会启动自带的tomcat容器，启动成功，浏览器访问"),a("br"),t._v(" "),a("img",{attrs:{src:e(286),alt:"start"}}),a("br"),t._v("\n不用配置任何配置文件，也不用显示的使用任何容器就可以启动，比以往spring的使用方便的多")]),t._v(" "),a("h3",{attrs:{id:"sb配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sb配置","aria-hidden":"true"}},[t._v("#")]),t._v(" sb配置")]),t._v(" "),a("p",[t._v("整个sb应用程序只有一个配置文件.properties或.yml，以.properties为例重写默认配置，配置文件名字必须是application"),a("br"),t._v(" "),a("img",{attrs:{src:e(287),alt:"prop"}}),a("br"),t._v("\n重新启动，浏览器访问localhost:8088/api/hello"),a("br"),t._v(" "),a("img",{attrs:{src:e(288),alt:"hello"}})]),t._v(" "),a("h3",{attrs:{id:"打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打包","aria-hidden":"true"}},[t._v("#")]),t._v(" 打包")]),t._v(" "),a("p",[t._v("sb可以打包成war和jar,前后端分离的项目适合打成jar，若不分离则war较好")]),t._v(" "),a("ul",[a("li",[t._v("war方式"),a("br"),t._v("\n1.修改packaging"),a("br"),t._v(" "),a("code",[t._v("<packaging>war</packaging>")]),a("br"),t._v("\n2.添加build")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<build>\n  <finalName>test</finalName>\n  <resources>\n    <resource>\n      <directory>src/main/resources</directory>\n      <filtering>true</filtering>\n    </resource>\n  </resources>\n  <plugins>\n    <plugin>\n      <groupId>org.springframework.boot</groupId>\n      <artifactId>spring-boot-maven-plugin</artifactId>\n    </plugin>\n    <plugin>\n      <artifactId>maven-resources-plugin</artifactId>\n      <version>2.5</version>\n      <configuration><encoding>UTF-8</encoding></configuration>\n    </plugin>\n    <plugin>\n      <groupId>org.apache.maven.plugins</groupId>\n      <artifactId>maven-surefire-plugin</artifactId>\n      <version>2.18.1</version>\n      <configuration><skipTests>true</skipTests></configuration>\n    </plugin>\n  </plugins>\n</build>\n")])])]),a("p",[t._v("3.mvn package就会生成test.war包"),a("br"),t._v(" "),a("img",{attrs:{src:e(289),alt:"package1"}}),a("br"),t._v("\n把war包放到tomcat下启动"),a("br"),t._v(" "),a("img",{attrs:{src:e(290),alt:"error1"}}),a("br"),t._v("\ntest启动失败,因为sb内嵌了t8，与t7冲突"),a("br"),t._v("\n排除Springboot中的tomcat相关依赖，记得添加作用域为provided的servlet-api"),a("br"),t._v(" "),a("img",{attrs:{src:e(291),alt:"depex"}}),a("br"),t._v("\n修改app类，继承SpringBootServletInitializer，重写configure"),a("br"),t._v(" "),a("img",{attrs:{src:e(292),alt:"SpringBootServletInitializer"}}),a("br"),t._v("\n重新打包mvn clean package\n启动tomcat还是报错error creating bean with name 'defaultvalidator' defined in class path resource，查询资料发现是tomcat版本需要8以上，更换tomcat8后不在报错，浏览器正常访问"),a("br"),t._v(" "),a("img",{attrs:{src:e(293),alt:"repT8"}}),a("br"),t._v(" "),a("em",[t._v("注意：访问端口又成了默认8080，路径test而不是前面的api，配置外部tomcat后application.properties的配置失效")])]),t._v(" "),a("ul",[a("li",[t._v("jar方式"),a("br"),t._v("\n1.去掉外部tomcat配置"),a("br"),t._v(" "),a("img",{attrs:{src:e(294),alt:"ex_dis"}}),a("br"),t._v("\n2.修改packaging"),a("br"),t._v(" "),a("code",[t._v("<packaging>jar</packaging>")]),a("br"),t._v("\n3.添加build")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("<build>\n    <finalName>api</finalName>\n    <resources>\n      <resource>\n        <directory>src/main/resources</directory>\n        <filtering>true</filtering>\n      </resource>\n    </resources>\n    <plugins>\n      <plugin>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-maven-plugin</artifactId>\n        <configuration>\n          <fork>true</fork>\n          <mainClass>test.App</mainClass>\n        </configuration>\n        <executions>\n          <execution><goals><goal>repackage</goal></goals></execution>\n        </executions>\n      </plugin>\n      <plugin>\n        <artifactId>maven-resources-plugin</artifactId>\n        <version>2.5</version>\n        <configuration>\n          <encoding>UTF-8</encoding>\n          <useDefaultDelimiters>true</useDefaultDelimiters>\n        </configuration>\n      </plugin>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-surefire-plugin</artifactId>\n        <version>2.18.1</version>\n        <configuration><skipTests>true</skipTests></configuration>\n      </plugin>\n      <plugin>\n        <groupId>org.apache.maven.plugins</groupId>\n        <artifactId>maven-compiler-plugin</artifactId>\n        <version>2.3.2</version>\n        <configuration>\n          <source>1.8</source>\n          <target>1.8</target>\n        </configuration>\n      </plugin>\n    </plugins>\n  </build>\n")])])]),a("p",[t._v("4.mvn clean package"),a("br"),t._v("\njava -jar api.jar启动"),a("br"),t._v("\n访问localhost:8088/api/hello成功")]),t._v(" "),a("h2",{attrs:{id:"spring-boot-进阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-进阶","aria-hidden":"true"}},[t._v("#")]),t._v(" spring boot 进阶")]),t._v(" "),a("p",[t._v("读到这相信你已经发现sb的好处，代码简洁、结构清晰，前面是初步介绍sb，下面开始深入了解sb。")]),t._v(" "),a("h3",{attrs:{id:"properties-yml文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties-yml文件","aria-hidden":"true"}},[t._v("#")]),t._v(" properties/yml文件")]),t._v(" "),a("p",[t._v("下面以properties为例列出sb常用配置")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("配置项")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("举例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("server.port")]),t._v(" "),a("td",[t._v("服务端口")]),t._v(" "),a("td",[t._v("server.port=8088")])]),t._v(" "),a("tr",[a("td",[t._v("server.context-path")]),t._v(" "),a("td",[t._v("应用程序上下文")]),t._v(" "),a("td",[t._v("server.context-path=/api,则访问地址为：http://ip:port/api")])]),t._v(" "),a("tr",[a("td",[t._v("spring.jpa.database")]),t._v(" "),a("td",[t._v("数据库类型")]),t._v(" "),a("td",[t._v("spring.jpa.database=MYSQL  "),a("a",{attrs:{href:"#jpa"}},[t._v("JPA & Spring Data JPA")])])]),t._v(" "),a("tr",[a("td",[t._v("spring.jpa.properties.hibernate.dialect")]),t._v(" "),a("td",[t._v("hql方言")]),t._v(" "),a("td",[t._v("spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL5Dialect")])]),t._v(" "),a("tr",[a("td",[t._v("spring.jpa.showSql")]),t._v(" "),a("td",[t._v("是否打印sql语句")]),t._v(" "),a("td",[t._v("spring.jpa.showSql=true")])]),t._v(" "),a("tr",[a("td",[t._v("spring.datasource.url")]),t._v(" "),a("td",[t._v("数据库连接字符串")]),t._v(" "),a("td",[t._v("spring.datasource.url=jdbc:mysql://localhost:3306/database?useUnicode=true&characterEncoding=UTF-8&useSSL=true")])]),t._v(" "),a("tr",[a("td",[t._v("spring.datasource.username")]),t._v(" "),a("td",[t._v("数据库用户名")]),t._v(" "),a("td",[t._v("spring.datasource.username=root")])]),t._v(" "),a("tr",[a("td",[t._v("spring.datasource.password")]),t._v(" "),a("td",[t._v("数据库密码")]),t._v(" "),a("td",[t._v("spring.datasource.password=root")])]),t._v(" "),a("tr",[a("td",[t._v("spring.datasource.driverClassName")]),t._v(" "),a("td",[t._v("数据库驱动")]),t._v(" "),a("td",[t._v("spring.datasource.driverClassName=com.mysql.jdbc.Driver")])]),t._v(" "),a("tr",[a("td",[t._v("spring.http.multipart.maxFileSize")]),t._v(" "),a("td",[t._v("最大文件上传大小,-1为不限制")]),t._v(" "),a("td",[t._v("spring.http.multipart.maxFileSize=-1")])])])]),t._v(" "),a("h3",{attrs:{id:"多环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多环境配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 多环境配置")]),t._v(" "),a("p",[t._v("通常应用系统开发过程中经历开发、测试、生产三个阶段，不同阶段的环境配置往往不同，打包的时候再更改配置文件太不方便，于是我们可以采用多环境配置。"),a("br"),t._v("\n1.首先创建多环境配置文件，application-dev.properties(yml),application-test.properties,application-dep.properties,对应三个阶段，在各个文件中添加各自的环境配置信息。"),a("br"),t._v("\n2.更改默认配置文件,添加"),a("code",[t._v("spring.profiles.active=dev")]),t._v(",指定当前项目打包配置为dev，"),a("code",[t._v("spring.profiles.active=dep")]),t._v("则打包配置为dep。"),a("br"),t._v("\n3.运行："),a("code",[t._v("java -jar api.jar")]),a("br"),t._v(" "),a("img",{attrs:{src:e(295),alt:"multien"}})]),t._v(" "),a("h3",{attrs:{id:"注解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注解","aria-hidden":"true"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),a("p",[t._v("sb主要采用注解的方式，下面详细介绍项目中常用注解。")]),t._v(" "),a("ul",[a("li",[t._v("@SpringBootApplication"),a("br"),t._v("\n标识程序启动main方法，不加这个注解程序无法启动。SpringBootApplication类上有三个注解，@SpringBootConfiguration表示配置注解，@EnableAutoConfiguration表示自动配置，@ComponentScan表示扫描Bean的规则,@SpringBootApplication也可以使用这三个代替。")]),t._v(" "),a("li",[t._v("@Value"),a("br"),t._v("\n定义全局变量，相当于以往public static声明变量。可以把全局变量存储在配置文件中通过@Value取出"),a("br"),t._v("\napplication.properties中添加自定义变量"),a("code",[t._v("server.custompara=cpara")]),t._v("，如下代码则可以取出cpara")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@Value("${server.custompara}")\nString custompara;\n    \n@RequestMapping("getcustompara")\nString getCustomPara(){\n  \treturn custompara;\n}\n')])])]),a("p",[a("img",{attrs:{src:e(296),alt:"custompara"}})]),t._v(" "),a("ul",[a("li",[t._v("@Bean"),a("br"),t._v("\n定义一个Bean，主要用在@Configuration和@SpringBootConfiguration注解的类或@Component注解的类。"),a("br"),t._v("\n以淘宝工具接口参数配置为例，配置文件中toolappkey,toolsecret,toolurl如下图："),a("br"),t._v(" "),a("img",{attrs:{src:e(297),alt:"classano1"}}),a("br"),t._v("\n定义Taobaotool参数类")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("/**\n * @author JIAY\n * taobao tool\n */\npublic class Taobaotool {\n    private String toolappkey;\n    private String toolsecret;\n    private String toolurl;\n    \n    public void setToolappkey(String toolappkey){\n    \tthis.toolappkey = toolappkey;\n    }\n    \n    public void setToolsecret(String toolsecret){\n    \tthis.toolsecret = toolsecret;\n    }\n    \n    public void setToolurl(String toolurl){\n    \tthis.toolurl = toolurl;\n    }\n    \n    public String getToolappkey(){\n    \treturn toolappkey;\n    }\n    \n    public String getToolsecret(){\n    \treturn toolsecret;\n    }\n    \n    public String getToolurl(){\n    \treturn toolurl;\n    }\n}\n")])])]),a("p",[t._v("配置类加载参数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('@SpringBootConfiguration\npublic class ConfigurationAnimation {\n    \n\t@Value("${toolappkey}")\n\tprivate String toolappkey;\n\t@Value("${toolsecret}")\n\tprivate String toolsecret;\n\t@Value("${toolurl}")\n\tprivate String toolurl;\n\t\n\t@Bean\n\tpublic Taobaotool taobaotool(){\n\t\tTaobaotool tbt = new Taobaotool();\n\t\ttbt.setToolappkey(toolappkey);\n\t\ttbt.setToolsecret(toolsecret);\n\t\ttbt.setToolurl(toolurl);\n\t\treturn tbt;\n\t}\n}\n')])])]),a("p",[t._v("注入Taobaotool并调用")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//注入类\n@Autowired\nprivate Taobaotool taobaotool;\n   \n@RequestMapping("gettaobaotool")\nString getTaobaotool(){\n\treturn taobaotool.getToolappkey() + "," + taobaotool.getToolsecret() + "," + taobaotool.getToolurl();\n}\n')])])]),a("p",[t._v("验证结果"),a("br"),t._v(" "),a("img",{attrs:{src:e(298),alt:"classano2"}})]),t._v(" "),a("h3",{attrs:{id:"拦截器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拦截器","aria-hidden":"true"}},[t._v("#")]),t._v(" 拦截器")]),t._v(" "),a("p",[t._v("API统一拦截，安全校验"),a("br"),t._v("\n创建拦截器类：ApiInterceptor，并实现 HandlerInterceptor 接口：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public class ApiInterceptor implements HandlerInterceptor {\n\t//请求之前    \n\t@Override    \n\tpublic boolean preHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o) throws Exception {        \n\t    System.out.println("进入拦截器");  \n\t    String sessionId = httpServletRequest.getParameter("sessionId");\n\t\tif(sessionId == null || sessionId.equals("")){\n\t\t\tString root = "status:0,errmsg:nologin";\n\t\t\tPrintWriter out = httpServletResponse.getWriter();\n\t\t\tout.print(root);\n\t\t\treturn false;\n\t\t}else{\n\t\t\tif(sessionId.equals("1234567")){\n\t\t\t\t//放行\n\t\t\t\treturn true;\n\t\t\t}else{\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}  \n\t}\n\t//请求时    \n\t@Override    \n\tpublic void postHandle(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, ModelAndView modelAndView) throws Exception {    }    \n\t//请求完成    \n\t@Override    \n\tpublic void afterCompletion(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Object o, Exception e) throws Exception {    }\n}\n')])])]),a("p",[t._v("添加拦截器：@SpringBootConfigration注解WebConfig类，继承WebMvcConfigurationSupport，重写addInterceptors")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("@SpringBootConfiguration\npublic class WebConfig extends WebMvcConfigurationSupport {\n\t@Override\n\tprotected void addInterceptors(InterceptorRegistry registry) {        \n\t    super.addInterceptors(registry);        \n\t\tregistry.addInterceptor(new ApiInterceptor());    \n\t}\n}\n")])])]),a("p",[t._v("验证结果"),a("br"),t._v(" "),a("img",{attrs:{src:e(299),alt:"interceptor"}})]),t._v(" "),a("h3",{attrs:{id:"异常处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异常处理","aria-hidden":"true"}},[t._v("#")]),t._v(" 异常处理")]),t._v(" "),a("p",[t._v("未完，待续。。"),a("br"),t._v(" "),a("span",{attrs:{id:"jpa"}},[t._v("JPA & Spring Data JPA")]),a("br"),t._v("\nJPA是Java Persistence API的简称，中文名Java持久层API，是Sun官方提出的Java持久化规范，其设计目标主要是为了简化现有的持久化开发工作和整合ORM技术。JPA使用XML文件或注解（JDK 5.0或更高版本）来描述对象-关联表的映射关系，能够将运行期的实体对象持久化到数据库，它为Java开发人员提供了一种ORM工具来管理Java应用中的关系数据。 简单地说，JPA就是为POJO（Plain Ordinary Java Object）提供持久化的标准规范，即将Java的普通对象通过对象关系映射（Object-Relational Mapping，ORM）持久化到数据库中。由于JPA是在充分吸收了现有Hibernate，TopLink，JDO等ORM框架的基础上发展而来的，因而具有易于使用、伸缩性强等优点。\nSpring Data JPA 是 Spring 基于 Spring Data 框架、在JPA 规范的基础上开发的一个框架，使用 Spring Data JPA 可以极大地简化JPA 的写法，可以在几乎不用写实现的情况下实现对数据库的访问和操作，除了CRUD外，还包括分页和排序等一些常用的功能。")]),t._v(" "),a("foot"),t._v(" "),a("Vssue",{attrs:{title:"springcloud"}})],1)},[],!1,null,null,null);r.default=n.exports}}]);