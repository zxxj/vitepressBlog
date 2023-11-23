## 字面量

```java
public class demo {
    public static void main(String[] args) {

        // 整数
        System.out.println(99);

        // 小数
        System.out.println(66.66);

        // 字符
        System.out.println('a');

        // 特殊字符
        System.out.println('\n');

        // 字符串
        System.out.println("zhangxinxin");
    }
}

```

## 变量

```java
public class demo {
    public static void main(String[] args) {

        int age = 18;
        System.out.println(age); // 18

        age = 20;
        System.out.println(age); // 20


        // 为什么要使用变量?
        // 比如现在有188,等会要发出100,再收到20,最后剩余多少?
        double money = 188.5;
        money = (money - 100) + 20;
        System.out.println(money);

        // 车票,大人2元,小孩1元,车经过两站, 第一站上三个大人一个小孩, 第二站,上一个大人一个小孩, 计算共多少人上车和共收到了多少钱?
        int sum = 0;
        int personCount = 0;
        personCount = personCount + 4 + 2;
        sum = (2 * 4) + (1 * 2);

        System.out.println(personCount);
        System.out.println(sum);
    }
}
```

## 数据类型

```java
package com.xinxin.数据类型;

public class demo1 {
    public static void main(String[] args) {

        // 1.整型 默认为int
        byte number = 127;

        // 2.整型
        short num = 9999;

        // 3.整型
        int number2 = 999999;

        // 4.整型
        long number3 = 9999999999L;

        // 5.浮点型 默认为double
        float height = 99.99F;

        // 6.浮点型
        double height2 = 99.99;

        // 7.字符型
        char key = '我';

        // 8.布尔型
        boolean isTrue = true;

        // 9.引用类型, string
        String city = "石家庄";
    }
}

```

## 自动类型转换

```java
package com.xinxin.数据类型自动转换;

public class demo {
    public static void main(String[] args) {

		// 自动类型转换规则: byte => short => char => int => long => double

        byte number = 10;

        int age = number; // byte => int 发生了自动类型转换

        double height = age; // int(4字节) => double(8字节)
    }
}
```

## 表达式的自动类型转换

```java
package com.xinxin.表达式的自动类型转换;

public class demo {
    public static void main(String[] args) {

        byte num1 = 10;
        short num2 = 20;
        int num3 = 30;

        // 表达式的最终结果的数据类型是由表达式中的最高类型决定的.
        int res = num1 + num2 + num3; // int类型

        // 在表达式中byte short char是会被直接转为int类型进行运算的
        // 为什么?
        byte number1 = 100;
        byte number2 = 29;

        // 我们知道,byte的长度为128,上面100 + 29明显已经超出了范围,换句话来说,自动转为int是为了防止出现不必要的报错.
        int result = number1 + number2;
        System.out.println(result);

    }
}

```

## 强制类型转换

```java
package com.xinxin.强制类型转换;

public class demo {
    public static void main(String[] args) {

        // 什么是强制类型转换?
        // 默认大范围的类型变量直接赋值给小范围类型的变量时会报错
        // 这时可以强行将类型范围大的变量中的数据赋值给类型范围小的变量中
        // 强制类型转换可能会造成数据丢失,例如浮点类型强制转为整型不会保留小数,范围大的整型(int short)强制转为byte可能会造成负数
        // 格式: 数据类型 变量名 = (数据类型)变量名 数据

        int number = 20;
        byte number2 = (byte) number;
        System.out.println(number2); // 20

        int age = 1000;
        byte age2 = (byte) age;
        System.out.println(age2); // -24

        double height = 1.88;
        int height2 = (int) height;
        System.out.println(height2); // 1
    }
}

```
