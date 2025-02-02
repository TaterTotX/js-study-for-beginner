# js-study-for-beginner
![img.png](image%2Fimg.png)

**js-study-for-beginner** 是一个简单的待办事项项目，专为 JavaScript 初学者设计，帮助学习和实践基础的 JavaScript 技能。项目的主要功能包括添加、标记完成、删除待办事项，以及将数据存储到浏览器的本地存储中。该项目的目标是通过一个简洁易懂的应用程序，逐步引导初学者理解 JavaScript 中的数据处理和交互功能。

## 实现功能介绍

### 1. 添加待办事项
- 用户可以在输入框中输入任务名称，然后点击 **"添加"** 按钮，将任务添加到待办列表中。
- 每个任务在列表中都会显示，并且带有 **"完成"** 和 **"删除"** 按钮。

### 2. 标记任务为已完成
- 列表中的每个任务旁边有一个 **"完成"** 按钮。
- 点击 **"完成"** 按钮后，任务将被标记为已完成。
- 已完成的任务在视觉上与未完成任务有区分，比如加上删除线或变灰色，方便用户快速识别。

### 3. 删除待办事项
- 每个任务旁边都有一个 **"删除"** 按钮。
- 用户点击 **"删除"** 按钮后，任务会从列表中移除。

### 4. 保存待办事项到本地存储
- 当用户添加、删除或完成任务时，所有任务的状态都会保存到浏览器的 **localStorage** 中。
- 这样，即使刷新页面，任务列表也会保持原来的状态。

### 5. 从 API 异步加载任务数据
- 在页面加载时，应用会从外部 API（例如 [JSONPlaceholder](https://jsonplaceholder.typicode.com/)）异步获取一些初始任务数据。
- 这些初始任务会自动加载到任务列表中，并且与用户手动添加的任务一起显示。

### 6. 界面简洁清晰，易于使用
- 应用包含一个输入框、一个 **"添加"** 按钮，以及显示任务的列表区域。
- 已完成任务与未完成任务有清晰的视觉区分，确保用户可以快速了解任务状态。

### 7. 任务数量限制
- 待办列表中的任务数量最多为 **10** 个。
- 如果用户尝试添加超过 10 个任务，会提示 **"任务列表已满"**，让用户管理当前的任务。

### 8. 清空所有任务
- 应用提供了一个 **"清空任务列表"** 按钮。
- 点击该按钮，用户可以一键删除所有任务，方便重新开始。

## 安装与运行

1. **克隆仓库**
   ```sh
   git clone https://github.com/TaterTotX/js-study-for-beginner.git
   ```

2. **打开项目文件**
   使用浏览器打开项目的 **index.html** 文件，即可查看并使用该应用。


3. **项目结构**
```
app.js 为启动文件
button文件夹 为按钮实现逻辑
animation文件夹 为按钮动画函数
```
   

## 技术栈
- **HTML/CSS**: 构建界面和样式。
- **JavaScript**: 实现逻辑功能，包括操作 DOM、管理任务状态、与 API 交互等。
- **localStorage**: 用于持久化存储用户的任务数据。

## 学习目标
- 通过这个项目，初学者可以学习如何操作 DOM 元素、处理用户输入，以及与浏览器存储进行交互。
- 该项目还涵盖了与外部 API 的简单交互，帮助理解 JavaScript 中的异步操作。

