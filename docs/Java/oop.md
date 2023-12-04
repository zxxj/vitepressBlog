## 一.类与对象

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

## 类和对象的内存分配机制

```java
Java内存的结构分析:
1.栈: 一般存放基本数据类型(局部变量)
2.堆: 存放对象
3.方法区: 方法区中分为两部分,常量池与类加载,常量池存放(变量,例如字符串),类加载信息
```

## 内存中创建对象的流程分析

```java
Person p = new Person();
p.name = "dusk";
p.age = 18;

1.先加载Person的类信息(属性和方法信息),并只会被加载一次
2.在堆中开辟一块新的空间,根据数据类型的规则进行默认初始化
3.将堆中的内存地址赋值给栈中的p
4.进行指定初始化,比如p.name = "dusk"; p.age = 18
```

## 对象在内存中的存在形式

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

## 二.属性

又称成员变量/field(字段)

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

## 三.练习

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

## 四.方法

## 方法的快速入门一

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

## 方法的调用机制

见 04.方法的调用机制.png

## 方法的定义格式

```java
修饰符 返回数据类型 方法名(形参列表) {
  // 方法体
  return 返回值
}

// 1.形参列表: 表示成员方法输入的参数
// 2.返回数据类型: 表示成员方法输出,void代表无返回值
// 3.方法主体: 表示为了实现某一功能的代码块
// 4.return不是必须的
```

## 方法的使用细节一

```java
package B方法;

public class Method03 {
    public static void main(String[] args) {

        Test test = new Test();
        int[] result = test.test1(5, 3);
        System.out.println("求和:" + result[0]);
        System.out.println("求差:" + result[1]);

        double result2 = test.test2(1, 2);
        System.out.println(result2);

        test.test3(5,6);
    }
}

class Test {

    // 1.一个方法最多有一个返回值 [思考，如何返回多个结果 返回数组 ]
    public int[] test1(int a, int b) {
        int[] res = new int[2];
        res[0] = a + b;
        res[1] = a - b;
        return res;
    }

    // 2.返回类型可以为任意类型，包含基本类型或引用类型(数组，对象) 参考test1

    // 3.如果方法要求有返回数据类型，则方法体中最后的执行语句必须为 return 值;
    // 而且要求返回值类型必须和 return 的值类型一致或兼容
    public double test2(int a, int b) {
        int res = 123;
        return res;
    }

    // 4.如果方法的返回值是 void，则方法体中可以没有 return 语句，或者 只写 return ;
    public void test3(int a, int b) {
        System.out.println("没有返回值");
        return;
    }
}
```

## 方法的使用细节二

```java
package B方法;

public class Method04 {
    public static void main(String[] args) {
        Test2 t = new Test2();
        int result = t.sum(10, 20);
        System.out.println(result); // 30

        int[] array = {1,2,3,4};
        int[] result2 = t.mapSum(array); //[I@1134affc 内存地址值
        System.out.println(result2);

        // t.sum2("哈哈", 123); // 参数类型报错
        t.sum2(18, "dusk");
    }
}

class Test2 {

    // 1.一个方法可以有0个参数,也可以有多个参数,中间用逗号隔开
    public int sum(int a, int b) {
        return a + b;
    }

    // 2.参数类型可以为任意类型,包含基本类型或引用类型
    public int[]  mapSum(int[] arr) {
        return arr;
    }

    // 3.调用带参数的方法时,传入的参数一定要对应形参列表相同的数据类型或兼容类型
    public void sum2(int a, String name) {
        System.out.println(a);
        System.out.println(name);
    }
}
```

## 方法的调用细节

```java
package B方法;

public class Method05 {
    public static void main(String[] args) {
        Test3 t = new Test3();
        t.sayOk();
        t.printSayHello();
    }
}

class Test3 {
    public void print() {
        System.out.println("ok");
    }
    // 1.在同一个类中的方法调用: 直接调用即可
    public void sayOk() {
        print();
    }

    // 2.跨类调用方法,例如调用Test4中的sayHello方法如何实现?
    public void printSayHello() {
        Test4 t = new Test4();
        t.sayHello();
    }
}

class Test4 {
   public void  sayHello() {
        System.out.println("hello");
    }
}
```

## 五.练习

```java
package B方法;

public class Method06 {
    public static void main(String[] args) {
        Test5 t = new Test5();
        boolean isEven = t.isEvenNumber(11);
        System.out.println(isEven);

        t.printChar(4,4,'#');

    }
}

class Test5 {
    // 1.判断一个数是奇数还是偶数,返回boolean
    public boolean isEvenNumber(int number) {
        return number % 2 == 0 ? true : false;
    }

    // 2.根据行、列、字符打印对应行数和列数的字符，比如:行:4，列:4，字符#,则打印相应的效果
    public void printChar(int row, int column, char n) {
        for (int i = 0; i < row; i ++) {
            for (int j = 0; j < column; j ++) {
                System.out.print(n);
            }
            System.out.println();
        }
    }
}
```

## 方法的参数传递-值拷贝

基本数据类型传递的是实际值(值拷贝),形参的任何改变不会影响实参!!

```java
package B方法;
public class Method07 {
    public static void main(String[] args) {
        int num1 = 2;
        int num2 = 5;

        Test6 t = new Test6();
        t.swap(num1, num2);
        System.out.println("num1:" + num1); // 2
        System.out.println("num2:" + num2); // 5
    }
}

class Test6 {
    public void swap(int a, int b){
        System.out.println("交换前:");
        System.out.println("a:" + a); // 2
        System.out.println("b:" + b); // 5
        int temp = a;
        a = b;
        b = temp;

        System.out.println("a:" + a); // 5
        System.out.println("b:" + b); // 2
	}
}
```
