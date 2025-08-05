# JSP（JavaServer Pages）

## 简介

JSP（JavaServer Pages）是 Jakarta EE（原 Java EE）规范下用于构建动态网页的技术。JSP 允许在 HTML 页面中嵌入 Java 代码，适合动态内容的生成。

## 主要特性

- 支持 HTML 与 Java 代码混写
- 由服务器将 JSP 编译为 Servlet
- 支持标签库（JSTL、自定义标签）
- 支持表达式语言（EL）

## 基本语法示例

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head><title>Hello JSP</title></head>
<body>
    <h1>Hello, JSP!</h1>
    <p>当前时间：<%= new java.util.Date() %></p>
</body>
</html>
```

## 生命周期

1. 翻译：JSP 被翻译为 Servlet
2. 编译：Servlet 被编译
3. 初始化：`jspInit()`
4. 请求处理：`_jspService()`
5. 销毁：`jspDestroy()`

## 常见应用

- 动态 HTML 页面生成
- 展示后端数据
- 简单 Web 应用开发

## 最佳实践

- 尽量减少 JSP 中的 Java 代码，推荐使用 JSTL 和 EL
- 遵循 MVC 模式：JSP 负责视图，Servlet 负责控制，JavaBean 负责模型
- 避免在 JSP 中编写业务逻辑

## 参考链接

- [Jakarta Server Pages 规范](https://jakarta.ee/specifications/pages/)
- [JSP 教程](https://tomcat.apache.org/tomcat-9.0-doc/jspapi/index.html)
