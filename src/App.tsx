import './App.css';
import {TaskType, TodoList} from "./components/TodoList/TodoList";
import {useState} from "react";

export type FiltersValueType = 'All' | 'Completed' | 'Active'


function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const [filter, setFilter] = useState<FiltersValueType>('All')


    const removeTask = (id: number) => {
        const resultTasks = tasks.filter(t => t.id !== id)
        setTasks(resultTasks)
    }

    const changeFilter = (filter: FiltersValueType) => {
        setFilter(filter)
        console.log(filter)
    }

    let tasksForTodoList = tasks

    if(filter === 'Completed') {
        tasksForTodoList = tasks.filter(t => t.isDone)
    }
    if(filter === 'Active') {
        tasksForTodoList = tasks.filter(t => !t.isDone)
    }




    return (
        <div className="App">
            <TodoList
                tasks={tasksForTodoList}
                title='What to learn'
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
