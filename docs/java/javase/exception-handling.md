# 异常处理

## 简介

### 异常处理的目的

异常处理的主要目的是为了在程序运行过程中捕获和处理错误，确保程序能够优雅地应对意外情况，而不是直接崩溃。通过异常处理，开发者可以提供更好的用户体验，记录错误信息，并采取适当的措施来恢复程序的正常运行。

### 异常的分类

**Error**

`Error` 类及其子类代表 Java 虚拟机（JVM）无法处理的严重问题。这些通常是系统级别的错误，如内存溢出或栈溢出。开发者通常不应该捕获这些错误，因为它们表示程序无法继续运行。

开发者应当分析这些错误并修复代码中的问题，以避免在生产环境中出现。

**Exception**

`Exception` 类及其子类代表程序可以处理的异常情况。它们通常是由于程序逻辑错误、资源不可用或其他可预见的情况引起的。开发者可以通过捕获这些异常来采取适当的措施。

1. `Checked Exception`（受检异常）：这些异常在编译时被检查，开发者必须显式地处理它们。常见的例子包括 `IOException`、`SQLException` 等。
2. `Unchecked Exception`（未受检异常）：这些异常在运行时发生，不需要在编译时显式处理。它们通常是由于程序逻辑错误引起的，如 `NullPointerException`、`ArrayIndexOutOfBoundsException` 等。

## 异常处理机制

### try-catch-finally 语句

`try-catch-finally` 语句用于捕获和处理异常。`try` 块包含可能抛出异常的代码，`catch` 块用于处理特定类型的异常，`finally` 块中的代码无论是否发生异常都会执行。

```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0; // 可能抛出 ArithmeticException
        } catch (ArithmeticException e) {
            System.out.println("捕获到异常: " + e.getMessage());
        } finally {
            System.out.println("无论如何都会执行的代码");
        }
    }
}
```

### throw

`throw` 关键字用于显式地抛出一个异常。可以在方法中使用 `throw` 来抛出一个新的异常实例。

```java
public class ThrowExample {
    public static void main(String[] args) {
        int age = 120;
        if (age < 0 || age > 100) {
            throw new IllegalArgumentException("年龄必须在0到100之间");
        }
    }
}
```

### throws

`throws` 关键字用于在方法声明中指示该方法可能抛出某些异常。调用该方法的代码需要处理这些异常。

```java
public class ThrowsExample {
    public static void main(String[] args) {
        try {
            riskyMethod();
        } catch (Exception e) {
            System.out.println("捕获到异常: " + e.getMessage());
        }
    }       
    public static void riskyMethod() throws Exception {
        throw new Exception("这是一个受检异常");
    }
}
```

### try-with-resources

`try-with-resources` 语句用于自动管理资源，如文件、网络连接等。它确保在使用完资源后自动关闭，避免资源泄漏。

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class TryWithResourcesExample {
    public static void main(String[] args) {
        try (BufferedReader reader = new BufferedReader(new FileReader("example.txt"))) {
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("捕获到异常: " + e.getMessage());
        }
    }
}
```

## 自定义异常

自定义异常可以帮助开发者创建特定的异常类型，以便更好地描述和处理应用程序中的错误情况。

### 创建自定义异常

创建自定义异常需要继承 `Exception` 或 `RuntimeException` 类。

```java
public class MyCustomException extends Exception {
    public MyCustomException(String message) {
        super(message);
    }
}
```

### 使用自定义异常

```java
public class CustomExceptionExample {
    public static void main(String[] args) {
        try {
            throw new MyCustomException("这是一个自定义异常");
        } catch (MyCustomException e) {
            System.out.println("捕获到自定义异常: " + e.getMessage());
        }
    }
}
```

## 异常最佳实践

1. 优先使用具体的异常类型，而不是通用的 `Exception`。
2. 在捕获异常时，尽量提供有用的错误信息。或者添加日志记录，以便后续分析。
3. 不要在捕获异常后忽略它们，除非你有充分的理由这样做。
4. 使用 `try-with-resources` 来管理资源，确保资源在使用后被正确关闭。
5. 在自定义异常中提供有意义的错误信息，以便更好地理解异常发生的原因。
6. 在需要时使用 `throws` 关键字来声明方法可能抛出的异常，确保调用者能够处理这些异常。
7. 不要使用异常来代替流程控制。异常应该用于处理意外情况，而不是常规的程序逻辑，会造成性能问题和代码可读性下降。