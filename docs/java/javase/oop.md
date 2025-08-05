# 面向对象编程（OOP）

## 简介

面向对象编程（Object-Oriented Programming, OOP）是一种以对象为中心的编程范式。Java 是一种纯面向对象的语言，OOP 是其核心思想。

## OOP 的四大特性

1. **封装（Encapsulation）**
   - 将数据（属性）和操作数据的方法（行为）封装在对象中，对外只暴露必要的接口。
   - 通过 `private`、`protected`、`public` 等访问修饰符实现。
   - 好处：隐藏实现细节，提高安全性和可维护性。

2. **继承（Inheritance）**
   - 子类继承父类的属性和方法，实现代码复用。
   - 使用 `extends` 关键字。
   - 支持单继承，接口可多实现。

   ```java
   class Animal {
       void eat() { System.out.println("Animal eat"); }
   }
   class Dog extends Animal {
       void bark() { System.out.println("Dog bark"); }
   }
   Dog dog = new Dog();
   dog.eat(); // 继承自 Animal
   dog.bark();
   ```

3. **多态（Polymorphism）**
   - 同一个方法调用在不同对象上表现出不同的行为。
   - 包括编译时多态（方法重载）和运行时多态（方法重写）。
   - 通过父类引用指向子类对象实现。

   ```java
   Animal a = new Dog();
   a.eat(); // 调用的是 Dog 重写后的方法
   ```

4. **抽象（Abstraction）**
   - 只暴露对象的必要特性，隐藏具体实现。
   - 通过抽象类（`abstract`）和接口（`interface`）实现。

   ```java
   abstract class Shape {
       abstract void draw();
   }
   class Circle extends Shape {
       void draw() { System.out.println("Draw Circle"); }
   }
   ```

## 类与对象

- **类（Class）**：对象的模板或蓝图。
- **对象（Object）**：类的实例。

```java
class Person {
    String name;
    int age;
    void sayHello() {
        System.out.println("Hello, my name is " + name);
    }
}

Person p = new Person();
p.name = "Tom";
p.age = 20;
p.sayHello();
```

## 访问修饰符

- `private`：仅本类可见
- `default`（无修饰符）：同包可见
- `protected`：同包和子类可见
- `public`：所有类可见

## 方法重载与重写

- **重载（Overload）**：同一类中方法名相同，参数不同。
- **重写（Override）**：子类重写父类的方法，方法签名相同。

## 接口与抽象类

- **接口**：只包含常量和抽象方法（Java 8+ 支持默认方法和静态方法）。
- **抽象类**：可包含抽象方法和具体方法。

## 总结

面向对象是 Java 编程的核心，掌握封装、继承、多态和抽象，有助于编写高效、可维护的程序。
