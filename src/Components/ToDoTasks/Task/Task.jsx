import './Task.css';
import 'animate.css';
import trashcan from '../../../assets/icons/trashcan-icon.svg';
import change from '../../../assets/icons/change-icon.png';
import pallette from '../../../assets/icons/pallete-icon.png';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion } from '../../../Reducers/taskSlice';


function Task({tasks}){

    const dispatch = useDispatch();

    function deleteTaskHandler(id){
        dispatch(deleteTask(id));
    }

    function taskCompletionHandler(id){
        dispatch(toggleTaskCompletion(id));
    }


    return(
        <div className='List'>
            {
                tasks.map(task => (
                    <li key={task.id} className={`animate__animated animate__bounceInLeft ${task.completed ? 'Uncompleted' : 'Completed'}`}  
                                     onClick={() => taskCompletionHandler(task.id)}>
                        {task.text}
                        <div className='Task-icons'>
                            <img onClick={() => deleteTaskHandler(task.id)} src={trashcan} alt="trashcan" />
                            <img src={change} alt="change" />
                            <img src={pallette} alt="pallette" />
                        </div>
                    </li>
                ))
            }
        </div>
    )
}

export default Task;