import './ToDoTasks.css';
import Task from './Task/Task';
import { useSelector } from 'react-redux';

function ToDoTasks(){

    let tasks = useSelector(store => store.tasks.filteredTasks)

    return(
            <div className="ToDoTasks">
                {
                    tasks.length > 0 ? <Task tasks={tasks}/> : <p className='Message'>No tasks</p>
                }
            </div>
    )
}

export default ToDoTasks;