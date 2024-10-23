import {clearAnimationClasses} from "../animation/animation_function.js";
import {saveTasksToLocalStorage} from "../data/save_data.js";

export function delete_button(newTaskItem,taskList){
    // 创建删除按钮
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.classList.add("bg-black", "text-white", "ml-2", "mr-2", "px-2", "py-1", "rounded");

    // 将按钮添加到任务项中
    newTaskItem.appendChild(deleteBtn);

    // 添加删除按钮的点击事件
    deleteBtn.addEventListener("click", function() {
        clearAnimationClasses(newTaskItem);
        // 添加动画类
        newTaskItem.classList.add( "animate__animated","animate__bounce");

        newTaskItem.addEventListener("animationend", function() {
            taskList.removeChild(newTaskItem);
            saveTasksToLocalStorage(taskList)
        }, { once: true });


    });
}