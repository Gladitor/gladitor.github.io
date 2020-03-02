(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{238:function(t,a,s){t.exports=s.p+"assets/img/sjlx.9a4ed3d4.png"},239:function(t,a,s){t.exports=s.p+"assets/img/zcd.a819188f.png"},240:function(t,a,s){t.exports=s.p+"assets/img/yycd.5f2d1892.png"},241:function(t,a,s){t.exports=s.p+"assets/img/yycd_effect.97244c51.png"},339:function(t,a,s){"use strict";s.r(a);var r=s(2),n=Object(r.a)({},function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"关于java中只有值传递的思考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于java中只有值传递的思考","aria-hidden":"true"}},[t._v("#")]),t._v(" 关于java中只有值传递的思考")]),t._v(" "),r("p",[t._v("java中只有值传递？很多时候面试会碰到这个类型的题目，这是个老生常谈的问题，但很多人会栽在上面，根本原因是对基础原理把握不够清晰。先看一个题目："),r("br"),t._v("\n1.下面这段代码中打印a是多少?")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('int a = 1;//1\nfunc(a);//2\nSystem.out.println("a: " + a);//4\n\npublic static void func(int t){\n    t = 5;//3\n}\n')])])]),r("p",[t._v("控制台打印显示a为1，相信大多数人是不会错的。再看下面这个题目："),r("br"),t._v("\n2.下面这段代码中打印str是多少?")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('String str = "hi";//1\nfunc_noEffect(str);//2\nSystem.out.println("str: " + str);//4\n\npublic static void func_noEffect(String str){\n    str = "jiay";//3\n}\n')])])]),r("p",[t._v("控制台打印显示str为hi，这时候答对的就不会是大多数了。很多开发做了几年的都会栽在这里，有人就会问String类型是引用类型怎会会打印hi呢，这就是知其然而不知其所以然。")]),t._v(" "),r("h2",{attrs:{id:"java基本数据类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java基本数据类型","aria-hidden":"true"}},[t._v("#")]),t._v(" java基本数据类型")]),t._v(" "),r("p",[t._v("java中基本数据类型包括内置类型即值类型、引用类型、常量，这个问题涉及的值类型和引用类型。一般程序员都知道值类型存储在栈上，引用类型存储在堆上，下面用张图描述一下它们的存储结构。\n"),r("img",{attrs:{src:s(238),alt:"sjlx"}}),r("br"),t._v("\n图中a是int值类型，数值1存储在栈上，str是String引用类型，实例对象hi存储在堆上。注意String类型有一个引用变量是存储在栈上的，引用变量中存储的是实例对象hi的地址。")]),t._v(" "),r("h2",{attrs:{id:"java方法传参"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java方法传参","aria-hidden":"true"}},[t._v("#")]),t._v(" java方法传参")]),t._v(" "),r("p",[t._v("基本类型是值传递，引用类型是引用传递。按字面意思理解是没有问题的。"),r("br"),t._v("\n值传递方法中传入的是值类型的副本，问题1中值传递解释：")]),t._v(" "),r("ul",[r("li",[t._v("1.定义变量a值为1。")]),t._v(" "),r("li",[t._v("2.调用函数func传入形参a的副本值1。")]),t._v(" "),r("li",[t._v("3.修改形参的值为5。")]),t._v(" "),r("li",[t._v("4.打印实参到控制台。这个过程中并没有更改实参的值。"),r("br"),t._v("\n图解："),r("br"),t._v(" "),r("img",{attrs:{src:s(239),alt:"zcd"}}),r("br"),t._v("\n引用传递方法中传入的是引用变量的副本，问题2中引用传递解释：")]),t._v(" "),r("li",[t._v("1.定义引用变量str指向对象实例hi。")]),t._v(" "),r("li",[t._v("2.调用函数func_noEffect传入形参引用变量str的副本。")]),t._v(" "),r("li",[t._v("3.形参(引用变量str的副本)指向String类型实例jiay。")]),t._v(" "),r("li",[t._v("4.打印实参到控制台。这个过程中并没有更改实参对象。"),r("br"),t._v("\n图解："),r("br"),t._v(" "),r("img",{attrs:{src:s(240),alt:"yycd"}}),r("br"),t._v("\n由上可知方法传参都是值类型的，因此从函数传参角度讲java中都是值传递。")])]),t._v(" "),r("h2",{attrs:{id:"java中的引用传递"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#java中的引用传递","aria-hidden":"true"}},[t._v("#")]),t._v(" java中的引用传递")]),t._v(" "),r("p",[t._v("先看一段代码:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('StringBuilder stringBuilder = new StringBuilder("hi");\nfunc_effect(stringBuilder);\nSystem.out.println("sb: " + stringBuilder);\n\npublic static void func_effect(StringBuilder sb){\n    sb.append(",jiay");\n}\n')])])]),r("p",[t._v("这段代码打印出来sb：hi,jiay。有人会问这里怎么跟上面问题2不一样的，难到不应该是sb：hi吗，呵呵···。"),r("br"),t._v("\n图解："),r("br"),t._v(" "),r("img",{attrs:{src:s(241),alt:"yycd_effect"}}),r("br"),t._v("\n实参与形参指向的是同一个对象，所以函数调用完，控制台中打印实参的实例内容变成了hi,jiay。对比问题2这里大家应该注意到了String貌似跟其它的引用类型变量不太一样，String类型=(赋值)时指向一个新实例。")]),t._v(" "),r("p",[t._v("现在再看文章标题就是另一番感受了，还是那就话，程序员应该知其然知其所以然。")]),t._v(" "),r("foot"),t._v(" "),r("Vssue",{attrs:{title:"passbyvalue"}})],1)},[],!1,null,null,null);a.default=n.exports}}]);