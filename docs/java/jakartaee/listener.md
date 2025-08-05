# Listener

## Introduction

A Listener in Jakarta EE (formerly Java EE) is a component that allows you to monitor and respond to events in a web application, such as application startup/shutdown, session creation/destruction, and request lifecycle events.

## Key Features

- Listens for application, session, or request events
- Can be used for resource management, logging, statistics, etc.
- Configurable via web.xml or annotations

## Common Types

- ServletContextListener: Application lifecycle
- HttpSessionListener: Session lifecycle
- ServletRequestListener: Request lifecycle

## Basic Example

```java
import jakarta.servlet.ServletContextEvent;
import jakarta.servlet.ServletContextListener;

public class AppListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        System.out.println("Application started");
    }
    @Override
    public void contextDestroyed(ServletContextEvent sce) {
        System.out.println("Application stopped");
    }
}
```

## Configuration

### web.xml

```xml
<listener>
    <listener-class>AppListener</listener-class>
</listener>
```

### Annotation

```java
import jakarta.servlet.annotation.WebListener;

@WebListener
public class AppListener implements ServletContextListener { ... }
```

## Common Use Cases

- Resource initialization and cleanup
- Logging and monitoring
- Counting online users

## References

- [Jakarta Servlet Listener Specification](https://jakarta.ee/specifications/servlet/)
- [Listener Tutorial](https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html)
