module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", ["root", "docs", "site", "foo", "bar"]],
    "scope-empty": [2, "never"],
  },
  prompt: {
    settings: {
      scopeEnumSeparator: ",",
    },
    messages: {
      skip: "按回车跳过",
      max: "最多 %d 字符",
      min: "最少 %d 字符",
      emptyWarning: "不能为空",
      upperLimitWarning: "超过上限",
      lowerLimitWarning: "超过下限",
    },
    questions: {
      type: {
        description: "请选择这次提交的类型：",
        enum: {
          feat: {
            description: "新特性",
            title: "Features",
            emoji: "✨",
          },
          fix: {
            description: "Bug 修复",
            title: "Bug Fixes",
            emoji: "🐛",
          },
          docs: {
            description: "文档更新",
            title: "Documentation",
            emoji: "📚",
          },
          style: {
            description: "代码格式修改（空格、格式户、分号等），不影响功能",
            title: "Styles",
            emoji: "💎",
          },
          refactor: {
            description: "代码重构（不是 Bug 修复，也不是增加新特性）",
            title: "Code Refactoring",
            emoji: "📦",
          },
          perf: {
            description: "优化代码执行效率",
            title: "Performance Improvements",
            emoji: "🚀",
          },
          test: {
            description: "增加新测试用例，或修改现有测试用例",
            title: "Tests",
            emoji: "🚨",
          },
          build: {
            description:
              "影响到编译系统或外部依赖（如 webpack、package.json 等）的修改",
            title: "Builds",
            emoji: "🛠",
          },
          ci: {
            description: "修改持续集成相关的配置",
            title: "Continuous Integrations",
            emoji: "⚙️",
          },
          revert: {
            description: "回滚上一次提交",
            title: "Reverts",
            emoji: "🗑",
          },
          chore: {
            description: "其他方面的修改",
            title: "Chores",
            emoji: "♻️",
          },
        },
      },
      scope: {
        description: "这次修改受影响的有哪些（如 root 或 Workspace 子项目名）",
      },
      subject: {
        description: "简单描述这次的改动",
      },
      body: {
        description: "详细描述这次的改动",
      },
      isBreaking: {
        description: "是否有不能向前兼容的重大修改",
      },
      breakingBody: {
        description: "REAKING CHANGE 需要详细描述这次修改影响的内容",
      },
      breaking: {
        description: "列出重大修改项",
      },
      isIssueAffected: {
        description: "是否针对记录的 Bug 所做修改",
      },
      issuesBody: {
        description: "如果是对已关闭 bug 的再次修改，请详细说明这次此改的内容",
      },
      issues: {
        description: '添加 bug 号码 (e.g. "LAW-123")',
      },
    },
  },
};
