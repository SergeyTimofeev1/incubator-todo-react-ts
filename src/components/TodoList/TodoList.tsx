import React, {useState} from "react";
import Button from "../ui/Button/Button";
import {FiltersValueType} from "../../App";

type TodoListPropsType = {
    title: string,
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFilter: (filter: FiltersValueType) => void
}

export type TaskType = {
    id: number,
    isDone: boolean
    title: string,
}

export function TodoList(props: TodoListPropsType) {
    const {title, tasks, removeTask, changeFilter} = props
    const [filters, setFilters] = useState<Array<FiltersValueType>>(['All', 'Active', 'Completed'])

    return (
        <div className='todoList'>
            <h3>{title}</h3>
            <div>
                <input/>
                <Button>+</Button>
            </div>
            <ul>
                {
                    tasks.map(task => (
                        <li key={task.id}>
                            <input type="checkbox" defaultChecked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={() => removeTask(task.id)}>X</button>
                        </li>
                    ))
                }
            </ul>
            <div>
                {
                    filters.map((el, index) => (
                        <button
                            onClick={() => changeFilter(el)}
                            key={index}>
                            {el}
                        </button>)
                    )
                }
            </div>
        </div>
    )
}
