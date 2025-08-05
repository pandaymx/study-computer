# 并发编程（Concurrency）

## 简介

并发编程是指让程序能够同时执行多个任务，提高程序的执行效率和资源利用率。Java 从一开始就内置了对多线程和并发的支持，是主流并发开发的重要语言之一。

## 线程基础

### 创建线程的方式

1. 继承 `Thread` 类
2. 实现 `Runnable` 接口
3. 实现 `Callable` 接口并结合 `Future`
4. 使用线程池（`ExecutorService`）

```java
// 继承 Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Hello from MyThread");
    }
}

// 实现 Runnable
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Hello from MyRunnable");
    }
}

// 使用线程池
ExecutorService executor = Executors.newFixedThreadPool(2);
executor.submit(new MyRunnable());
executor.shutdown();
```

## 线程的生命周期

- 新建（New）
- 就绪（Runnable）
- 运行（Running）
- 阻塞（Blocked/Waiting）
- 死亡（Terminated）

## 线程同步

- `synchronized` 关键字
- 显式锁（`Lock` 接口及其实现类）
- `volatile` 关键字
- 原子类（`AtomicInteger` 等）

```java
public class Counter {
    private int count = 0;
    public synchronized void increment() {
        count++;
    }
}
```

## 线程通信

- `wait()`、`notify()`、`notifyAll()`
- 阻塞队列（`BlockingQueue`）

## 并发工具类（JUC）

- 线程池（`ExecutorService`、`Executors`）
- 并发集合（`ConcurrentHashMap`、`CopyOnWriteArrayList`）
- 信号量（`Semaphore`）
- 倒计时器（`CountDownLatch`）
- 屏障（`CyclicBarrier`）
- 读写锁（`ReadWriteLock`）

## 常见问题

- 死锁
- 活锁
- 饥饿

## 最佳实践

- 尽量使用线程池而不是手动创建线程
- 避免锁的粒度过大
- 使用高层次并发工具类
- 注意线程安全和可见性

## 总结

并发编程是 Java 高级开发的重要内容，掌握并发基础和常用工具类，有助于编写高效、健壮的多线程程序。
