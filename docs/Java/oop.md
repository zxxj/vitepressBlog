## 1.通过需求引出类与对象

```java
// 需求: 有两只猫,小白 3岁 白色,小花 100岁 花色

// 1.通过变量方式实现

// 第一只猫
String name = "小白";
int age = 3;
String color = "白色";

// 第二只猫
String name = "小花";
int age = 100;
String color = "花色";
// 通过变量确实可以实现需求,但是如果又来了两只猫呢?难道还是需要定义单独的六个变量吗?感觉好麻烦.
```

```java
// 2.通过类与对象实现

// 2.1 创建一个猫类, 类可以理解为一张图纸,里面属性和方法可以由你指定.
class Cat {
    String name;
    int age;
    String color;
}
```

```java
// 2.2 创建两只猫
public class test {
    public static void main(String[] args) {

        // 第一只猫
        Cat cat1 = new Cat();
        cat1.name = "小白";
        cat1.age = 3;
        cat1.color = "白色";

        // 第二只猫
        Cat cat2 = new Cat();
        cat2.name = "小花";
        cat2.age = 100;
        cat2.color = "花色";

        // 送你一只猫
        Cat cat3 = new Cat();
        cat3.name = "小黑";
        cat3.age = 6;
        cat3.color = "黑色";
    }
}
```

## 1.1 类和对象的内存分配机制

```java
Java内存的结构分析:
1.栈: 一般存放基本数据类型(局部变量)
2.堆: 存放对象
3.方法区: 方法区中分为两部分,常量池与类加载,常量池存放(变量,例如字符串),类加载信息
```

## 1.2 内存中创建对象的流程分析

```java
Person p = new Person();
p.name = "dusk";
p.age = 18;

1.先加载Person的类信息(属性和方法信息),并只会被加载一次
2.在堆中开辟一块新的空间,根据数据类型的规则进行默认初始化
3.将堆中的内存地址赋值给栈中的p
4.进行指定初始化,比如p.name = "dusk"; p.age = 18
```

## 2.对象在内存中的存在形式

```java
        Cat cat1 = new Cat();
        cat1.name = "小白";
        cat1.age = 3;
        cat1.color = "白色";

 拿上述代码举例:
 1.内存中分为栈,堆,方法区,方法区中有常量池,对象的内存分配是如何进行的?
 2.第一步首先会进入到方法区中去加载Cat类中的信息(属性与方法)
 3.实例cat1进入到栈队列中,会生成一个内存地址,同时堆中也会为cat1实例开辟一个内存空间,堆中的内存空间的地址与栈中的内存地址一致,简单说就是栈中的内存地址会指向堆中的内存地址
 4.在堆中会区分基本类型与引用类型的属性,
比如name是String类型,String类型就是引用类型,那么堆中会开辟一个新的内存空间来保存这个引用类型的地址,这个name的实际值会被保存到方法区中的常量池
比如age是int类型,int类型是基本类型,那么他会直接将实际值保存在堆中,不会进行特殊操作
```

## 3.属性

## 成员变量/field(字段)

```java
// 属性是类的一个组成部分,可以是基本数据类型也可以是引用数据类型
public class object02 {
    public static void main(String[] args) {
        Car car1 = new Car();
        car1.name = "奥迪A6";
        car1.price = 229999.88;
        car1.color = "黑色";
    }
}

class Car {
    String name;
    double price;
    String color;
    String[] master;
}
```

## 对象中属性的默认值

```java
public class object03 {
    public static void main(String[] args) {
			  // 对象中属性的默认值遵循数组规则!!
        Person p = new Person();
        System.out.println("name:" + p.name); // null
        System.out.println("age:" + p.age); // 0
        System.out.println("height:" + p.height); // 0.0
        System.out.println("isTrue:" + p.isTrue); // false
    }
}

class Person {
    String name;
    int age;
    boolean isTrue;
    double height;
}
```

## 4.练习

## 对象内存分配练习一

```java
public class object04 {
    public static void main(String[] args) {
        // 思考: p2.age是多少?
        Person p1 = new Person();
        p1.name = "dusk";
        p1.age = 18;

        Person p2 = p1;
        System.out.println(p2.age); // 18

        // 见: 02.类和对象的内存分配机制.png
    }
}

class Person1 {
    String name;
    int age;
}
```

## 对象内存分配练习二

```java
public class object05 {
    public static void main(String[] args) {

        // 思考: 会输出什么信息?
        Person a = new Person();
        a.name = "dusk";
        a.age = 18;

        Person b = a;
        System.out.println(b.name); // dusk

        b.age = 200;
        b = null;

        System.out.println(a.age); // 200
        System.out.println(b.age); // 异常

        // 见: 03.对象内存分配练习二.png
    }
}

class Person {
    String name;
    int age;
}
```

## 5.方法

## 1.方法的快速入门一

```java
public class Method01 {
    public static void main(String[] args) {
        // 方法不会默认执行,需要创建一个实体,然后进行调用方法才会被执行
        Person p = new Person();
        p.speak();
    }
}

class Person {
    // 成员方法
    public void speak() {
        System.out.println("hello dusk~");
    }
}
```
