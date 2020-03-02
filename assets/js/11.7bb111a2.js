(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{311:function(e,a,n){e.exports=n.p+"assets/img/initproject.4e8d5c53.png"},312:function(e,a,n){e.exports=n.p+"assets/img/projectschema.c79f9102.png"},313:function(e,a,n){e.exports=n.p+"assets/img/createtable.f0d4f7a9.png"},314:function(e,a,n){e.exports=n.p+"assets/img/reales.f66bb879.png"},358:function(e,a,n){"use strict";n.r(a);var t=n(2),s=Object(t.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"liquibase实战"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liquibase实战","aria-hidden":"true"}},[e._v("#")]),e._v(" liquibase实战")]),e._v(" "),t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[e._v("#")]),e._v(" 简介")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.liquibase.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("liquibase"),t("OutboundLink")],1),e._v("是一个用于跟踪、管理和应用数据库变化的开源数据库工具，它将所有数据库的变化保存在xml文件内，方便版本控制，避免开发人员或实施人员手动数据库管理升级等造成的一系列问题。"),t("br"),e._v("\n使用过Microsoft EF6的同学会很清楚这种工具的好处（EF6用在.NET框架中），没用过当我没说过就可以了。")]),e._v(" "),t("h2",{attrs:{id:"初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[e._v("#")]),e._v(" 初始化项目")]),e._v(" "),t("p",[e._v("这里使用一个简单的web项目进行演示。"),t("br"),e._v(" "),t("img",{attrs:{src:n(311),alt:"initproject"}})]),e._v(" "),t("h2",{attrs:{id:"更改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更改配置","aria-hidden":"true"}},[e._v("#")]),e._v(" 更改配置")]),e._v(" "),t("ul",[t("li",[e._v("添加依赖")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\x3c!--    日志文件管理包    --\x3e\n        <dependency>\n            <groupId>org.codehaus.janino</groupId>\n            <artifactId>janino</artifactId>\n            <version>${janino.version}</version>\n        </dependency>\n\n        \x3c!--    JDBC    --\x3e\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-jdbc</artifactId>\n        </dependency>\n        <dependency>\n            <groupId>mysql</groupId>\n            <artifactId>mysql-connector-java</artifactId>\n            <scope>runtime</scope>\n        </dependency>\n\n        \x3c!--    Mybatisplus依赖    --\x3e\n        <dependency>\n            <groupId>com.baomidou</groupId>\n            <artifactId>mybatis-plus-boot-starter</artifactId>\n            <version>3.1.1</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.liquibase</groupId>\n            <artifactId>liquibase-core</artifactId>\n            <version>3.8.1</version>\n        </dependency>\n\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <optional>true</optional>\n        </dependency>\n\n        \x3c!-- json --\x3e\n        <dependency>\n            <groupId>com.fasterxml.jackson.core</groupId>\n            <artifactId>jackson-databind</artifactId>\n            <version>[2.9.10.1,)</version>\n        </dependency>\n")])])]),t("ul",[t("li",[e._v("添加liquibase配置"),t("br"),e._v("\ninit-table.xml数据库建表配置")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.1" encoding="UTF-8" standalone="no"?>\n<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog" xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext" xmlns:pro="http://www.liquibase.org/xml/ns/pro" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-3.8.xsd http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">\n    <changeSet author="JIAY (generated)" id="1574053603125-1">\n        <createTable tableName="user">\n            <column name="Id" type="VARCHAR(36)">\n                <constraints primaryKey="true"/>\n            </column>\n            <column name="Name" type="VARCHAR(50)"/>\n            <column name="Age" type="INT"/>\n        </createTable>\n    </changeSet>\n</databaseChangeLog>\n')])])]),t("p",[e._v("changelog-master.xml数据库重构入口配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.1" encoding="UTF-8" standalone="no"?>\n<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog"\n                   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n                   xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.5.xsd">\n\n    \x3c!--relativeToChangelogFile=true则指changelog文件目录是相对根changelog而不是classpath--\x3e\n    <include file="classpath:liquibase/init-table.xml" relativeToChangelogFile="false"/>\n\n</databaseChangeLog>\n')])])]),t("ul",[t("li",[e._v("添加配置文件")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('spring:\n  profiles:\n    active: dev\n  liquibase:\n    enabled: true\n    change-log: "classpath:/liquibase/changelog-master.xml"\nlogging:\n  level:\n    org:\n      springframework:\n        boot:\n          autoconfigure: ERROR\n')])])]),t("p",[e._v("完整项目结构图"),t("br"),e._v(" "),t("img",{attrs:{src:n(312),alt:"projectschema"}})]),e._v(" "),t("h2",{attrs:{id:"启动项目自动创建user表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动项目自动创建user表","aria-hidden":"true"}},[e._v("#")]),e._v(" 启动项目自动创建user表")]),e._v(" "),t("p",[t("img",{attrs:{src:n(313),alt:"createtable"}}),t("br"),e._v("\n数据库中成功创建了user表。另外两个表是数据库操作记录表。")]),e._v(" "),t("h2",{attrs:{id:"liquibase标签"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liquibase标签","aria-hidden":"true"}},[e._v("#")]),e._v(" liquibase标签")]),e._v(" "),t("ul",[t("li",[e._v("创建表")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<changeSet id="3" author="jiay"> \n <createTable tableName="user">\n    <column name="Id" type="VARCHAR(36)">\n        <constraints primaryKey="true"/>\n    </column>\n    <column name="Name" type="VARCHAR(50)"/>\n    <column name="Age" type="INT"/>\n </createTable> \n</changeSet>\n')])])]),t("ul",[t("li",[e._v("添加列")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<changeSet id="4" author="jiay"> \n <addColumn tableName="user"> \n   <column name="phonenumber" type="varchar(15)"/> \n </addColumn> \n</changeSet>\n')])])]),t("ul",[t("li",[e._v("删除列")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<changeSet id="5" author="jiay"> \n <dropColumn tableName="user" columnName="phonenumber"/> \n</changeSet>\n')])])]),t("ul",[t("li",[e._v("增加数据")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<changeSet author="jiay" id="6">\n    <insert tableName="user">\n        <column name="Id" value="dcc0bfd3-09ba-11ea-af01-00ff9adab040"/>\n        <column name="Name" value="jiay"/>\n        <column name="Age" valueNumeric="20"/>\n    </insert>\n</changeSet>\n')])])]),t("ul",[t("li",[e._v("引入sql脚本")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<changeSet id="7" author="jiay"> \n <sqlFile path="insert-data.sql"/> \n</changeSet>\n')])])]),t("p",[e._v("更多内容查看官方资料"),t("a",{attrs:{href:"https://www.liquibase.org/quickstart.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.liquibase.org/quickstart.html"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"项目中引入liquibase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目中引入liquibase","aria-hidden":"true"}},[e._v("#")]),e._v(" 项目中引入liquibase")]),e._v(" "),t("ul",[t("li",[e._v("liquibase备份"),t("br"),e._v("\n实际项目中大多数情况是数据库已经存在，需要做扩展升级。这时候可以手动把当前数据库进行liquibase备份，然后项目中引入。\n"),t("ul",[t("li",[e._v("下载liquibase解压到本地"),t("br"),e._v(" "),t("a",{attrs:{href:"https://download.liquibase.org/download/?frm=n",target:"_blank",rel:"noopener noreferrer"}},[e._v("下载地址"),t("OutboundLink")],1),e._v(",注意下图中是我已包含数据库驱动和生成的配置文件。"),t("br"),e._v(" "),t("img",{attrs:{src:n(314),alt:"reales"}})])]),e._v(" "),t("ul",[t("li",[e._v("添加数据库驱动生成备份配置"),t("br"),e._v("\n把mysql-connector-java-5.1.38-bin.jar拷贝到文件夹内，cmd进入当前文件夹，执行生成脚本。"),t("br"),e._v("\n数据库结构生成init-table.xml")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('liquibase --driver=com.mysql.jdbc.Driver --classpath=mysql-connector-java-5.1.38-bin.jar --changeLogFile=./init-table.xml --url="jdbc:mysql://localhost:3306/jiay" --username=root --password=jc1 generateChangeLog\n')])])]),t("p",[e._v("数据库数据生成init-data.xml")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('liquibase --driver=com.mysql.jdbc.Driver --classpath=mysql-connector-java-5.1.38-bin.jar --changeLogFile=./init-data.xml --url="jdbc:mysql://localhost:3306/jiay?zeroDateTimeBehavior=convertToNull&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai&autoReconnect=true" --username=root --password=jc1 --diffTypes=data generateChangeLog\n')])])]),t("p",[e._v("比较数据库差异生成changelog")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("liquibase \\\n--url=jdbc:mysql://localhost:3306/jiay \\\n--username=username \\\n--password=password \\\n--changeLogFile=changelog.xml \ndiffChangeLog \\\n--referenceUrl=jdbc:mysql://localhost:3306/jiay2 \\\n--referenceUsername=username \\\n--referencePassword=password\n")])])]),t("ul",[t("li",[e._v("引入项目"),t("br"),e._v("\ninit-table.xml和init-data.xml或changelog.xml拷贝到liquibase文件夹内，然后就可以在changelog-master.xml中选则是否包含配置进行迁移或升级。\n"),t("ul",[t("li",[e._v("新增列"),t("br"),e._v("\n新建upgrade-table-user.xml包含到changelog-master.xml中")])])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<?xml version="1.1" encoding="UTF-8" standalone="no"?>\n<databaseChangeLog xmlns="http://www.liquibase.org/xml/ns/dbchangelog" xmlns:ext="http://www.liquibase.org/xml/ns/dbchangelog-ext" xmlns:pro="http://www.liquibase.org/xml/ns/pro" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.liquibase.org/xml/ns/dbchangelog-ext http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-ext.xsd http://www.liquibase.org/xml/ns/pro http://www.liquibase.org/xml/ns/pro/liquibase-pro-3.8.xsd http://www.liquibase.org/xml/ns/dbchangelog http://www.liquibase.org/xml/ns/dbchangelog/dbchangelog-3.8.xsd">\n    <changeSet author="JIAY (generated)" id="1574125101032-1">\n        <addColumn tableName="user">\n            <column name="Tel" type="VARCHAR(15)"></column>\n        </addColumn>\n    </changeSet>\n</databaseChangeLog>\n')])])]),t("p",[e._v("运行代码自动更新了user表结构。")]),e._v(" "),t("h2",{attrs:{id:"示例源码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例源码","aria-hidden":"true"}},[e._v("#")]),e._v(" 示例源码")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/Gladitor/liquibasedemo",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/Gladitor/liquibasedemo"),t("OutboundLink")],1)]),e._v(" "),t("foot"),e._v(" "),t("Vssue",{attrs:{title:"liquibasedemo"}})],1)},[],!1,null,null,null);a.default=s.exports}}]);