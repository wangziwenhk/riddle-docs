# 字面量

## ConstantStmt

继承自 [BaseStmt](special.md#basestmt)

所有字面量或常量的基本类型

### 方法

- `bool isConstant()` 重写于 [BaseStmt](special.md#basestmt)

## IntegerStmt

继承自 [ConstantStmt](#constantstmt)

存储 int 类型字面量或常量的语句

### 成员

- `int value`

