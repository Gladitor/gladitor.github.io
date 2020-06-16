(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{343:function(e,n,t){e.exports=t.p+"assets/img/maven_ganerated.c3bd1308.png"},404:function(e,n,t){"use strict";t.r(n);var r=t(2),a=Object(r.a)({},function(){var e=this,n=e.$createElement,r=e._self._c||n;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"grpc实战总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grpc实战总结","aria-hidden":"true"}},[e._v("#")]),e._v(" gRPC实战总结")]),e._v(" "),r("p",[e._v("最近工作中在java项目中使用到gRPC，为防遗忘特在此留痕。"),r("br"),e._v("\n关于gRPC是什么，从何而来，什么使用场景这里就不再赘述，相信能看到这篇文章的朋友既是对gRPC有相关了解了，下面直接进入主题。")]),e._v(" "),r("h2",{attrs:{id:"添加依赖"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#添加依赖","aria-hidden":"true"}},[e._v("#")]),e._v(" 添加依赖")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("<properties>\n\t<grpc.version>1.12.0</grpc.version>\n\t<protoc.version>3.5.1-1</protoc.version>\n</properties>\n<dependencies>\n    <dependency>\n\t\t<groupId>io.grpc</groupId>\n\t\t<artifactId>grpc-netty</artifactId>\n\t\t<version>${grpc.version}</version>\n\t</dependency>\n\t<dependency>\n\t\t<groupId>io.grpc</groupId>\n\t\t<artifactId>grpc-protobuf</artifactId>\n\t\t<version>${grpc.version}</version>\n\t</dependency>\n\t<dependency>\n\t\t<groupId>io.grpc</groupId>\n\t\t<artifactId>grpc-stub</artifactId>\n\t\t<version>${grpc.version}</version>\n\t</dependency>\n</dependencies>\n<build>\n\t<extensions>\n\t\t<extension>\n\t\t\t<groupId>kr.motd.maven</groupId>\n\t\t\t<artifactId>os-maven-plugin</artifactId>\n\t\t\t<version>1.5.0.Final</version>\n\t\t</extension>\n\t</extensions>\n\t<plugins>\n        <plugin>\n\t\t\t<groupId>org.xolstice.maven.plugins</groupId>\n\t\t\t<artifactId>protobuf-maven-plugin</artifactId>\n\t\t\t<version>0.5.1</version>\n\t\t\t<configuration>\n\t\t\t\t<protocArtifact>com.google.protobuf:protoc:${protoc.version}:exe:${os.detected.classifier}\n\t\t\t\t</protocArtifact>\n\t\t\t\t<pluginId>grpc-java</pluginId>\n\t\t\t\t<pluginArtifact>io.grpc:protoc-gen-grpc-java:${grpc.version}:exe:${os.detected.classifier}\n\t\t\t\t</pluginArtifact>\n\t\t\t</configuration>\n\t\t\t<executions>\n\t\t\t\t<execution>\n\t\t\t\t\t<goals>\n\t\t\t\t\t\t<goal>compile</goal>\n\t\t\t\t\t\t<goal>compile-custom</goal>\n\t\t\t\t\t</goals>\n\t\t\t\t</execution>\n\t\t\t</executions>\n\t\t</plugin>\n\t</plugins>\n</build>\n")])])]),r("h2",{attrs:{id:"创建描述文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#创建描述文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 创建描述文件")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('syntax = "proto3";\n\noption java_multiple_files = true;\noption java_package = "com.**.**.**.**.hydrologicgrpcsvr";\noption java_outer_classname = "HydrologicProto";\noption objc_class_prefix = "HGS";\n\npackage hydrologicgrpcsvr;\n\n//定义服务\nservice HydrologicService {\n    //服务中的方法，根据DownwardOrder类型的参数获取UpwardRespond类型的结果\n    //获取时钟\n    rpc getSZ51H (DownwardOrder51H) returns (UpwardRespond51H) {\n    }\n    ...\n    ...\n    ...\n    //此处省略N个方法\n\n    //定义51H下行命令消息类型\n    message DownwardOrder51H {\n        string devid = 1;\n        string centeraddr = 2;\n        string flownum = 3;\n        string pwd = 4;\n        string afn = 5;\n    }\n\n    //定义51H上行响应消息类型\n    message UpwardRespond51H {\n        string devid = 1;\n        string centeraddr = 2;\n        string flownum = 3;\n        string pwd = 4;\n        string afn = 5;\n        string sendtime = 6;\n        bool issuccess = 7;\n        string returnmsg = 8 ;\n    }\n    ...\n    ...\n    ...\n    //此处省略N个对象\n}\n')])])]),r("h2",{attrs:{id:"maven生成代码并更新目录"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#maven生成代码并更新目录","aria-hidden":"true"}},[e._v("#")]),e._v(" maven生成代码并更新目录")]),e._v(" "),r("p",[r("img",{attrs:{src:t(343),alt:"maven_ganerated"}})]),e._v(" "),r("h2",{attrs:{id:"实现服务类"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#实现服务类","aria-hidden":"true"}},[e._v("#")]),e._v(" 实现服务类")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public class HydrologicServiceImplBaseImpl extends HydrologicServiceGrpc.HydrologicServiceImplBase {\n\n    private static Logger logger = LoggerFactory.getLogger(HydrologicServiceImplBaseImpl.class);\n\n    @Override\n    public void getSZ51H(DownwardOrder51H request, StreamObserver<UpwardRespond51H> responseObserver) {\n        String devid = request.getDevid();\n        GrpcCache.responseObservercache_51H.put(devid, responseObserver);\n        HydrBaseBean hydrBaseBean = new HydrBaseBean();\n        hydrBaseBean.setYczdz(devid);\n        hydrBaseBean.setZxzdz("01");\n        hydrBaseBean.setLsh("0001");\n        hydrBaseBean.setPwd("1234");\n        hydrBaseBean.setGnm("51");\n        hydrBaseBean.setEncodeType(Global.ControlCharacters.ENQ.getcch());\n        HandlerManager hm = SpringUtil.getBean(HandlerManager.class);\n        IHandler handler = hm.getHandler(Integer.parseInt(hydrBaseBean.getGnm(), 16));\n        //根据encodeType进行组包\n        String reshex = handler.encode(hydrBaseBean);\n        String issuccess = new ProtocalAdapterImpl().send2dev(reshex, devid);\n        if (!issuccess.equals("true")) {\n            //下发失败立即返回\n            //只有私有构造方法，所以只能通过builder来构造\n            UpwardRespond51H upwardRespond51H = UpwardRespond51H.newBuilder()\n                    .setDevid(devid)\n                    .setAfn("51")\n                    .setIssuccess(false)\n                    .setReturnmsg(issuccess)\n                    .build();\n            //用于返回结果\n            responseObserver.onNext(upwardRespond51H);\n            //用于告诉客户端调用已结束\n            responseObserver.onCompleted();\n            GrpcCache.responseObservercache_51H.invalidate(devid);\n        }\n    }\n}    \n')])])]),r("h2",{attrs:{id:"服务器实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#服务器实现","aria-hidden":"true"}},[e._v("#")]),e._v(" 服务器实现")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public class HydrologicGrpcServer {\n    private Logger logger = Logger.getLogger(HydrologicGrpcServer.class.getName());\n    public static final int DEFAULT_PORT = 3135;\n\n    private int port;//服务端口号\n\n    private Server server;\n\n    public HydrologicGrpcServer(int port) {\n        this(port, ServerBuilder.forPort(port));\n    }\n\n    public HydrologicGrpcServer(int port, ServerBuilder<?> serverBuilder) {\n        this.port = port;\n\n        //构造服务器，添加我们实际的服务\n        server = serverBuilder.addService(new HydrologicServiceImplBaseImpl()).build();\n    }\n\n    public void start() throws IOException {\n        server.start();\n        logger.info("gRPC server has started, listening on " + port);\n        Thread gcacherefresh = new Thread(new Runnable() {\n            @Override\n            public void run() {\n                while (true) {\n                    try {\n                        Thread.sleep(3000);\n                        GrpcCache.responseObservercache_51H.cleanUp();\n                    } catch (InterruptedException e) {\n                        e.printStackTrace();\n                    }\n                }\n            }\n        });\n        gcacherefresh.start();\n        Runtime.getRuntime().addShutdownHook(new Thread() {\n            @Override\n            public void run() {\n\n                HydrologicGrpcServer.this.stop();\n\n            }\n        });\n    }\n\n    public void stop() {\n\n        if (server != null)\n            server.shutdown();\n\n    }\n\n    //阻塞到应用停止\n    public void blockUntilShutdown() throws InterruptedException {\n        if (server != null) {\n            server.awaitTermination();\n        }\n    }\n}\n')])])]),r("h2",{attrs:{id:"客户端实现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#客户端实现","aria-hidden":"true"}},[e._v("#")]),e._v(" 客户端实现")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('public class HydrologicGrpcClient {\n    private Logger logger = Logger.getLogger(HydrologicGrpcClient.class.getName());\n    private static final String DEFAULT_HOST = "localhost";\n\n    public static final int DEFAULT_PORT = 3135;\n\n    private ManagedChannel managedChannel;\n\n    //服务存根，用于客户端本地调用\n    private HydrologicServiceGrpc.HydrologicServiceBlockingStub simpleServiceBlockingStub;\n\n    public HydrologicGrpcClient(String host, int port){\n        this(ManagedChannelBuilder.forAddress(host,port).usePlaintext(true).build());\n    }\n\n    public HydrologicGrpcClient(ManagedChannel managedChannel) {\n        this.managedChannel = managedChannel;\n        this.simpleServiceBlockingStub = HydrologicServiceGrpc.newBlockingStub(managedChannel);\n    }\n\n    public void shutdown() throws InterruptedException {\n        managedChannel.shutdown().awaitTermination(5, TimeUnit.SECONDS);\n    }\n\n    //获取终端时钟\n    public UpwardRespond51H getDevSZ51H(String devId){\n\n        DownwardOrder51H downwardOrder = DownwardOrder51H.newBuilder()\n                .setDevid(devId)\n                .setAfn("51").build();\n\n        UpwardRespond51H upwardRespond;\n        try {\n            upwardRespond = simpleServiceBlockingStub.getSZ51H(downwardOrder);\n            if(upwardRespond.getIssuccess()){\n                logger.log(Level.WARNING, devId+": 51下发请求成功");\n            }else {\n                logger.log(Level.WARNING, devId+": 51下发请求失败");\n            }\n        } catch (StatusRuntimeException e) {\n            logger.log(Level.WARNING, "RPC failed: {0}", e.getStatus());\n            return null;\n        }\n\n        return upwardRespond;\n    }\n}    \n')])])]),r("h2",{attrs:{id:"完结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#完结","aria-hidden":"true"}},[e._v("#")]),e._v(" 完结")]),e._v(" "),r("p",[e._v("到此一个完整的gRPC应用示例就完成了，朋友们动起手来吧。。")]),e._v(" "),r("h3",{staticStyle:{"text-align":"right"}},[e._v("-- Jiay 2019/7/15 00:23")]),e._v(" "),r("foot"),e._v(" "),r("Vssue",{attrs:{title:"gRPC"}})],1)},[],!1,null,null,null);n.default=a.exports}}]);