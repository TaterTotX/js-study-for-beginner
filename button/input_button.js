import {complete_button} from "./complete_button.js";
import {delete_button} from "./delete_button.js";
import {saveTasksToLocalStorage} from "../data/save_data.js";

export function input_button(taskInput,taskList){

    if (taskList.childElementCount<=10) {
        // 获取输入框中的任务内容
        const taskText = taskInput.value;

        // 检查输入框是否为空
        if (taskText.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        // 创建新的li任务项并添加到列表
        const newTaskItem = document.createElement("li");

        //添加按钮
        complete_button(newTaskItem,taskList);
        delete_button(newTaskItem,taskList);

        //添加文本添加文本内容
        const taskTextNode = document.createTextNode(taskText); // 创建任务文本节点

        newTaskItem.appendChild(taskTextNode); // 将文本节点添加到任务项
        taskList.appendChild(newTaskItem);//将 newTaskItem 添加到任务列表 taskList
        saveTasksToLocalStorage(taskList)

        // 清空输入框
        taskInput.value = "";
    }else {
        alert("The task volume is full, and opening a member can increase the task volume.");
    }

}