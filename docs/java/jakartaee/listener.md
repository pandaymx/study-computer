# 监听器（Listener）

## 简介

监听器是 Jakarta EE（原 Java EE）规范中的组件，用于监听 Web 应用中的各种事件，如应用启动/销毁、会话创建/销毁、请求生命周期等。

## 主要特性

- 监听应用、会话或请求级别事件
- 常用于资源管理、统计、日志等
- 可通过 web.xml 或注解配置

## 常见类型

- ServletContextListener：应用生命周期
- HttpSessionListener：会话生命周期
- ServletRequestListener：请求生命周期

## 基本用法示例

```java
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;

public class AppListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("应用启动");
    }
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("应用关闭");
    }
}
```

## 配置方式

### web.xml

```xml
<listener>
    <listener-class>AppListener</listener-class>
</listener>
```

### 注解

```java
import jakarta.servlet.annotation.WebListener;

@WebListener
public class AppListener implements ServletContextListener { ... }
```

## 常见应用

- 资源初始化与释放
- 日志与监控
- 在线用户统计

## 参考链接

- [Jakarta Servlet Listener 规范](https://jakarta.ee/specifications/servlet/)
- [Listener 教程](https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html)
