# 特殊语句

## BaseStmt
所有语句的祖先类

### 方法

- `StmtTypeID getStmtID()` : 获取当前的 `StmtID`
- `bool isNoneStmt()` : 判断是否为空语句
- `bool isConstant()` : 判断是否为字面量或常量

### 成员

- `StmtTypeID ID`

## ProgramStmt

继承自 [BaseStmt](#basestmt)

程序的根语句。当前版本下只能表示一个源文件。

### 成员

- `vector<BaseStmt*> stmts` : 包含了最顶端节点的所有语句
- `string package_name` : 当前源文件的包名