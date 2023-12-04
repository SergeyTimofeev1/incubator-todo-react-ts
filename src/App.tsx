import React from 'react';
import './App.css';
import {TaskType, TodoList} from "./components/TodoList/TodoList";

function App() {
    const task_1: Array<TaskType> = [
        {id: 1, title: "HTML&CSS", isCompleted: true},
        {id: 2, title: "JS", isCompleted: true},
        {id: 3, title: "ReactJS", isCompleted: false}
    ]

    const task_2: Array<TaskType> = [
        {id: 1, title: "123", isCompleted: true},
        {id: 2, title: "gdfsfg", isCompleted: true},
        {id: 3, title: "dhht", isCompleted: false},
    ]

    return (
        <div className="App">
            <TodoList tasks={task_1} title='What to learn'/>
            <TodoList tasks={task_2} title='What to eat'/>
        </div>
    );
}

export default App;
