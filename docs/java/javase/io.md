# IO 流（Input/Output Streams）

## 简介

IO（输入/输出）流是 Java 用于处理数据读写的机制，广泛应用于文件操作、网络通信等场景。Java IO 主要分为字节流和字符流两大类。

## IO 流的分类

- **按数据单位分**：
  - 字节流（InputStream/OutputStream）：处理所有类型数据，常用于二进制文件。
  - 字符流（Reader/Writer）：专门处理文本数据。
- **按流的方向分**：
  - 输入流：读取数据
  - 输出流：写出数据

## 常用 IO 类

| 类名                | 说明           |
|---------------------|----------------|
| FileInputStream     | 读取文件（字节）|
| FileOutputStream    | 写文件（字节）  |
| FileReader          | 读取文件（字符）|
| FileWriter          | 写文件（字符）  |
| BufferedReader      | 缓冲字符输入流  |
| BufferedWriter      | 缓冲字符输出流  |
| BufferedInputStream | 缓冲字节输入流  |
| BufferedOutputStream| 缓冲字节输出流  |
| PrintWriter         | 打印字符流      |

## 文件读写示例

### 字节流

```java
FileInputStream fis = new FileInputStream("input.txt");
FileOutputStream fos = new FileOutputStream("output.txt");
int b;
while ((b = fis.read()) != -1) {
    fos.write(b);
}
fis.close();
fos.close();
```

### 字符流

```java
FileReader fr = new FileReader("input.txt");
FileWriter fw = new FileWriter("output.txt");
int c;
while ((c = fr.read()) != -1) {
    fw.write(c);
}
fr.close();
fw.close();
```

### 缓冲流

```java
BufferedReader br = new BufferedReader(new FileReader("input.txt"));
BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
String line;
while ((line = br.readLine()) != null) {
    bw.write(line);
    bw.newLine();
}
br.close();
bw.close();
```

## 对象流

- `ObjectInputStream` 和 `ObjectOutputStream` 用于对象的序列化和反序列化。

```java
ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream("obj.dat"));
oos.writeObject(new Person("Tom", 20));
oos.close();

ObjectInputStream ois = new ObjectInputStream(new FileInputStream("obj.dat"));
Person p = (Person) ois.readObject();
ois.close();
```

## NIO 简介

- Java NIO（New IO）提供了更高效的缓冲区、通道和选择器，适合高性能场景。

## 注意事项

- 使用 IO 流后要及时关闭，推荐使用 try-with-resources。
- 处理异常，避免资源泄漏。

## 总结

IO 流是 Java 基础，掌握常用流的用法和原理，有助于高效处理数据读写。
