(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{413:function(t,n,e){"use strict";e.r(n);var a=e(2),s=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"错误：编码gbk的不可映射字符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#错误：编码gbk的不可映射字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 错误：编码GBK的不可映射字符")]),t._v(" "),e("p",[t._v("基于cxf实现动态调用webservice，打包后运行时cmd中一堆 "),e("strong",[t._v("错误：编码GBK的不可映射字符")]),t._v("，编码不一致问题，重写DynamicClientFactory的compileJavaSrc方法指定编码方式即可。下面附上完整源码。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('public class JaxWsDynamicClientFactory extends DynamicClientFactory {\n    protected JaxWsDynamicClientFactory(Bus bus) {\n        super(bus);\n    }\n\n    @Override\n    protected EndpointImplFactory getEndpointImplFactory() {\n        return JaxWsEndpointImplFactory.getSingleton();\n    }\n\n    protected boolean allowWrapperOps() {\n        return true;\n    }\n\n    /**\n     * Create a new instance using a specific <tt>Bus</tt>.\n     *\n     * @param b the <tt>Bus</tt> to use in subsequent operations with the\n     *            instance\n     * @return the new instance\n     */\n    public static JaxWsDynamicClientFactory newInstance(Bus b) {\n        return new JaxWsDynamicClientFactory(b);\n    }\n\n    /**\n     * Create a new instance using a default <tt>Bus</tt>.\n     *\n     * @return the new instance\n     * @see CXFBusFactory#getDefaultBus()\n     */\n    public static JaxWsDynamicClientFactory newInstance() {\n        Bus bus = CXFBusFactory.getThreadDefaultBus();\n        return new JaxWsDynamicClientFactory(bus);\n    }\n\n    /**\n     * 覆写父类的该方法<br/>\n     * 注：解决此（错误：编码GBK的不可映射字符）问题\n     *\n     * @return\n     */\n    @Override\n    protected boolean compileJavaSrc(String classPath, List<File> srcList, String dest) {\n        org.apache.cxf.common.util.Compiler javaCompiler\n                = new org.apache.cxf.common.util.Compiler();\n\n        // 设置编译编码格式（此处为新增代码）\n        javaCompiler.setEncoding("UTF-8");\n\n        javaCompiler.setClassPath(classPath);\n        javaCompiler.setOutputDir(dest);\n        javaCompiler.setTarget("1.8");\n\n        return javaCompiler.compileFiles(srcList);\n    }\n}\n')])])]),e("h3",{staticStyle:{"text-align":"right"}},[t._v("-- Jiay 2019/11/12 18:18")]),t._v(" "),e("foot"),t._v(" "),e("Vssue",{attrs:{title:"cxfIssue"}})],1)},[],!1,null,null,null);n.default=s.exports}}]);