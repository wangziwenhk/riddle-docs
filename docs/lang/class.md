# 类
## 访问控制符 (Access Modifiers)
一共有三种访问控制符，分别是：
- Public 公有的
- Private 私有的
- Protected 受保护的

其中 Public 表示在任何地方都可以访问该方法（成员），
而 Private 表示只能在本类中访问该方法（成员）。
Protected 是介于两者之间的，表示派生类也可以访问该方法（成员）。

## 成员 (Member)
你可以通过定义变量的方法在类中定义一个成员
```kotlin
class MyClass{
    var a:int
}
```
则 MyClass 类拥有一个 int 类型的成员 a

成员访问控制符默认为**公有** (public)
## 构造函数

在创建一个对象时会使用构造函数。当类的成员中均有默认构造函数或默认值时，Riddle 会自动生成当前类的默认构造函数，如以下所示:
```kotlin
class Foo{
    var a:int
    var b:double = 2.1
    // 隐式生成
    // Foo(){
    //     a = 0
    //     b = 2.1
    // }
}
```
该函数也可以显式定义
```c++
class Foo{
    // sth
    Foo() = default 
}
```
你必须在构造函数中初始化每个没有默认构造函数（无参构造函数）的成员，类似 C++ 中的成员初始化列表。当然你也可以在其中初始化有默认构造函数的成员。
```kotlin
class Foo{
    var x:int
    Foo(x:int){
        this.x = x
    }
}
class Bar{
    var a:Foo
    Bar():a(0){}
}
```
## 析构函数 (Destruction)
析构函数在一个对象退出其作用域或者被手动销毁时运行。
```kotlin
fun main(){
    {
        var a:Foo
    } // 此时 a 退出了其作用域，将执行 a 的析构函数
}
```
```kotlin
fun main(){
    var a:Foo* = new Foo()
    delete a // 此时 a 执行构析函数
}
```
其定义方法如下：
```c++
class Foo{
    // sth
    ~Foo(){
        // sth
    }
}
```