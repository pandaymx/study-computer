# 网络编程（Network Programming）

## 简介

网络编程是指通过程序实现不同计算机之间的数据通信。Java 提供了丰富的网络编程 API，支持 TCP、UDP、HTTP 等多种协议。

## 基本概念

- **IP 地址**：唯一标识网络中的一台主机。
- **端口号**：标识主机上的具体进程。
- **协议**：通信规则，常见有 TCP 和 UDP。

## Java 网络编程核心类

- `InetAddress`：表示 IP 地址。
- `Socket`：实现 TCP 客户端。
- `ServerSocket`：实现 TCP 服务器端。
- `DatagramSocket`、`DatagramPacket`：实现 UDP 通信。

## TCP 通信示例

### TCP 服务器端

```java
ServerSocket serverSocket = new ServerSocket(8888);
Socket socket = serverSocket.accept();
InputStream in = socket.getInputStream();
byte[] buf = new byte[1024];
int len = in.read(buf);
System.out.println(new String(buf, 0, len));
socket.close();
serverSocket.close();
```

### TCP 客户端

```java
Socket socket = new Socket("localhost", 8888);
OutputStream out = socket.getOutputStream();
out.write("Hello Server".getBytes());
out.close();
socket.close();
```

## UDP 通信示例

### UDP 发送端

```java
DatagramSocket ds = new DatagramSocket();
byte[] data = "Hello UDP".getBytes();
DatagramPacket dp = new DatagramPacket(data, data.length, InetAddress.getByName("localhost"), 9999);
ds.send(dp);
ds.close();
```

### UDP 接收端

```java
DatagramSocket ds = new DatagramSocket(9999);
byte[] buf = new byte[1024];
DatagramPacket dp = new DatagramPacket(buf, buf.length);
ds.receive(dp);
System.out.println(new String(dp.getData(), 0, dp.getLength()));
ds.close();
```

## URL 与 HTTP 通信

- `URL` 类可用于访问网络资源。
- Java 11+ 推荐使用 `HttpClient` 进行 HTTP 通信。

```java
// Java 11 HttpClient 示例
HttpClient client = HttpClient.newHttpClient();
HttpRequest request = HttpRequest.newBuilder()
    .uri(URI.create("https://www.example.com"))
    .build();
HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
System.out.println(response.body());
```

## 注意事项

- 网络编程需处理异常和资源释放。
- 建议使用多线程提升并发性能。

## 总结

网络编程是 Java 应用开发的重要组成部分，掌握 TCP、UDP、HTTP 等协议的基本用法，有助于开发高效的网络应用。
