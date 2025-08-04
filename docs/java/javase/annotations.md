# 注解

## 简介

### 什么是注解

注解（Annotation）是Java 5引入的一种特殊的语法结构，用于在代码中添加元数据。它们可以被编译器、开发工具或运行时环境读取和处理，以提供额外的信息或指示。

Spring、JUnit、Hibernate等框架广泛使用注解来简化配置和增强代码的可读性。

### 为什么使用注解

在 Java 5 之前，元数据通常通过 JavaDoc 或 XML 配置文件来提供，这些方法有时不够灵活或易于维护。注解提供了一种更简洁和类型安全的方式来添加元数据。

## 注解基本知识

### Java 内置注解

**`@Override`**

`@Override` 注解用于指示一个方法是重写父类的方法。它可以帮助编译器检查方法签名是否正确，并提高代码的可读性。

```java
class Animal {
    public void makeSound() {
        System.out.println("动物发出声音");
    }
}

class Dog extends Animal {
    @Override // 明确表示这是重写父类的方法
    public void makeSound() {
        System.out.println("汪汪！");
    }
    /*
    @Override
    public void maekSound() { // 如果写错了方法名，编译器会立刻报错！
        // error: method does not override or implement a method from a supertype
    }
    */
}
```

**`@Deprecated`**

`@Deprecated` 注解用于标记一个类、方法或字段已过时，不建议使用。编译器会发出警告，提示开发者使用替代方案。

```java
public class OldApi {
    /**
     * @deprecated 该方法已过时，请使用 newMethod() 代替。
     */
    @Deprecated(since = "1.2", forRemoval = true)
    public void oldMethod() {
        System.out.println("这是一个旧的方法。");
    }

    public void newMethod() {
        System.out.println("这是一个新的方法。");
    }
}

// 在其他地方调用
OldApi api = new OldApi();
api.oldMethod(); // 编译器会在此处显示一条删除线，并给出警告
```

- `since`：字符串值、指定自哪个版本开始该元素被标记为过时。
- `forRemoval`：布尔值，如果为 true 表示该元素在未来版本中彻底删除。

**`@SuppressWarnings`**

`@SuppressWarnings` 注解用于抑制编译器的特定警告。它可以应用于类、方法或字段。

```java
import java.util.ArrayList;
import java.util.List;

public class SuppressExample {
    @SuppressWarnings("rawtypes") // 忽略使用原生类型的警告
    public void useRawList() {
        List list = new ArrayList(); // 如果没有 @SuppressWarnings，这里会有警告
        list.add("Hello");
    }

    @SuppressWarnings({"unchecked", "rawtypes"}) // 可以同时忽略多种警告
    public void useUncheckedList() {
        List list = new ArrayList();
        list.add("Hello");
        List<String> strList = (List<String>) list; // "unchecked" 警告
    }
}
```

### 元注解

元注解是用于注解其他注解的注解。

**`@Retention`**

`@Retention` 注解用于指定注解的保留策略，即注解的生命周期。它的值是一个 `RetentionPolicy` 枚举。

- `RetentionPolicy.SOURCE`：注解只在源代码中存在，编译后会被丢弃。例如 Lombok 的注解。
- `RetentionPolicy.CLASS`：注解在编译时存在，但在运行时不可用。
- `RetentionPolicy.RUNTIME`：注解在运行时可用，可以通过反射来获取和使用。

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME) // 确保注解在运行时可用
public @interface MyRuntimeAnnotation {
}
```

**`@Target`**

`@Target` 注解用于指定注解可以应用于哪些 Java 元素（类、方法、字段等）。它的值是一个 `ElementType` 枚举。

- `ElementType.TYPE`：注解可以应用于类、接口或枚举。
- `ElementType.FIELD`：注解可以应用于字段。
- `ElementType.METHOD`：注解可以应用于方法。
- `ElementType.PARAMETER`：注解可以应用于方法参数。
- `ElementType.CONSTRUCTOR`：注解可以应用于构造函数。
- `ElementType.LOCAL_VARIABLE`：注解可以应用于局部变量。
- `ElementType.ANNOTATION_TYPE`：注解可以应用于其他注解。
- `ElementType.PACKAGE`：注解可以应用于包。

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.FIELD}) // 这个注解只能用于方法和字段
public @interface MyAnnotation {
}
```

**`@Documented`**

`@Documented` 注解用于指示注解应该包含在 Javadoc 中。它通常与其他元注解一起使用。

**`@Inherited`**

`@Inherited` 注解用于指示一个注解可以被子类继承。只有类级别的注解可以使用此元注解。

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Inherited;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface MyInheritedAnnotation {
    String value() default "default value";
}
@MyInheritedAnnotation("parent class")
class ParentClass {
}
@MyInheritedAnnotation("child class")
class ChildClass extends ParentClass {
}
```

## 自定义注解

自定义注解可以帮助开发者定义特定的元数据，用于实现特定的功能。

### 创建自定义注解

创建自定义注解需要使用 `@interface` 关键字，并可以结合元注解来定义其行为。

```java
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target({ElementType.METHOD, ElementType.TYPE})
@Retention(RetentionPolicy.RUNTIME)
public @interface MyAnnotation {
    String value() default "";
    int count() default 1;
}
```

### 使用自定义注解

在代码中进行使用。

```java
@MyAnnotation(value = "测试注解", count = 3)
public class TestClass {
    @MyAnnotation(value = "方法注解")
    public void testMethod() {
        System.out.println("执行测试方法");
    }
}
```

### 读取自定义注解

可以使用反射来读取自定义注解的信息。

```java
import java.lang.reflect.Method;

public class AnnotationProcessor {
    public static void main(String[] args) throws Exception {
        Class<TestClass> clazz = TestClass.class;
        
        // 解析类上的注解
        if (clazz.isAnnotationPresent(MyAnnotation.class)) {
            MyAnnotation annotation = clazz.getAnnotation(MyAnnotation.class);
            System.out.println("类注解值: " + annotation.value());
        }

        // 解析方法上的注解
        for (Method method : clazz.getDeclaredMethods()) {
            if (method.isAnnotationPresent(MyAnnotation.class)) {
                MyAnnotation annotation = method.getAnnotation(MyAnnotation.class);
                System.out.println("方法注解值: " + annotation.value());
            }
        }
    }
}
```

注解本身不具备逻辑功能，需要结合代码进行综合应用。