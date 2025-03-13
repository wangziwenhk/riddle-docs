# 类
## 成员
你可以通过定义变量的方法在类中定义一个成员
```kotlin
class MyClass{
    var a:int
}
```
则 MyClass 类拥有一个 int 类型的成员 a
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
## 析构函数 (Destruction)