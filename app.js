// 导入所有按钮和功能模块
import { input_button } from './button/input_button.js';
import { delete_all_button } from './button/delete_all_button.js';
import { loadTasksFromLocalStorage } from './data/load_data.js';
import { saveTasksToLocalStorage } from './data/save_data.js';
import {fetchData} from "./data/test_api.js";

// 1. 选择 DOM 元素
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const taskList_api = document.getElementById("task-list-api");
const deletedTaskBtn = document.getElementById("delete-task-btn");



// 页面加载时调用函数
document.addEventListener("DOMContentLoaded", function() {
    fetchData(taskList_api).then(r =>{console.log("api获取成功")} ).catch(error => {
        console.error('api错误:', error);
    })
    loadTasksFromLocalStorage(taskList); // 页面加载时从 localStorage 加载任务

});



// 添加点击事件监听器
addTaskBtn.addEventListener("click", function() {
    input_button(taskInput,taskList);
    saveTasksToLocalStorage(taskList)
});


//添加删除事件
deletedTaskBtn.addEventListener("click", function() {
    delete_all_button(taskList)
    saveTasksToLocalStorage(taskList)
})



//添加回车时间监听
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        input_button(taskInput,taskList);
        saveTasksToLocalStorage(taskList)
    }
});
