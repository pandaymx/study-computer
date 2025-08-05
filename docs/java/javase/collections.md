# 集合（Collections）

## 简介

集合是 Java 提供的一组用于存储、操作和访问数据对象的类和接口。集合框架极大地简化了数据结构的使用和管理，是 Java 编程的重要基础。

## 集合框架结构

- **Collection 接口**：List、Set、Queue 的父接口。
- **Map 接口**：用于存储键值对。

常用集合类结构如下：

```
Collection
 ├── List
 │    ├── ArrayList
 │    ├── LinkedList
 │    └── Vector
 ├── Set
 │    ├── HashSet
 │    ├── LinkedHashSet
 │    └── TreeSet
 └── Queue
      ├── LinkedList
      └── PriorityQueue
Map
 ├── HashMap
 ├── LinkedHashMap
 └── TreeMap
```

## List

- 有序、可重复。
- 常用实现：ArrayList、LinkedList。

```java
List<String> list = new ArrayList<>();
list.add("A");
list.add("B");
System.out.println(list.get(0)); // 输出 A
```

## Set

- 无序、不可重复。
- 常用实现：HashSet、LinkedHashSet、TreeSet。

```java
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(2);
set.add(1); // 不会重复添加
System.out.println(set.size()); // 输出 2
```

## Map

- 键值对存储，键唯一。
- 常用实现：HashMap、LinkedHashMap、TreeMap。

```java
Map<String, Integer> map = new HashMap<>();
map.put("A", 1);
map.put("B", 2);
System.out.println(map.get("A")); // 输出 1
```

## 遍历集合

- for-each 循环
- 迭代器（Iterator）
- Java 8 Stream

```java
for (String s : list) {
    System.out.println(s);
}

for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

## 集合工具类

- `Collections`：提供排序、查找、同步等静态方法。
- `Arrays`：用于操作数组的工具类。

## 注意事项

- 不要在遍历集合时修改集合（避免 ConcurrentModificationException）。
- 选择合适的集合类型以提升性能和可读性。

## 总结

集合是 Java 编程中最常用的数据结构，掌握集合的使用和原理对于高效开发至关重要。
