## final 修饰类/方法/成员变量/局部变量

> final 关键是代表最终,可以修饰类,方法和变量

> 修饰类: 也称为最终类,它的特点是不能被继承

- People.java

```java
package com.xin.demo1;

public final class People {}
```

- demo1.java

```java
package com.xin.demo1;

public class Student extends People{} // 报错: 无法从final 'com.xin.demo1.People' 继承
```

> 修饰方法: 也称为最终方法, 它的特点是不能被重写了

- People.java

```java
package com.xin.demo2;

public  class People {
    public final void run() {
        System.out.println("人会跑步~");
    }
}
```

- demo2.java

```java
package com.xin.demo2;

public class Student extends People{
    @Override
    public void run() {} // 报错: run()' 无法重写 'com.xin.demo1.People' 中的 'run()'；重写的方法为 final
}
```

> 修饰变量: 该变量只能被赋值一次
> 修饰成员变量时,要在声明时完成赋值,或者在构造器执行结束之前完成赋值,否则报错

- 要在声明时完成赋值

```java
package com.xin.demo3;

public class Test {
    // 1.要在声明时完成赋值
    private final int age = 10;
}
```

- 或者在构造器执行结束之前完成赋值

```java
package com.xin.demo3;

public class Test {
    private final int age;
    public Test(int age) {
        // 2.或者在构造器执行结束之前完成赋值
        this.age = 10;
    }
}
```

- final 修饰局部变量时只能被赋值一次

```java
package com.xin.demo3;

public class Test {
    public void testMethod() {
        final int sum = 10;
        sum = 20; // 无法将值赋给 final 变量 'sum'
    }
}
```

## final 修饰变量的注意事项

- 基本数据类型: 变量记录的数据值不能被改变

```java
package com.xin.demo4;

public class TestAnimal {

    public static void main(String[] args) {
        final int age = 10;
        age = 20; // 无法将值赋给 final 变量 'age'
    }
}
```

- 引用数据类型: 变量记录的地址值不能被改变,但是地址中的成员可以被改变

```java
package com.xin.demo4;

public class TestAnimal {

    public static void main(String[] args) {

        final Animal a1 = new Animal("虎子", 18);
        System.out.println(a1.getName()); // 虎子
        System.out.println(a1.getAge()); // 18

        // 1.被final修饰的引用类型变量的地址值不能被改变
         a1 = new Animal("小黑", 10); // 报错: 无法将值赋给 final 变量 'a1'

        // 2.但是地址中的成员可以被改变
        a1.setAge(20);
        a1.setName("虎子虎子");
        System.out.println(a1.getAge()); // 20
        System.out.println(a1.getName()); // 虎子虎子
    }
}
```

## 常量

> 使用了 final static 修饰的成员变量就被称为常量

> 作用: 通常用于记录系统的配置信息

> 使用常量记录的优势与执行原理

- 代码可读性更好,可维护性更好
- 程序编译后,常量会被宏替换,出现常量的地方全部会被替换成其记住的字面量,这样可以保证使用常量和直接使用字面量的性能是一样的

```java
package com.finalStatic;

public class demo {
    public static void main(String[] args) {
        System.out.println(Constant.SCHOOL_NAME); // 字节跳动
        System.out.println(Constant.SCHOOL_NAME); // 字节跳动
        System.out.println(Constant.SCHOOL_NAME); // 字节跳动
        System.out.println(Constant.SCHOOL_NAME); // 字节跳动
        System.out.println(Constant.SCHOOL_NAME); // 字节跳动
    }
}

class Constant {
    public static final String SCHOOL_NAME = "字节跳动";
}
```
