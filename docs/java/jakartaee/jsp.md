# JSP (JavaServer Pages)

## Introduction

JSP (JavaServer Pages) is a technology under the Jakarta EE (formerly Java EE) specification for building dynamic web pages using Java. JSP allows embedding Java code directly into HTML, making it easy to generate dynamic content.

## Key Features

- Mixes HTML and Java code
- Compiled to Servlet by the server
- Supports tag libraries (JSTL, custom tags)
- Supports expression language (EL)

## Basic Syntax Example

```jsp
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head><title>Hello JSP</title></head>
<body>
    <h1>Hello, JSP!</h1>
    <p>Current time: <%= new java.util.Date() %></p>
</body>
</html>
```

## Life Cycle

1. Translation: JSP is translated to a Servlet
2. Compilation: Servlet is compiled
3. Initialization: `jspInit()`
4. Request handling: `_jspService()`
5. Destruction: `jspDestroy()`

## Common Use Cases

- Dynamic HTML generation
- Displaying data from backend
- Simple web applications

## Best Practices

- Minimize Java code in JSP, use JSTL and EL
- Use MVC pattern: JSP for view, Servlet for controller, JavaBean for model
- Avoid business logic in JSP

## References

- [Jakarta Server Pages Specification](https://jakarta.ee/specifications/pages/)
- [JSP Tutorial](https://tomcat.apache.org/tomcat-9.0-doc/jspapi/index.html)
