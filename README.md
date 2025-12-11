# PocketVerse - 个人导航站

一个简洁、现代化的个人导航网站，帮助您快速访问常用网站和工具。

## 功能特性

- 🎨 现代化、美观的UI设计
- 📱 完全响应式布局，支持各种设备
- 🔍 内置搜索引擎切换（百度/谷歌）
- 📂 网站分类管理
- 🚀 快速访问常用网站
- 💾 纯静态实现，无需服务器

## 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式设计
- **JavaScript (ES6+)** - 交互逻辑

## 项目结构

```
PocketVerse/
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # 交互逻辑
├── site.webmanifest    # Web应用清单
├── .gitignore         # Git忽略配置
└── README.md          # 项目说明
```

## 支持静态化和GitHub部署

### 静态化支持

该项目完全支持静态化，因为：

1. **纯前端实现** - 不依赖任何服务器端技术
2. **无动态内容** - 所有数据都在JavaScript中硬编码
3. **无API调用** - 不依赖外部API服务
4. **本地存储** - 无需数据库或后端存储

### GitHub部署支持

该项目完全支持GitHub Pages部署，因为：

1. **静态文件结构** - 符合GitHub Pages的要求
2. **无构建过程** - 不需要构建工具或CI/CD配置
3. **简单配置** - 只需要启用GitHub Pages即可

## 部署到GitHub Pages

### 方法一：直接部署主分支

1. **创建GitHub仓库**
   - 在GitHub上创建一个新仓库
   - 命名为 `your-username.github.io`（用于个人主页）或任意名称

2. **克隆仓库到本地**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

3. **复制项目文件**
   - 将本项目的所有文件复制到克隆的仓库目录中

4. **提交并推送**
   ```bash
   cd your-repo-name
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

5. **启用GitHub Pages**
   - 进入仓库的Settings页面
   - 找到"Pages"选项
   - 在"Source"下拉菜单中选择"main"分支
   - 点击"Save"按钮
   - 等待几分钟，您的网站将可在 `https://your-username.github.io/your-repo-name/` 访问

### 方法二：使用GitHub Actions（可选）

如果您未来需要添加构建过程，可以使用GitHub Actions自动部署。

## 自定义内容

### 添加新网站

1. 打开 `script.js` 文件
2. 在 `categories` 数组中找到对应的分类
3. 在 `websites` 数组中添加新的网站对象：
   ```javascript
   { name: "网站名称", url: "网站URL" }
   ```

### 添加新分类

1. 打开 `script.js` 文件
2. 在 `categories` 数组中添加新的分类对象：
   ```javascript
   {
       name: "分类名称",
       websites: [
           { name: "网站1", url: "url1" },
           { name: "网站2", url: "url2" }
       ]
   }
   ```

### 修改样式

1. 打开 `style.css` 文件
2. 修改相应的CSS规则

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License
