import React, { useState } from "react";

type TaskData = {
    text: string;
    time: number;
    isDone: boolean;
    markDone: Function;
    deleteFunc: Function;
}

const Task = ({ text, time, isDone, markDone, deleteFunc }: TaskData) => {
    const [IsMouseIn, setIsMouseIn] = useState<boolean>(false);
    const mouseEnter = () => {
        setIsMouseIn(true);
    }
    const mouseLeave = () => {
        setIsMouseIn(false);
    }

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b font-mono" onMouseEnter={() => mouseEnter()} onMouseLeave={() => mouseLeave()}>
            <span className="text-2xl" style={isDone ? { textDecoration: "line-through" } : {}}>{text}</span>
            <div className="flex items-center space-x-1" style={(IsMouseIn && !isDone) ? { visibility: "visible" } : { visibility: "hidden" }}>
                <button className="bg-green-400 w-24 text-2xl" onClick={() => markDone(time)}>Done</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFunc(time)}>Delete</button>
            </div>
        </div>
    )
}

export default Task;