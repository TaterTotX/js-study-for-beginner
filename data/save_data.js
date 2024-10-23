//定义存储数据逻辑
export function saveTasksToLocalStorage(taskList) {
    const tasks = [];

    //获取所有li元素
    const taskItems = taskList.querySelectorAll("li");

    taskItems.forEach(taskItem => {
        const taskTextElement = taskItem.childNodes[2]; // 获取任务的文本节点
        const taskText = taskTextElement.textContent; // 获取任务的文本内容
        const isCompleted = taskItem.style.textDecoration === "line-through"; // 判断是否已完成

        // 创建一个数组
        const taskObject = {
            text: taskText,
            completed: isCompleted
        };

        tasks.push(taskObject); // 将任务对象添加到数组中
    });

    //保存数据到浏览器，JSON.stringify() 方法把 tasks 数组转换成JSON 字符串，“tasks”为自定义名称
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

