# 现代 Java 特性

## Stream 流

### 什么是 Stream 流

Stream 流是 Java 8 引入的一种处理集合的方式，它允许以声明性方式处理数据集合。Stream 流可以从集合、数组或 I/O 通道等数据源创建，并提供了一系列操作来处理数据。

### Stream 流的特点

**非数据结构**

Stream 流不是数据结构，而是对数据源的视图。它不会存储数据，而是按需计算。

**函数式编程风格**

Stream 流支持函数式编程风格的操作，如 `map`、`filter`、`reduce` 等，使代码更简洁和易读。

**不可变性**

Stream 流的操作不会修改原始数据源，而是返回一个新的 Stream 流。

**惰性求值**

Stream 流的操作是惰性求值的，只有在需要结果时才会执行计算。这可以提高性能，避免不必要的计算。所有的操作仅仅记录要进行的操作，在拿到终止操作后才会一次性执行。

**一次性**

Stream 流只能使用一次，使用后会被消耗掉。如果需要多次使用相同的数据源，需要重新创建 Stream 流。

**并行处理**

Stream 流可以轻松地进行并行处理，通过调用 `parallelStream()` 方法，可以在多核 CPU 上充分利用并行计算的优势。

### 创建 Stream 流

```java
public class StreamExample {
    public static void main(String[] args) {
        // 从集合创建 Stream 流
        List<String> list = Arrays.asList("a", "b", "c");
        Stream<String> streamFromList = list.stream();

        // 从数组创建 Stream 流
        String[] array = {"d", "e", "f"};
        Stream<String> streamFromArray = Arrays.stream(array);

        // 从文件创建 Stream 流
        try (Stream<String> streamFromFile = Files.lines(Paths.get("file.txt"))) {
            streamFromFile.forEach(System.out::println);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // 从生成器创建 Stream 流
        Stream<Integer> streamFromGenerator = Stream.generate(() -> (int) (Math.random() * 100)).limit(10);

        // 使用 `Stream.of()
        Stream<String> stream = Stream.of("apple", "banana", "cherry");

        // 使用 `Stream.iterate()` 创建一个从 0 开始，步长为 2 的无限流 (0, 2, 4, 6, ...)
        Stream<Integer> infiniteStream = Stream.iterate(0, n -> n + 2);
        // 使用 limit() 方法限制流的长度
        infiniteStream.limit(10).forEach(System.out::println);

    }
}
```

### 中间操作

中间操作返回一个新的 Stream，并可以链接在一起。

**`filter()`**

用于过滤数据，根据给定的条件返回符合条件的元素。

```java
// 过滤出以 "a" 开头的字符串
Stream<String> filteredStream = stream.filter(s -> s.startsWith("a"));
```

**`map()`**

用于将 Stream 中的每个元素转换为另一个形式。

```java
// 将字符串转换为大写
Stream<String> upperCaseWords = words.stream().map(String::toUpperCase);
```

**`flatMap()`**

将多个 Stream 合并为一个 Stream。

```java
List<List<String>> listOfLists = Arrays.asList(
    Arrays.asList("a", "b"),
    Arrays.asList("c", "d")
);
Stream<String> flatStream = listOfLists.stream()
    .flatMap(Collection::stream); // a, b, c, d
```

**`distinct()`**

返回一个由不同元素（根据 `Object.equals(Object)`）组成的 Stream。

```java
Stream<String> distinctStream = Stream.of("a", "b", "a", "c", "b").distinct(); // a, b, c
```

**`sorted()`**

返回一个根据自然顺序排序的 Stream。

```java
Stream<String> sortedStream = Stream.of("c", "a", "b").sorted(); // a, b, c
```

**`peek()`**

返回一个与原 Stream 相同的 Stream，但会在每个元素被消费时执行提供的操作，这对于调试很有用。

```java
Stream<String> peekStream = Stream.of("one", "two", "three")
    .peek(e -> System.out.println("Peeked value: " + e));
```

**`limit()`**

返回一个截断的 Stream，其长度不超过 `maxSize`。

```java
Stream<Integer> limitStream = Stream.iterate(0, n -> n + 1).limit(5); // 0, 1, 2, 3, 4
```

**`skip()`**

返回一个丢弃了前 `n` 个元素后剩下元素的 Stream。

```java
Stream<Integer> skipStream = Stream.of(1, 2, 3, 4, 5).skip(2); // 3, 4, 5
```

### 终止操作

终止操作会触发 Stream 的计算并返回一个最终结果。

**`forEach()`**

遍历 Stream 中的每个元素。

```java
stream.forEach(System.out::println);
```

**`collect()`**

将 Stream 中的元素收集到一个集合中。

```java
List<String> list = stream.collect(Collectors.toList());
```

**`count()`**

返回 Stream 中的元素个数。

```java
long count = stream.count();
```

**`reduce()`**

将 Stream 中的元素归约为一个值。

```java
Optional<String> result = stream.reduce((a, b) -> a + "," + b);
```

**`anyMatch()`**, **`allMatch()`**, **`noneMatch()`**

检查是否 Stream 中的元素满足某个条件。

```java
boolean anyMatch = stream.anyMatch(s -> s.startsWith("a"));
```

**`findFirst()`**

返回 Stream 中的第一个元素。

```java
Optional<String> first = stream.findFirst();
```

**`findAny()`**

返回 Stream 中的任意一个元素（在并行流中性能更好）。

```java
Optional<String> any = stream.parallel().findAny();
```

**`min()`**

根据提供的 `Comparator` 返回此流的最小元素。

```java
Optional<Integer> min = Stream.of(3, 1, 4, 1, 5, 9).min(Integer::compareTo); // Optional[1]
```

**`max()`**

根据提供的 `Comparator` 返回此流的最大元素。

```java
Optional<Integer> max = Stream.of(3, 1, 4, 1, 5, 9).max(Integer::compareTo); // Optional[9]
```

**`toArray()`**

返回一个包含此流元素的数组。

```java
Object[] array = Stream.of("a", "b", "c").toArray();
```

## Lambda 表达式

### Lambda 表达式简介

Lambda 表达式是 Java 8 引入的一种简洁的函数式编程语法，它允许将函数作为参数传递给方法或将其存储在变量中。Lambda 表达式可以使代码更简洁和易读，特别是在处理集合时。

Lambda 表达式的主要目标是为“只有一个抽象方法（Single Abstract Method, SAM）”的接口提供一种极其简洁的实现方式。

在现代编程领域中，Lambda 表达式被广泛应用于事件处理、回调函数和并行处理等场景。

### 语法

Lambda 表达式的语法结构由三个核心部分组成：

1. **参数列表**：可以有零个或多个参数，参数类型可以省略。
2. **箭头操作符**：`->`，用于分隔参数列表和函数体。
3. **函数体**：可以是一个表达式或一个代码块。

```java
(parameters) -> expression
(parameter1, parameter2) -> expression
(parameter1, parameter2) -> { code block }
```

- `参数类型推断`：一般情况下，Java 编译器可以根据上下文推断参数的类型，因此可以省略参数类型。(int a,int b) 可以简写为 (a, b)。
- `单个参数`：如果只有一个参数，可以省略括号。例如：`x -> x * x`。
- `无参数`：如果没有参数，必须使用空括号 `()`。例如：`() -> System.out.println("Hello")`。
- `函数体`：如果函数体只有一个表达式，可以省略大括号和 `return` 关键字。例如：`(x, y) -> x + y` 可以简写为 `x + y`。如果包含多条语句，则需要使用大括号 `{}` 包裹，并且需要使用 `return` 关键字返回值。

### 函数式接口

函数式接口是只包含一个抽象方法的接口，可以使用 Lambda 表达式来实现。

**常见的函数式接口**

- `Consumer<T>`：接受一个参数 `T`，不返回结果，常用于遍历。
- `Supplier<T>`：不接受参数，返回一个结果 `T`，常用于生成值。
- `Function<T, R>`：接受一个参数 `T`，返回一个结果 `R`，常用于转换。
- `Predicate<T>`：接受一个参数 `T`，返回一个布尔值，常用于过滤。
- `UnaryOperator<T>`：接受一个参数 `T`，返回一个结果 `T`，常用于对单个值进行操作。
- `BinaryOperator<T>`：接受两个参数 `T`，返回一个结果 `T`，常用于对两个值进行操作。
- `BiFunction<T, U, R>`：接受两个参数 `T` 和 `U`，返回一个结果 `R`，常用于转换。
- `BiPredicate<T, U>`：接受两个参数 `T` 和 `U`，返回一个布尔值，常用于过滤。

**Stream 流与 Lambda 表达式**

Lambda 表达式通常与 Stream 流一起使用，以便对集合进行更简洁的操作。

```java
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

// 假设存在 Person 类，包含 getName() 和 getAge() 方法

List<Person> people = Arrays.asList(
    new Person("Charles", 22),
    new Person("Jane", 17),
    new Person("Peter", 35),
    new Person("Alice", 18)
);

List<String> adultNames = people.stream()                     // 1. 获取流
    .filter(p -> p.getAge() >= 18)                            // 2. 筛选 (Predicate<Person>)
    .map(p -> p.getName().toUpperCase())                      // 3. 映射 (Function<Person, String>)
    .sorted()                                                 // 4. 排序
    .collect(Collectors.toList());                            // 5. 收集结果

// adultNames 将会是 ["ALICE", "CHARLES", "PETER"]
```

**方法引用**

方法引用是 Lambda 表达式的一种特殊简写形式。当 Lambda 表达式的主体仅仅是调用一个已存在的方法时，可以使用方法引用来进一步简化代码，提高可读性。使用 `::` 符号来引用方法。

- **静态方法引用**：`ClassName::staticMethodName` 将 `str -> Integer.parseInt(str)` 修改为 `Integer::parseInt`。
    ```java
    List<String> stringNumbers = Arrays.asList("1", "2", "3", "4", "5");
    List<Integer> numbers = stringNumbers.stream()
        .map(Integer::parseInt) // 使用静态方法引用
        .collect(Collectors.toList());
    ``` 
- **特定对象实例方法引用**：`instance::instanceMethodName`，将 `s -> System.out.println(s)` 修改为 `System.out::println`。
    ```java
    List<String> names = Arrays.asList("Alice", "Bob", "Charlie");
    names.forEach(System.out::println); // 使用方法引用
    ```
- **任意对象的实例方法引用**：`ClassName::instanceMethodName`，将 `(s1, s2) -> s1.compareToIgnoreCase(s2)` 修改为 `String::compareToIgnoreCase`。
    ```java
    String[] stringArray = { "Barbara", "James", "mary", "John", "Patricia", "Robert", "michael", "Linda" };
    Arrays.sort(stringArray2, String::compareToIgnoreCase);
    ```
- **构造方法引用**：`ClassName::new`，将 `() -> new String()` 修改为 `String::new`。
    ```java
    List<String> list = Stream.generate(String::new).limit(5).collect(Collectors.toList());
    ```

**定义函数式接口**

函数式接口通过 `@FunctionalInterface` 注解来标识，编译器会确保该接口只包含一个抽象方法。

```java
@FunctionalInterface
public interface MyFunctionalInterface {
    void doSomething(String input);
}
```

## Optional 类

### 什么是 Optional 类

由于 Java 中的 null 值可能导致 `NullPointerException`，Java 8 引入了 `Optional` 类来处理可能为 null 的值。`Optional` 是一个容器对象，用于表示可能存在或不存在的值。

### 为什么使用 Optional 类

```java
public String findUserNameById(long id) {
    // ... 查找数据库
    if (userFound) {
        return user.getName();
    } else {
        return null;
    }
}

// 调用代码
String name = findUserNameById(123);
System.out.println("用户名的长度是：" + name.length()); // 如果 name 是 null，这里就会抛出 NullPointerException！
```

为了避免上述代码导致的 `NullPointerException` 问题，以及为了避免该问题造成的代码冗长的问题，使用 `Optional` 类可以避免这种情况。

```java
public Optional<String> findUserNameById(long id) {
    // ... 查找数据库
    if (userFound) {
        return Optional.of(user.getName());
    } else {
        return Optional.empty();
    }
}

// 调用代码
Optional<String> nameOpt = findUserNameById(123);
nameOpt.ifPresent(name -> System.out.println("用户名的长度是：" + name.length()));
```

### 创建 Optional 对象

创建 `Optional` 对象有三种主要方法：

- **`Optional.of(value)`**：如果 `value` 不为 `null`，则创建一个包含该值的 `Optional` 对象；如果 `value` 为 `null`，则会立即抛出 `NullPointerException`。
- **`Optional.ofNullable(value)`**：如果 `value` 不为 `null`，则创建一个包含该值的 `Optional` 对象；如果 `value` 为 `null`，则创建一个空的 `Optional` 对象。
- **`Optional.empty()`**：创建一个空的 `Optional` 对象。

```java
// 1. 使用 of() - 如果 user 为 null，会抛出 NullPointerException
User user = new User("John");
Optional<User> optUser = Optional.of(user);

// 2. 使用 ofNullable() - 推荐使用，更安全
User user2 = null;
Optional<User> optUser2 = Optional.ofNullable(user2); // 不会抛出异常，返回一个空的 Optional

// 3. 使用 empty()
Optional<User> emptyOpt = Optional.empty();
```

### 使用 Optional 对象

`Optional` 类提供了多种方法来处理其包含的值，从而避免直接进行 `null` 检查。

- **`isPresent()`**：如果 `Optional` 对象包含值，则返回 `true`，否则返回 `false`。
- **`ifPresent(Consumer<? super T> consumer)`**：如果值存在，则执行给定的操作，否则不执行任何操作。
- **`get()`**：如果值存在，则返回值；否则抛出 `NoSuchElementException`。**（注意：通常不推荐直接使用，除非你已经通过 `isPresent()` 确认了值的存在）**
- **`orElse(T other)`**：如果值存在，则返回值；否则返回指定的默认值 `other`。
- **`orElseGet(Supplier<? extends T> other)`**：如果值存在，则返回值；否则调用 `Supplier` 函数并返回其提供的值。这在默认值需要计算或资源消耗较大时很有用，因为仅在需要时才执行。
- **`orElseThrow(Supplier<? extends X> exceptionSupplier)`**：如果值存在，则返回值；否则抛出由 `Supplier` 函数创建的异常。
- **`filter(Predicate<? super T> predicate)`**：如果值存在且满足给定条件，则返回包含该值的 `Optional`；否则返回空的 `Optional`。
- **`map(Function<? super T, ? extends U> mapper)`**：如果值存在，则对其应用 `mapper` 函数，并返回一个包含结果的 `Optional`。如果 `mapper` 函数返回 `null`，则返回一个空的 `Optional`。
- **`flatMap(Function<? super T, Optional<U>> mapper)`**：与 `map` 类似，但要求 `mapper` 函数返回一个 `Optional`。这在链式调用返回 `Optional` 的方法时非常有用，可以避免出现 `Optional<Optional<T>>` 这样的嵌套结构。

```java
Optional<String> nameOpt = Optional.ofNullable("John Doe");

// isPresent() 和 get() - 传统但繁琐的方式
if (nameOpt.isPresent()) {
    System.out.println("Name: " + nameOpt.get());
}

// ifPresent() - 更优雅的方式
nameOpt.ifPresent(name -> System.out.println("Name length: " + name.length()));

// orElse() - 提供默认值
String name = nameOpt.orElse("Unknown");
System.out.println("Name: " + name); // 输出 "Name: John Doe"

Optional<String> emptyOpt = Optional.empty();
String name2 = emptyOpt.orElse("Unknown");
System.out.println("Name: " + name2); // 输出 "Name: Unknown"

// orElseGet() - 在需要时才计算默认值
String name3 = emptyOpt.orElseGet(() -> {
    // 这里的代码只在 Optional 为空时执行
    System.out.println("Generating default name...");
    return "Default Name";
});

// orElseThrow() - 值不存在时抛出异常
String name4 = nameOpt.orElseThrow(() -> new IllegalArgumentException("Name not found"));

// filter() - 过滤值
Optional<String> longNameOpt = nameOpt.filter(n -> n.length() > 5);
longNameOpt.ifPresent(System.out::println); // 输出 "John Doe"

// map() - 转换值
Optional<Integer> lengthOpt = nameOpt.map(String::length);
lengthOpt.ifPresent(len -> System.out.println("Length: " + len)); // 输出 "Length: 8"

// flatMap() - 避免嵌套 Optional
Optional<Optional<String>> nestedOpt = nameOpt.map(n -> Optional.of(n.toUpperCase())); // 结果是 Optional<Optional<String>>
Optional<String> upperNameOpt = nameOpt.flatMap(n -> Optional.of(n.toUpperCase())); // 结果是 Optional<String>
upperNameOpt.ifPresent(System.out::println); // 输出 "JOHN DOE"
```

### Optional 最佳实践

为了正确和高效地使用 `Optional`，可以遵循以下最佳实践：

1. **不要用 `Optional` 来声明类的字段**：`Optional` 的设计初衷是作为方法的返回类型，表示可能不存在的返回值。它没有实现 `Serializable` 接口，因此不适合用作持久化字段。
    ```java
    // 不推荐
    public class User {
        private Optional<String> address;
    }

    // 推荐
    public class User {
        private String address; // 可以为 null

        public Optional<String> getAddress() {
            return Optional.ofNullable(address);
        }
    }
    ```

2. **谨慎使用 `isPresent()` 和 `get()`**：`if (opt.isPresent()) { opt.get(); }` 的模式破坏了 `Optional` 的流畅性。应优先使用 `orElse`、`orElseGet`、`ifPresent` 或 `map` 等方法。

3. **不要用 `Optional.of(null)`**：这会直接抛出 `NullPointerException`。如果你不确定对象是否为 `null`，请使用 `Optional.ofNullable()`。

4. **`Optional` 主要用于返回值**：在方法参数中使用 `Optional<T>` 会迫使调用者创建 `Optional` 对象，这可能是不必要的开销。接受 `null` 值的重载方法通常是更好的选择。

5. **在集合中使用 `Optional` 时要小心**：像 `List<Optional<String>>` 这样的结构通常是不必要的。可以直接从集合中过滤掉 `null` 或空值，而不是用 `Optional` 包装它们。

6. **使用 `orElseGet()` 而不是 `orElse()` 来处理复杂的默认值**：如果创建默认值的开销很大（例如，数据库查询或复杂的计算），`orElseGet()` 可以通过延迟执行来提高性能，因为它只在 `Optional` 为空时才调用 `Supplier`。
