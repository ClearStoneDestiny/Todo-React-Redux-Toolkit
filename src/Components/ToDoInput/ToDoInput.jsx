import './ToDoInput.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, changeInputValue } from '../../Reducers/taskSlice';
import { useState } from 'react';

function ToDoInput(){

    const dispatch = useDispatch();
    let value = useSelector(state => state.tasks.newText);
    const [showMessage, setShowMessage] = useState(false);

    function inputValueHandler(e){
        let inputValue = e.target.value;
        dispatch(changeInputValue(inputValue));
        setShowMessage(false);
    }

    function addTaskHandler(){
        if(value.trim().length === 0){
            setShowMessage(true);  
        }
        else{
            dispatch(addTask());
            setShowMessage(false);
        }
    }
    

    return(
            <div className="ToDoInput">
                <input type="text" placeholder='New Task' onChange={inputValueHandler} value={value}/>
                <button onClick={addTaskHandler}>Add</button>
                {showMessage && <div className='Input-message'>Please enter a task</div>}
            </div>
    )
}

export default ToDoInput;