# 如何贡献

非常感谢你对 Riddle Language 的兴趣！无论你是报告问题、提交修复、建议改进，还是编写文档，你的贡献都非常重要。我们相信开源社区的力量，并期待和你一起让
Riddle Language 变得更好。请参考以下指南来参与贡献。

## 贡献流程

1. **Fork 仓库**：首先从 Riddle Language 的 [GitHub 仓库](https://github.com/wangziwenhk/riddle-lang) fork 一份副本到你的个人账号。

2. **克隆仓库**：将 fork 后的项目克隆到本地计算机。

    ```bash
    git clone https://github.com/你的用户名/riddle-lang.git
    ```

3. **创建新分支**：为你的工作创建一个新分支。请确保分支名称描述清楚你将进行的更改。例如：

    ```bash
    git checkout -b 修复-内存管理-bug
    ```

4. **进行开发**：进行代码修改或文档改进，并确保你遵守项目的编码规范和风格指南。

5. **提交更改**：完成开发后，使用清晰、简洁的提交信息来提交你的更改。

    ```bash
    git add .
    git commit -m "修复内存管理中的引用计数问题"
    ```

6. **推送分支**：将你的新分支推送到你 fork 的仓库。

    ```bash
    git push origin 修复-内存管理-bug
    ```

7. **创建 Pull Request**：前往 Riddle Language 的 GitHub 仓库，点击“New Pull Request”按钮，提交你的 Pull
   Request。请详细描述你的更改，并关联相关 issue（如果有）。

8. **代码审查**：你的 Pull Request 将由项目维护者进行审查。请耐心等待，并根据反馈进行修改。

## 贡献准则

### 报告问题

如果你发现了 Bug 或有改进建议，请通过 [GitHub Issues](https://github.com/wangziwenhk/riddle-lang/issues) 报告问题。为了让我们更好地帮助你，请提供尽可能详细的信息：

- 你使用的 Riddle Language 版本
- 复现步骤
- 错误日志（如果有）
- 你的操作系统和编译器版本

### 提交代码

- **确保代码质量**：请在提交之前运行所有相关测试，确保你的代码不会破坏现有功能。

- **单一责任原则**：每个 Pull Request 应专注于一个问题或功能。如果你同时在修复多个问题，请分开提交。

- **文档更新**：如果你的更改涉及公共 API，请确保相应的文档也得到更新。

## 编码规范

- **风格指南**：Riddle Language 遵循 Kotlin 风格规范，同时进行了简化。

- **注释与文档**：代码应具有清晰的注释，特别是在复杂的逻辑和边缘情况下。我们鼓励你为新功能编写详细的 API 文档。

## 与社区互动

- 如果你对某个问题有疑问或建议，欢迎在 GitHub Discussions 或者通过 [我们的开发者论坛](https://github.com/wangziwenhk/riddle-lang/discussions) 与社区交流。
- 我们希望在讨论中保持尊重和包容，所有贡献者都应遵守 [行为准则](https://github.com/wangziwenhk/riddle-lang/blob/main/.github/CODE_OF_CONDUCT.md)。

## License

通过贡献代码，即表示你同意将你的贡献发布在 [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html) 下。