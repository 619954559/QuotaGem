# QuotaGem 2.0.2 简体中文免安装版

本版本由 619954559 维护，是 gyozalab/QuotaGem 的简体中文 fork，基于上游 2.0.1。感谢原作者及上游贡献者；保留原有署名与许可信息。

## 本版修改

- 新增简体中文用量面板、设置、托盘菜单、通知及 Claude 登录窗口标题。
- 新安装默认使用简体中文；保留英文、繁体中文与已有语言设置。
- 将 fork 版本、仓库地址、README 下载链接及发布包命名统一为本 fork 的 2.0.2。
- 提供 GitHub Actions Windows 测试、编译及免安装包发布流程。
- 保持原有功能、布局及 Claude、Codex、Antigravity 用量读取方式。

## 使用方法

下载 `QuotaGem_2.0.2_zh-CN_x64-portable.zip`，解压后运行 `quotagem.exe`。需要 Windows x64 与 WebView2 Runtime，无需 Rust 或 Node.js。

升级前从托盘退出旧版。已有设置的用户可在“设置 → 语言”中选择“简体中文”。Claude 登录由本人完成；Codex 需本地登录，Antigravity 需保持登录并运行。

`SHA256SUMS.txt` 提供 ZIP 校验值。请从本 fork 的 Release 下载；上游 Release 不包含本 fork 的简体中文修改。

## 验证与来源

发布流程运行前端与 Rust 测试并生成 Windows release exe；详细结果见对应 GitHub Actions 运行记录。

- 本 fork：https://github.com/619954559/QuotaGem
- 本 fork Release：https://github.com/619954559/QuotaGem/releases
- 上游：https://github.com/gyozalab/QuotaGem

预览图片沿用上游。Claude session 用量读取方式继承自上游，不能保证接口长期可用或零账号风控风险。
