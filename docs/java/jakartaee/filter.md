# 过滤器（Filter）

## 简介

过滤器是 Jakarta EE（原 Java EE）规范中的组件，用于拦截和处理 Web 应用中的请求和响应。常用于日志记录、权限校验、请求修改等场景。

## 主要特性

- 拦截 HTTP 请求和响应
- 可修改请求和响应对象
- 支持多个过滤器链式调用
- 可通过 web.xml 或注解配置

## 基本用法示例

```java
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;

public class LoggingFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        System.out.println("请求 URI: " + req.getRequestURI());
        chain.doFilter(request, response);
    }
}
```

## 配置方式

### web.xml

```xml
<filter>
    <filter-name>loggingFilter</filter-name>
    <filter-class>LoggingFilter</filter-class>
</filter>
<filter-mapping>
    <filter-name>loggingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

### 注解

```java
import jakarta.servlet.annotation.WebFilter;

@WebFilter("/*")
public class LoggingFilter implements Filter { ... }
```

## 常见应用

- 日志记录与审计
- 登录认证与权限校验
- 压缩与编码
- 请求/响应内容修改

## 参考链接

- [Jakarta Servlet Filter 规范](https://jakarta.ee/specifications/servlet/)
- [Filter 教程](https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html)
