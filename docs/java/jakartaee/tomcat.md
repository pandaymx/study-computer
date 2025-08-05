# Tomcat

## 简介

Tomcat 是由 Apache 软件基金会开发和维护的开源 Java Web 服务器和 Servlet 容器。它实现了 Java Servlet、JSP、EL 和 WebSocket 等多项 Java EE 规范，是最常用的 Java Web 应用服务器之一。

## 主要特性

- 支持 Servlet 和 JSP 规范
- 支持 WebSocket
- 轻量级、易于部署和配置
- 社区活跃、文档丰富

## 典型应用场景

- Java Web 应用开发与部署
- RESTful API 服务
- 作为微服务网关

## 基本架构

- Connector：负责处理 HTTP/HTTPS 请求
- Engine/Host/Context：多级容器结构，支持多站点和多应用
- Servlet 容器：负责管理和执行 Servlet

## 安装与启动

1. 下载 Tomcat 官网发行包
2. 解压后进入 `bin` 目录
3. 运行 `startup.sh`（Linux/macOS）或 `startup.bat`（Windows）
4. 访问 `http://localhost:8080`

## 部署 Web 应用

- 将 WAR 包或应用目录放入 `webapps` 目录，Tomcat 会自动部署

## 常用配置

- `conf/server.xml`：主配置文件，端口、虚拟主机等
- `conf/web.xml`：全局 Servlet/JSP 配置
- `conf/context.xml`：应用级别配置

## 管理与监控

- 提供 Manager 和 Host Manager Web 应用进行部署和管理
- 支持 JMX、日志等监控方式

## 参考链接

- [Tomcat 官网](https://tomcat.apache.org/)
- [Tomcat 文档](https://tomcat.apache.org/tomcat-9.0-doc/)
