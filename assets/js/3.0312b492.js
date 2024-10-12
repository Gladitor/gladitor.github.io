(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{327:function(r,t,s){r.exports=s.p+"assets/img/connect.f384b5c3.png"},328:function(r,t,s){r.exports=s.p+"assets/img/a_isolation_ru.4e99cb8e.png"},329:function(r,t,s){r.exports=s.p+"assets/img/a_startt_ru.860209c9.png"},330:function(r,t,s){r.exports=s.p+"assets/img/a_result_ru.b0848f43.png"},331:function(r,t,s){r.exports=s.p+"assets/img/rollback_ru.de72ce94.png"},332:function(r,t,s){r.exports=s.p+"assets/img/2_startt_rc.2c462940.png"},333:function(r,t,s){r.exports=s.p+"assets/img/2_result_rc.dc40442b.png"},334:function(r,t,s){r.exports=s.p+"assets/img/2_result2_rc.4644f35e.png"},335:function(r,t,s){r.exports=s.p+"assets/img/3_startt_rr.eb9d833c.png"},336:function(r,t,s){r.exports=s.p+"assets/img/3_result1_rr.e3297fa6.png"},337:function(r,t,s){r.exports=s.p+"assets/img/3_result2_rr.cf21f2e2.png"},338:function(r,t,s){r.exports=s.p+"assets/img/3_result3_rr.10da444c.png"},339:function(r,t,s){r.exports=s.p+"assets/img/3_result4_rr.2df4bd6f.png"},340:function(r,t,s){r.exports=s.p+"assets/img/3_result5_rr.a5207c53.png"},341:function(r,t,s){r.exports=s.p+"assets/img/3_result6_rr.4f912f48.png"},342:function(r,t,s){r.exports=s.p+"assets/img/4_result1_s.e869ad30.png"},343:function(r,t,s){r.exports=s.p+"assets/img/4_result2_s.9bd55f37.png"},344:function(r,t,s){r.exports=s.p+"assets/img/4_result3_s.708aa42a.png"},345:function(r,t,s){r.exports=s.p+"assets/img/4_result4_s.ba0e6966.png"},346:function(r,t,s){r.exports=s.p+"assets/img/4_result5_s.7844f106.png"},408:function(r,t,s){"use strict";s.r(t);var _=s(2),a=Object(_.a)({},function(){var r=this,t=r.$createElement,_=r._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[_("h1",{attrs:{id:"事务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事务","aria-hidden":"true"}},[r._v("#")]),r._v(" 事务")]),r._v(" "),_("h2",{attrs:{id:"场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#场景","aria-hidden":"true"}},[r._v("#")]),r._v(" 场景")]),r._v(" "),_("p",[r._v("想象一个电商分享APP中的用户注册过程，添加用户->为用户分配邀请码->为用户分配跟单标识。"),_("br"),r._v("\n添加用户、分配邀请码、分配跟单标识这三个数据库动作必须同时完成注册才能成功，只要有一个失败注册就是失败，而且可能会造成脏乱数据，因此需要使用事务，有一个失败就必须回滚保证数据库数据正确。")]),r._v(" "),_("h2",{attrs:{id:"定义"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定义","aria-hidden":"true"}},[r._v("#")]),r._v(" 定义")]),r._v(" "),_("p",[r._v("计算机中访问并可能更新数据库中各数据项的程序执行单元。")]),r._v(" "),_("h2",{attrs:{id:"属性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#属性","aria-hidden":"true"}},[r._v("#")]),r._v(" 属性")]),r._v(" "),_("p",[r._v("事务具有ACID四个属性。")]),r._v(" "),_("ul",[_("li",[r._v("A(atomicity)原子性"),_("br"),r._v("\n最小的程序执行单元。要么都做，要么不做。事务只有2种结果，所有的数据库操作全部完成并提交或发生错误撤销所有操作到事务开始时的状态。")]),r._v(" "),_("li",[r._v("C(consistency)一致性"),_("br"),r._v("\n使数据库从一个一致性状态变为另一个一致性状态，与原子性是密切相关的。")]),r._v(" "),_("li",[r._v("I(isolation)隔离性"),_("br"),r._v("\n一个事务的执行不能被其它事务干扰。即一个事务内部的操作和使用的数据对并发的其它事务是隔离的。")]),r._v(" "),_("li",[r._v("D(durability)持久性"),_("br"),r._v("\n一个事务一旦提交它对数据库的修改就是永久性的。")])]),r._v(" "),_("h2",{attrs:{id:"传播机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传播机制","aria-hidden":"true"}},[r._v("#")]),r._v(" 传播机制")]),r._v(" "),_("p",[r._v("以Spring事务传播机制为例，Spring在TransactionDefinition接口中定义了7个事务传播行为：")]),r._v(" "),_("ul",[_("li",[r._v("propagation_requierd"),_("br"),r._v("\n如果当前没有事务就新建一个事务，如果已经存在一个事务就加入这个事务中。这是最常用的方式。")]),r._v(" "),_("li",[r._v("propagation_supports"),_("br"),r._v("\n支持当前事务，如果没有当前事务就以非事务方法执行。")]),r._v(" "),_("li",[r._v("propagation_mandatory"),_("br"),r._v("\n使用当前事务，没有则抛出异常。")]),r._v(" "),_("li",[r._v("propagation_requierd_new"),_("br"),r._v("\n新建事务，如果当前存在事务则把当前事务挂起。")]),r._v(" "),_("li",[r._v("propagation_not_supported"),_("br"),r._v("\n以非事务方式执行，如果存在当前事务，就把当前事务挂起。")]),r._v(" "),_("li",[r._v("propagation_never"),_("br"),r._v("\n以非事务方式执行，如果当前事务存在则抛出异常。")]),r._v(" "),_("li",[r._v("propagation_nested"),_("br"),r._v("\n如果当前存在事务则在嵌套事务内执行，如果不存在则执行类似propagation_requierd的操作。")])]),r._v(" "),_("h2",{attrs:{id:"隔离级别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#隔离级别","aria-hidden":"true"}},[r._v("#")]),r._v(" 隔离级别")]),r._v(" "),_("p",[r._v("SQL标准定义了4种隔离级别，包括一些具体规则来限定事务内外的哪些改变是可见的哪些改变是不可见的。一般低隔离级别支持更高的并发，并拥有更低的系统开销。")]),r._v(" "),_("ul",[_("li",[r._v("(1)Read Uncommitted(读未提交-脏读)"),_("br"),r._v("\n字面理解就是读到了别人未提交的数据。A事务执行过程种读到了B事务修改但未提交的数据，产生脏读。这个级别很少实际应用，因为它的性能比其它级别好不了多少。")]),r._v(" "),_("li",[r._v("(2)Read Committed(读已提交-不可重复读)"),_("br"),r._v("\n大多数数据库的默认隔离级别，A事务执行过程种B事务更改了数据M，A读取M时是B更改后的。")]),r._v(" "),_("li",[r._v("(3)Repeatable Read(可重复读-幻读)"),_("br"),r._v("\n这是MYSQL的默认隔离级别，它确保同一事务的多个实例在并发读取数据时会看到同样的行。理论上会造成幻读，A事务在读取数据时B事务插入了新的行，A事务再读取数据时发现有新的幻影行。InnoDB和FaIcon通过MVCC(Multiversion concurrency control)机制解决了这个问题。")]),r._v(" "),_("li",[r._v("(4)Serializable(串行化)"),_("br"),r._v("\n这是最高的隔离级别，强制事务排序，使之不可能相互冲突。但可能会造成大量的超时现象和锁竞争。")])]),r._v(" "),_("h2",{attrs:{id:"mysql隔离级别测试"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mysql隔离级别测试","aria-hidden":"true"}},[r._v("#")]),r._v(" MySQL隔离级别测试")]),r._v(" "),_("ul",[_("li",[r._v("(1)、Read Uncommitted"),_("br"),r._v("\n首先开启2个命令行客户端连接本地的mysql服务。两个客户端此处命名左边为A，右边为B。"),_("br"),r._v(" "),_("img",{attrs:{src:s(327),alt:"connect"}}),_("br"),r._v("\n设置A的隔离级别为Read Uncommitted。"),_("br"),r._v(" "),_("img",{attrs:{src:s(328),alt:"a_isolation_ru"}}),_("br"),r._v("\n启动事务，查询User。"),_("br"),r._v(" "),_("img",{attrs:{src:s(329),alt:"a_startt_ru"}}),_("br"),r._v("\nB开启事务，更改jiay的age为10但不提交。A查询当前数据，数据发生改变。"),_("br"),r._v(" "),_("img",{attrs:{src:s(330),alt:"a_result_ru"}}),_("br"),r._v("\nB回滚事务，A查看当前数据，数据还原。"),_("br"),r._v(" "),_("img",{attrs:{src:s(331),alt:"rollback_ru"}}),_("br"),r._v("\n由此可以看出读未提交会造成脏读。")]),r._v(" "),_("li",[r._v("(2)、Read Committed"),_("br"),r._v("\n还是2个客户端，左边A，右边B。"),_("br"),r._v("\n设置A的隔离级别Read Committed，A、B分别开启事务，查看User数据。"),_("br"),r._v(" "),_("img",{attrs:{src:s(332),alt:"2_startt_rc"}}),_("br"),r._v("\nB更改jiay的age为10但不提交。A查询当前数据，数据没有发生改变。不会出现脏读。"),_("br"),r._v(" "),_("img",{attrs:{src:s(333),alt:"2_result_rc"}}),_("br"),r._v("\nB提交事务，A查询当前数据，数据发生改变。B事务提交的数据被A事务读到了，这就会出现不可重复读。"),_("br"),r._v(" "),_("img",{attrs:{src:s(334),alt:"2_result2_rc"}}),_("br"),r._v("\n由此可以看出读已提交解决了脏读问题，但还会有不可重复读的问题。")]),r._v(" "),_("li",[r._v("(3)、Repeatable Read"),_("br"),r._v("\n还是2个客户端，左边A，右边B。"),_("br"),r._v("\nA、B分别开启事务，查看User数据。"),_("br"),r._v(" "),_("img",{attrs:{src:s(335),alt:"3_startt_rr"}}),_("br"),r._v("\nB更改jiay的age为1但不提交。A查询当前数据，数据没有发生改变。不会出现脏读。"),_("br"),r._v(" "),_("img",{attrs:{src:s(336),alt:"3_result1_rr"}}),_("br"),r._v("\nB提交事务，A查询当前数据，数据没有发生改变。不会出现不可重复读。"),_("br"),r._v(" "),_("img",{attrs:{src:s(337),alt:"3_result2_rr"}}),_("br"),r._v("\nB插入一个用户jone，主键4ba03142-5d1b-11ea-b76b-e86a647ee7f5，A查询当前数据，数据依然没有发生改变。没有查询到最新数据出现幻读。"),_("br"),r._v(" "),_("img",{attrs:{src:s(338),alt:"3_result3_rr"}})]),r._v(" "),_("li",[r._v("幻读的影响"),_("br"),r._v("\nA、B查看User数据，B的结果是有jone的。"),_("br"),r._v(" "),_("img",{attrs:{src:s(339),alt:"3_result4_rr"}}),_("br"),r._v("\n此时若是A事务中要新增一个记录到User，主键也是4ba03142-5d1b-11ea-b76b-e86a647ee7f5就会出现问题，MySQL中很多情况主键是自增就会更容易抛出异常，主键冲突，怎么会这样，是幻觉吗？这就是幻读。"),_("br"),r._v(" "),_("img",{attrs:{src:s(340),alt:"3_result5_rr"}}),_("br"),r._v("\nA提交事务后查询User。正常代码中这次注册就失败了，这里为了明确状况，提交事务后再查询结果确实有一个jone用户主键冲突。"),_("br"),r._v(" "),_("img",{attrs:{src:s(341),alt:"3_result6_rr"}})]),r._v(" "),_("li",[r._v("(4)、Serializable"),_("br"),r._v("\n依然2个客户端，左边A，右边B。"),_("br"),r._v("\n设置A的隔离级别Serializable，A、B分别开启事务，查看User数据，B事务尝试更改jiay的age为30，B进入等待状态。"),_("br"),r._v(" "),_("img",{attrs:{src:s(342),alt:"4_result1_s"}}),_("br"),r._v("\n这是因为A事务未提交，B进入等待，等待超时后抛出异常。"),_("br"),r._v(" "),_("img",{attrs:{src:s(343),alt:"4_result2_s"}}),_("br"),r._v("\nA提交事务，B再次尝试更改jiay的age为30，执行成功。"),_("br"),r._v(" "),_("img",{attrs:{src:s(344),alt:"4_result3_s"}}),_("br"),r._v("\nA查询User数据，数据没有发生变化，这是可重复读机制保证的结果，这正符合MySQL的隔离级别设计。"),_("br"),r._v(" "),_("img",{attrs:{src:s(345),alt:"4_result4_s"}}),_("br"),r._v("\nB提交事务，A再查询，数据是更新后的最新数据。"),_("br"),r._v(" "),_("img",{attrs:{src:s(346),alt:"4_result5_s"}}),_("br"),r._v("\nserializable会锁定对应的数据表格，因而会有效率的问题。")])]),r._v(" "),_("foot"),r._v(" "),_("Vssue",{attrs:{title:"transaction"}})],1)},[],!1,null,null,null);t.default=a.exports}}]);