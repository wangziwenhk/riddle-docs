# 表达式

表达式是 *运算符* 和它们的 *操作数* 的序列，它指定一项计算。

表达式的求值可以产生一个结果（比如 `2 + 2` 的求值产生结果 `4`），也可能产生副作用（比如对 `print("4")` 的求值在标准输出上打印字符 `'4'`）。

每个 Riddle 表达式均被描述为具有两种独立的性质：类型和值类别。

## 运算符

<table>
    <tr>
        <th colspan="7" style="text-align: center;">
            常见运算符
        </th>
    </tr>
    <tr>
        <th style="text-align: center;">赋值</th>
        <th style="text-align: center;">自增/自减</th>
        <th style="text-align: center;">算术</th>
        <th style="text-align: center;">逻辑</th>
        <th style="text-align: center;">比较</th>
        <th style="text-align: center;">成员访问</th>
        <th style="text-align: center;">其他</th>
    </tr>
    <tr>
        <td rowspan="3">
            <pre><code style="text-align: center;">
a = b
a += b
a -= b
a *= b
a /= b
a %= b
a &= b
a |= b
a ^= b
a <<= b
a >>= b
            </code></pre>
        </td>
        <td rowspan="3">
            <pre><code style="text-align: center;">
++a
--a
a++
a--
            </code></pre>
        </td>
        <td rowspan="3">
            <pre><code style="text-align: center;">
+a
-a
a + b
a - b
a * b
a / b
a % b
~a
a & b
a | b
a ^ b
a << b
a >> b
            </code></pre>
        </td>
        <td rowspan="3">
            <pre><code style="text-align: center;">
!a
a && b
a || b
            </code></pre>
        </td>
        <td rowspan="3">
            <pre><code style="text-align: center;">
a == b
a != b
a < b
a > b
a <= b
a >= b
a <=> b
            </code></pre>
        </td>
        <td rowspan="3">
            <pre><code style="text-align: center;">
a[...]
*a
&a
a->b
a.b
a->*b
a.*b
            </code></pre>
        </td>
        <td>
            <pre style="text-align:center;">
函数调用
            <code >
a(...)
            </code>
            </pre>
        </td>
    </tr>
    <tr>
        <td>
        <pre style="text-align:center;">
逗号
            <code >
a, b
            </code>
        </td>
    </tr>
    <tr>
        <td>
        <pre style="text-align:center;">
条件
            <code >
a ? b : c
            </code>
        </td>
    </tr>
</table>