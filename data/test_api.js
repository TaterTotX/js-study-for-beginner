// 定义一个异步函数
export async function fetchData(taskList) {
    try {
        // 使用 await 等待 fetch 的结果
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');

        // 检查响应是否正常
        if (!response.ok) {
            throw new Error('网络响应不正常');
        }

        // 等待响应解析为 JSON
        const data = await response.json();
        // 获取前五条任务
        const task_List = data.slice(0, 5).map(task => ({ taskName: task.title }));

        // 导出数组（在控制台打印）
        console.log(task_List);




        // 遍历标题数组，将每个任务添加到列表的最上方
        task_List.forEach(titleObj => {
            const li = document.createElement("li");
            li.textContent = titleObj.taskName; // 使用 taskName 属性

            // 将新创建的 li 插入到 taskList 的最上方
            taskList.insertBefore(li, taskList.firstChild);})


        // 如果你需要返回这个数组，可以直接 return
        // return taskList;
    } catch (error) {
        console.error('获取数据失败:', error);
    }
}


