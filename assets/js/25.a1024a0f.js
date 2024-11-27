(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{314:function(e,n,t){e.exports=t.p+"assets/img/result.e1cafa39.png"},404:function(e,n,t){"use strict";t.r(n);var o=t(2),a=Object(o.a)({},function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"jackson基本用法"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jackson基本用法","aria-hidden":"true"}},[e._v("#")]),e._v(" Jackson基本用法")]),e._v(" "),o("p",[o("strong",[e._v("Talk is cheap. Show me the code.")]),o("br"),e._v("\n依赖")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-core</artifactId>\n    <version>2.10.2</version>\n</dependency>\n<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-databind</artifactId>\n    <version>2.10.2</version>\n</dependency>\n<dependency>\n    <groupId>com.fasterxml.jackson.core</groupId>\n    <artifactId>jackson-annotations</artifactId>\n    <version>2.10.2</version>\n</dependency>\n")])])]),o("p",[e._v("实例")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('public static void main(String[] args){\n        ObjectMapper objectMapper = new ObjectMapper();\n        //序列化\n        Person p = new Person();\n        p.setName("jiay");\n        p.setAge(50);\n        p.setPosition("山东济南");\n        try {\n            String pJson = objectMapper.writeValueAsString(p);\n            System.out.println("序列化结果:" + pJson);\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n        //反序列化\n        String personJson = "{\\"name\\":\\"jiay\\",\\"age\\":\\"50\\",\\"position\\":\\"xxx\\"}";\n        try {\n            Person person = objectMapper.readValue(personJson,Person.class);\n            System.out.println("反序列化结果:" + person.getName() + ":" + person.getAge());\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n        //字符串转JsonNode\n        try {\n            JsonNode jsonNode = objectMapper.readTree(personJson);\n            System.out.println("string2JsonNode结果: name:" + jsonNode.get("name").textValue());\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n        //object转JsonNode\n        JsonNode jsonNode2 = objectMapper.valueToTree(p);\n        System.out.println("object2JsonNode结果：name:" + jsonNode2.get("name").textValue());\n        //JsonNode转object\n        try {\n            Person person = objectMapper.treeToValue(jsonNode2,Person.class);\n            System.out.println("JsonNode2object结果：name:" + person.getName());\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n        //map转JsonNode\n        Map<String,String> map = new HashMap<>();\n        map.put("name","jiay");\n        map.put("age","50");\n        JsonNode mapNode = objectMapper.valueToTree(map);\n        System.out.println("map2JsonNode结果：name:" + mapNode.get("name").textValue());\n        //ArrayList转ArrayNode\n        List<String> friendList = new ArrayList<>();\n        friendList.add("jack");\n        friendList.add("lucy");\n        ArrayNode arrayNode = objectMapper.valueToTree(friendList);\n        //ObjectNode\n        ObjectNode rootNode = objectMapper.createObjectNode();\n        rootNode.put("name",p.getName());\n        rootNode.set("friends",arrayNode);\n        ArrayList<ObjectNode> hobby = new ArrayList<ObjectNode>();\n        ObjectNode bs = objectMapper.createObjectNode();\n        bs.put("name","basketball");\n        hobby.add(bs);\n        ObjectNode bs2 = objectMapper.createObjectNode();\n        bs2.put("name","program");\n        hobby.add(bs2);\n        rootNode.putArray("hobby").addAll(hobby);\n        try {\n            System.out.println("root:" + objectMapper.writeValueAsString(rootNode));\n        } catch (JsonProcessingException e) {\n            e.printStackTrace();\n        }\n    }\n    @Getter\n    @Setter\n    static class Person{\n        private String name;\n        private int age;\n        private String position;\n\n        public Person(){}\n    }\n')])])]),o("p",[e._v("结果"),o("br"),e._v(" "),o("img",{attrs:{src:t(314),alt:"jackson"}})]),e._v(" "),o("foot"),e._v(" "),o("Vssue",{attrs:{title:"jacksonbase"}})],1)},[],!1,null,null,null);n.default=a.exports}}]);