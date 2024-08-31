import './App.css';
import ToDoButtons from './ToDoButtons/ToDoButtons';
import ToDoInput from './ToDoInput/ToDoInput';
import ToDoTasks from './ToDoTasks/ToDoTasks';

function App() {
  return (
    <div className="App">
        <ToDoInput />
        <ToDoButtons />
        <ToDoTasks />
    </div>
  );
}

export default App;
