# Filter

## Introduction

A Filter is a component in the Jakarta EE (formerly Java EE) specification that allows you to intercept and process requests and responses in a web application. Filters are commonly used for logging, authentication, authorization, and request/response modification.

## Key Features

- Intercepts HTTP requests and responses
- Can modify request and response objects
- Supports chaining multiple filters
- Configurable via web.xml or annotations

## Basic Example

```java
import jakarta.servlet.*;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;

public class LoggingFilter implements Filter {
    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        System.out.println("Request URI: " + req.getRequestURI());
        chain.doFilter(request, response);
    }
}
```

## Configuration

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

### Annotation

```java
import jakarta.servlet.annotation.WebFilter;

@WebFilter("/*")
public class LoggingFilter implements Filter { ... }
```

## Common Use Cases

- Logging and auditing
- Authentication and authorization
- Compression and encoding
- Request/response modification

## References

- [Jakarta Servlet Filter Specification](https://jakarta.ee/specifications/servlet/)
- [Filter Tutorial](https://tomcat.apache.org/tomcat-9.0-doc/servletapi/index.html)
