import './ToDoButtons.css';
import { useSelector, useDispatch } from 'react-redux';
import { showCompletedTasks, showUncompletedTasks, 
    showAllTasks, deleteAllTasks, sortTasksUp, sortTasksDown } 
        from '../../Reducers/taskSlice';


function ToDoButtons(){

    const dispatch = useDispatch();

    function showCompletedHandler(){
        dispatch(showCompletedTasks());
    }

    function showUnCompletedHandler(){
        dispatch(showUncompletedTasks());
    }

    function showAllHandler(){
        dispatch(showAllTasks());
    }

    function deleteAllHandler(){
        dispatch(deleteAllTasks())
    }

    function sortDownHandler(){
        dispatch(sortTasksDown());
    }

    function sortUpHandler(){
        dispatch(sortTasksUp());
    }

    return(
            <div className='ToDoButtons'>
                <div className='Upper-buttons'>
                    <button onClick={showAllHandler}>All</button>
                    <button onClick={showCompletedHandler}>Completed</button>
                    <button onClick={showUnCompletedHandler}>Uncompleted</button>
                    <button onClick={deleteAllHandler}>Delete All</button>
                </div>
                <div className='Lower-buttons'>
                    <button onClick={sortDownHandler}>A-Z</button>
                    <button onClick={sortUpHandler}>Z-A</button>
                </div>
            </div>
    )
}

export default ToDoButtons;