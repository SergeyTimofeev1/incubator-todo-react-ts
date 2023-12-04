import React from "react";
import Button from "../ui/Button/Button";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
}

export type TaskType = {
    id: number,
    isCompleted: boolean
    title: string,
}

export function TodoList(props: TodoListPropsType) {
    const {title, tasks} = props

    return (
        <div className='todoList'>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button>+</Button>
            </div>
            <ul>
                {/*<li><input type="checkbox" checked={true}/> <span>HTML&CSS</span></li>*/}
                {/*<li><input type="checkbox" checked={true}/> <span>JS</span></li>*/}
                {/*<li><input type="checkbox" checked={false}/> <span>React</span></li>*/}
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <input type="checkbox" defaultChecked={task.isCompleted}/>
                            <span>{task.title}</span>
                        </li>
                    ))
                }
            </ul>
            <div>
                <Button>All</Button>
                <Button>Active</Button>
                <Button>Completed</Button>
            </div>
        </div>
    )
}
