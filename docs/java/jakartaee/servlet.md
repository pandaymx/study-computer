# Servlet

## 简介

Servlet 是 Java EE（现 Jakarta EE）规范中用于处理 HTTP 请求和响应的服务器端组件。它是 Java Web 技术的核心，广泛用于动态网页、API、Web 应用等场景。

## 主要特性

- 运行于 Servlet 容器（如 Tomcat）
- 支持处理 HTTP 请求和响应
- 生命周期由容器管理（init、service、destroy）
- 可与 JSP、Filter、Listener 等协作

## 基本用法

### 1. 创建 Servlet 类

```java
import jakarta.servlet.*;
import jakarta.servlet.http.*;
import java.io.IOException;

public class HelloServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        resp.setContentType("text/html;charset=UTF-8");
        resp.getWriter().write("Hello, Servlet!");
    }
}
```

### 2. 配置 web.xml 或使用注解

```xml
<servlet>
    <servlet-name>hello</servlet-name>
    <servlet-class>HelloServlet</servlet-class>
</servlet>
<servlet-mapping>
    <servlet-name>hello</servlet-name>
    <url-pattern>/hello</url-pattern>
</servlet-mapping>
```

或使用注解：

```java
@WebServlet("/hello")
public class HelloServlet extends HttpServlet { ... }
```

## 生命周期

- `init()`：初始化
- `service()`：处理请求
- `destroy()`：销毁

## 常见应用

- 动态网页生成
- RESTful API
- 认证与拦截

## 参考链接

- [Jakarta Servlet 规范](https://jakarta.ee/specifications/servlet/)
- [Servlet 教程](https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html)
