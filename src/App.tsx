import './App.css';
import {TaskType, TodoList} from "./components/TodoList/TodoList";
import {useState} from "react";


function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: "HTML&CSS", isCompleted: true},
        {id: 2, title: "JS", isCompleted: true},
        {id: 3, title: "ReactJS", isCompleted: false}
    ])


    const removeTask = (id: number) => {
        const resultTasks = tasks.filter(t => t.id !== id)
        setTasks(resultTasks)
    }

    return (
        <div className="App">
            <TodoList
                tasks={tasks}
                title='What to learn'
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
