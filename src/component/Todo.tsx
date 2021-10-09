
import React, { useState } from 'react'
import Task from './Task'


const TodoList = () => {

  const [curTask, setCurTask] = useState<{ text: string, time: number, isDone: boolean }[]>([]);
  const [completedtasks, setCompletedTasks] = useState<{ text: string, time: number, isDone: boolean }[]>([]);
  const [inputValue, setInputValue] = useState<string>("");


  const onChangeCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(ev.target.value)
  }

  const resetInput = () => {
    var temp = inputValue;
    var inputField = document.querySelector('input');
    if (inputField != null) {
      inputField.value = "";
    }
    setInputValue("");
  }

  const onKeyEnterCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    if (ev.key === "Enter") {
      addTask();
    }
  }

  const addTask = () => {
    if (inputValue === "") {
      alert("Task cannot be empty");
    } else {
      var newTask = curTask;
      const newTime = (new Date()).getTime();
      newTask.push({ text: inputValue, time: newTime, isDone: false });
      setCurTask(newTask);
      resetInput();
    }
  }

  const markDoneTask=(toMarkDoneTime:number)=>{
    var newTask = curTask;
    const task = newTask[newTask.findIndex(x=>x.time===toMarkDoneTime)];
    var newCpTask=completedtasks;
    const newTime = (new Date()).getTime();
    newCpTask.push({text:task.text,time:newTime,isDone:true});
    setCompletedTasks(newCpTask);
    newTask=newTask.filter(x=>x.time !==toMarkDoneTime);
    setCurTask(newTask);
  }


  const deleteTask = (toDeleteTime: number) => {
    var NewTask = curTask.filter(x => x.time !== toDeleteTime);
    setCurTask(NewTask);

  }

  return (
    <div className='max-w-4xl mx-auto'>
      <div className='flex space-x-1 py-6 '>
        <input className='border border-gray-400 w-full text-2xl font-mono' onKeyDown={onKeyEnterCallback} onChange={onChangeCallback}></input>
        <button className='border border-gray-400 w-8 font-bold font-mono' onClick={addTask}>+</button>
    
      </div>

      {curTask.map(x=><Task text={x.text}time={x.time} isDone={x.isDone} markDone={markDoneTask} deleteFunc={deleteTask}></Task>).reverse()}
      {completedtasks.map(x=><Task text={x.text} time={x.time} isDone={x.isDone} markDone={markDoneTask} deleteFunc={deleteTask}></Task>).reverse()}

    </div>
  )
}


export default TodoList