# JDBC（Java Database Connectivity）

## 简介

JDBC 是 Java 提供的用于访问关系型数据库的标准 API。通过 JDBC，Java 程序可以与各种数据库（如 MySQL、Oracle、PostgreSQL 等）进行连接、查询和操作。

## JDBC 工作流程

1. 加载数据库驱动
2. 建立数据库连接
3. 创建 Statement 或 PreparedStatement
4. 执行 SQL 语句
5. 处理结果集（ResultSet）
6. 关闭资源

## 基本用法示例

```java
// 1. 加载驱动（部分新驱动可省略）
Class.forName("com.mysql.cj.jdbc.Driver");
// 2. 建立连接
Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/test", "user", "password");
// 3. 创建 Statement
Statement stmt = conn.createStatement();
// 4. 执行查询
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
while (rs.next()) {
    System.out.println(rs.getString("name"));
}
// 5. 关闭资源
rs.close();
stmt.close();
conn.close();
```

## PreparedStatement 示例

```java
String sql = "INSERT INTO users(name, age) VALUES (?, ?)";
PreparedStatement ps = conn.prepareStatement(sql);
ps.setString(1, "Tom");
ps.setInt(2, 20);
ps.executeUpdate();
ps.close();
```

## 事务处理

```java
conn.setAutoCommit(false);
try {
    // 执行多条 SQL
    conn.commit();
} catch (Exception e) {
    conn.rollback();
}
```

## 常见问题

- 记得关闭所有数据库资源，避免资源泄漏。
- 推荐使用连接池（如 HikariCP、Druid）提升性能。

## 总结

JDBC 是 Java 访问数据库的基础，掌握其用法有助于开发高效、可靠的数据驱动应用。
