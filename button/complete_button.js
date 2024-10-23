import {clearAnimationClasses} from "../animation/animation_function.js";
import {saveTasksToLocalStorage} from "../data/save_data.js";

export function complete_button(newTaskItem,taskList){

    //创建按钮
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "complete";
    completeBtn.classList.add("bg-gray-500", "text-white", "ml-2", "px-2", "py-1", "rounded");

    newTaskItem.appendChild(completeBtn);


    // 添加完成按钮的点击事件
    completeBtn.addEventListener("click", function() {

        clearAnimationClasses(newTaskItem);
        // 添加动画类
        newTaskItem.classList.add( "animate__animated","animate__flash");

        newTaskItem.addEventListener("animationend", function() {
            newTaskItem.style.textDecoration = "line-through"; // 添加删除线，表示已完成
            saveTasksToLocalStorage(taskList)
        }, { once: true });

    });
}