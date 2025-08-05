# 泛型

## 简介

### 什么是泛型

泛型是 Java 5 引入的一项重要特性，用于在类、接口和方法中支持类型参数化。通过泛型，开发者可以编写更具通用性和类型安全的代码，避免类型转换带来的运行时错误。

### 为什么使用泛型

Java 过去的集合框架通常使用 `Object` 类型，这导致在运行时需要进行类型转换，容易引发 `ClassCastException`。例如用户需要一个 `Integer` 类型的列表，但如果不使用泛型，可能会将 `String` 类型的对象添加到列表中，编译中不会报错，运行时才能发现。

从集合中获取元素时，开发者需要手动进行类型转换，这增加了出错的风险。使用泛型可以在编译时确保类型安全，避免这些问题。



## 泛型的基本用法

### 泛型类

```java
public class Box<T> {
    private T value;
    public void setValue(T value) {
        this.value = value;
    }
    public T getValue() {
        return value;
    }
}

Box<Integer> intBox = new Box<>();
intBox.setValue(123);
System.out.println(intBox.getValue()); // 输出 123
```

### 泛型方法

```java
public class GenericMethod {
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.println(element);
        }
    }
}

String[] strArray = {"A", "B", "C"};
GenericMethod.printArray(strArray);
```

### 泛型接口

```java
public interface Pair<K, V> {
    K getKey();
    V getValue();
}

public class OrderedPair<K, V> implements Pair<K, V> {
    private K key;
    private V value;
    public OrderedPair(K key, V value) {
        this.key = key;
        this.value = value;
    }
    public K getKey() { return key; }
    public V getValue() { return value; }
}

Pair<String, Integer> pair = new OrderedPair<>("age", 18);
System.out.println(pair.getKey() + ": " + pair.getValue());
```

## 通配符

- `?` 表示未知类型。
- `? extends T` 表示 T 或 T 的子类型。
- `? super T` 表示 T 或 T 的父类型。

```java
public void printList(List<?> list) {
    for (Object obj : list) {
        System.out.println(obj);
    }
}
```

## 类型擦除

Java 泛型在编译后会进行类型擦除，泛型信息不会保留在字节码中。

## 注意事项

- 不能用基本类型作为泛型参数（如 List<int>，应为 List<Integer>）。
- 不能创建泛型数组。
- 不能在静态方法或静态变量中引用类的泛型参数。

## 总结

泛型让 Java 代码更安全、更灵活，是现代 Java 编程的重要基础。
