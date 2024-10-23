// 定义加载任务的函数
import {complete_button} from "../button/complete_button.js";
import {delete_button} from "../button/delete_button.js";

export function loadTasksFromLocalStorage(taskList) {
    const tasks = JSON.parse(localStorage.getItem("tasks")); // 获取保存的任务

    if (tasks) {
        tasks.forEach(task => {
            // 创建新的任务项
            const newTaskItem = document.createElement("li");

            // 调用已定义的函数为任务项添加按钮
            complete_button(newTaskItem,taskList);
            delete_button(newTaskItem,taskList);


            // 添加任务文本
            const taskTextNode = document.createTextNode(task.text);
            newTaskItem.appendChild(taskTextNode);

            // 如果任务已完成，添加删除线
            if (task.completed) {
                newTaskItem.style.textDecoration = "line-through";
            }




            // 将任务项添加到 taskList
            taskList.appendChild(newTaskItem);
        });
    }

}
