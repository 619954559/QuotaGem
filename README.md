# QuotaGem

简体中文 | [English](./README.en.md)

## Fork 与汉化说明

本仓库是 [619954559/QuotaGem](https://github.com/619954559/QuotaGem)，fork 自 [gyozalab/QuotaGem](https://github.com/gyozalab/QuotaGem)。当前 fork 版本为 **2.0.2**，基于上游 **2.0.1**，由 619954559 维护简体中文本地化；原作者与上游贡献者的署名和许可信息保留。

汉化覆盖用量面板、设置、托盘菜单、通知和 Claude 登录窗口标题。新安装默认使用简体中文，原有英文、繁体中文和已有语言设置仍保留；功能、布局及用量读取机制保持上游行为。README 预览图片沿用上游，图片内的文字可能仍为繁体中文。

[下载本 fork 的简体中文免安装版](https://github.com/619954559/QuotaGem/releases/latest) · [2.0.2 更新说明](./RELEASE_NOTES.md)

<img src="./docs/images/cover.png" alt="QuotaGem" width="100%" />

一个为 `Claude`、`Codex` 与 `Antigravity` 用量而生的 Windows 系统托盘小工具。

它让你不用一直打开网页或切换分页，就能在桌面上快速看到：

- 目前用量
- 五小时（Session）与每周（Weekly）状态
- 重置时间
- 警告与危险阈值

## 2.0 有什么新的

- 🆕 添加 `Antigravity` 第三 provider，自动拆成 `Gemini` 与 `Claude and GPT` 两轨
- 🔄 精简面板改成圆环设计，主显五小时额度，每周用量收进 hover
- 🛡️ 单一实例保护，重复打开或开机自启都只会有一个窗口
- 📦 改用 Tauri 2 重写，提供免安装版，体积更小、更省内存
- 🚀 开机自启会跟着目前运行的 `quotagem.exe` 路径更新，搬动免安装版后再开一次即可

## 画面预览

### 展开面板

<img src="./docs/images/expanded-panel.png" alt="QuotaGem 展开面板，同时显示 Claude、Codex 与 Antigravity 用量" width="66%" />

### 精简面板

<img src="./docs/images/compact-panel.png" alt="QuotaGem 精简面板，三个 provider 的圆环设计，Antigravity 以双色分割环显示" width="66%" />

### 用量警告与危险提醒

<img src="./docs/images/expanded-panel-alerts.png" alt="QuotaGem 展开面板显示警告与危险阈值提醒" width="66%" />

### 设置面板

<img src="./docs/images/settings-panel.png" alt="QuotaGem 设置面板" width="66%" />

### 浅色主题

<p>
  <img src="./docs/images/expanded-panel-white.png" alt="QuotaGem 浅色展开面板" width="49%" />
  <img src="./docs/images/compact-panel-white.png" alt="QuotaGem 浅色精简面板" width="49%" />
</p>

### 系统托盘图标

<img src="./docs/images/tray-icon-list.png" alt="QuotaGem 系统托盘图标" width="33%" />

## 支持的用量来源

- 系统托盘常驻，打开就看
- `expanded` 与 `compact` 两种面板
- 同时查看 `Claude`、`Codex` 与 `Antigravity`
- `Antigravity` 会分开显示 `Gemini` 与 `Claude and GPT` 用量
- 也可以自由选择只显示其中一两个
- 精简面板直接显示五小时额度，每周用量收在 hover 提示里
- 自订警告与危险阈值
- 背景通知提醒
- 可调整主题、透明度与缩放
- 开机自启，跟着 Windows 一起醒来
- 简体中文、繁体中文与英文界面切换
- 内置 `Connect Claude` 流程

通过内置 `Connect Claude` 流程取得必要 session 信息，并用后端直接读取 Claude 用量状态。2.0 不再依赖隐藏浏览器窗口。

### Codex

优先通过本机 `codex app-server` 读取帐号层 rate limit，显示包含桌面版背景消耗在内的即时额度状态。若 app-server 无法取得数据，会 fallback 到 `.codex/sessions` 的 session JSONL 解析。

### Antigravity

侦测本机已登录的 Antigravity language server，通过唯读 RPC 取得额度摘要。QuotaGem 只读取额度，不送出 prompt，也不消耗模型额度。

## 功能

- Windows 系统托盘常驻，左键开关面板，右键显示菜单。
- `compact` 与 `expanded` 两种面板。
- 三个 provider 可自由显示或隐藏。
- 五小时与每周用量可视化。
- 自订 warning / danger 阈值。
- Windows 通知，可选全部通知或只通知危险状态。
- 同一阈值跨刷新去重，避免重复提醒。
- 自动刷新与手动立即刷新。
- 深色与浅色主题。
- 透明度、缩放、时间格式与日期格式设置。
- 简体中文、繁体中文与英文界面。
- 开机自启，portable exe 搬动后重新运行即可更新启动路径。

底层用 Tauri（Rust + 系统内置 WebView2）打造，免安装版个位数 MB、内存占用低，常驻一整天也很安静。

## 下载使用

已有安装可在设置中选择“简体中文”。本 fork 的 Release 提供预编译的 Windows x64 简体中文免安装包，无需自行安装 Rust 或 Node.js。

前往 [Releases](https://github.com/619954559/QuotaGem/releases) 页面，下载最新的免安装版（`QuotaGem_*_zh-CN_x64-portable.zip`）。解压缩后运行 `quotagem.exe`，需要跟着 Windows 启动时，再到设置面板打开开机自启。

开机自启会指向目前运行的 `quotagem.exe` 路径；如果你搬动 exe，从新位置运行一次即可更新 Windows 开机启动项。

## 开发

QuotaGem 2.0 使用 Tauri 2、Rust、React 与 TypeScript。

以 Tauri 2（Rust + React）开发，需先安装 Rust 工具链与 Node.js。

```powershell
git clone https://github.com/619954559/QuotaGem.git
cd QuotaGem
npm install
npx tauri dev      # 开发模式
npx tauri build    # 建置 app 与 Windows bundle
npm run package:portable
```

## 建置

```powershell
npm test
npm run build
npm run tauri:build
npm run package:portable
```

portable zip 会输出到：

```text
src-tauri\target\release\bundle\portable\QuotaGem_2.0.2_x64-portable.zip
```

GitHub Actions 发布包命名为 `QuotaGem_2.0.2_zh-CN_x64-portable.zip`，随包提供 `SHA256SUMS.txt`。本地打包脚本仍使用上述通用文件名。
