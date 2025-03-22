# 函数

在 Riddle 中，函数是一段命名的代码块，用于执行特定任务并可以重复调用。函数通常接收输入（参数），处理逻辑，并返回输出（返回值）。它是程序模块化的核心组件，有助于提高代码的可读性、可维护性和复用性。

Riddle 函数的定义包括以下几个部分：

1. **返回类型**：指定函数返回的数据类型（如`int`、`void`等）。
2. **函数名**：函数的唯一标识符。
3. **参数列表**：函数接收的输入，放在括号中，可以为空。
4. **函数体**：包含函数的具体实现代码，用大括号`{}`包裹。

## 函数定义的语法

Riddle 函数定义的基本语法如下：

```kotlin
fun 函数名(参数列表)->返回类型 {
    // 函数体：实现代码
    return 返回值; // 如果返回类型不是void，则需要返回值
}
```

### 示例1：无参数的函数
```kotlin
fun sayHello() {
    print("Hello world")
}
```

- **返回类型**：`void`（无返回值）
- **函数名**：`sayHello`
- **参数列表**：空
- **函数体**：打印一条消息

### 示例2：带参数的函数
```kotlin
fun add(a:int, b:int) {
    return a + b;
}
```

- **返回类型**：`int`
- **函数名**：`add`
- **参数列表**：`a:int, b:int`（两个整数参数）
- **函数体**：返回两个参数的和

## 函数声明与定义的区别

在 Riddle 中，函数可以先声明后定义。声明只指定函数的签名（返回类型、函数名、参数列表），不包含实现代码；定义则包含完整的实现。例如：

```kotlin
// 函数声明
fun multiply(x:int, y:int)->int;

// 函数定义
fun multiply(x:int, y:int)->int {
    return x * y;
}
```

## 默认参数

Riddle 支持为函数参数指定默认值。如果调用时未提供参数，将使用默认值：

```kotlin
void printNumber(num:int = 42) {
    print(num)
}

int main() {
    printNumber();      // 输出: Number: 42
    printNumber(100);   // 输出: Number: 100
    return 0;
}
```

## 函数重载

Riddle 允许定义多个同名但参数不同的函数，这称为函数重载：

```kotlin
fun add(a:int, b:int) {
    return a + b;
}

fun add(a:double, b:double)->double {
    return a + b;
}

fun main()->int {
    var a:int = add(1,2)
    var b:double = add(1.1,1.2)
    return 0;
}
```

## 内联函数

为了提高性能，可以使用`inline`关键字建议编译器将函数内联展开：

```kotlin
inline fun square(x:int)->int {
    return x * x;
}
```