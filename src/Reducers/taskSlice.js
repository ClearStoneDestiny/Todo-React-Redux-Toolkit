import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    tasks: [],
    filteredTasks: [],
    newText: '',
    isButtonSelect: false,
    filter: 'SHOW_ALL_TASKS',
};

const applyFilter = (tasks, filter) => {
  switch (filter) {
      case 'SHOW_COMPLETED_TASKS':
          return tasks.filter(task => task.completed === true);
      case 'SHOW_UNCOMPLETED_TASKS':
          return tasks.filter(task => task.completed === false);
      default:
          return tasks;
  }
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
      addTask: (state) => {
          const updatedTasks = [...state.tasks, { id: state.tasks.length + 1, text: state.newText, completed: false }];
          state.tasks = updatedTasks;
          state.filteredTasks = applyFilter(updatedTasks, state.filter);
          state.newText = '';
      },
      changeInputValue: (state, action) => {
          state.newText = action.payload;
      },
      deleteTask: (state, action) => {
          const tasksAfterDeletion = state.tasks.filter(task => task.id !== action.payload);
          state.tasks = tasksAfterDeletion;
          state.filteredTasks = applyFilter(tasksAfterDeletion, state.filter);
      },
      deleteAllTasks: (state) => {
          state.tasks = [];
          state.filteredTasks = [];
      },
      toggleTaskCompletion: (state, action) => {
          const tasksAfterCompletionToggle = state.tasks.map(task =>
              task.id === action.payload ? { ...task, completed: !task.completed } : task
          );
          state.tasks = tasksAfterCompletionToggle;
          state.filteredTasks = applyFilter(tasksAfterCompletionToggle, state.filter);
      },
      showCompletedTasks: (state) => {
          state.filter = 'SHOW_COMPLETED_TASKS';
          state.filteredTasks = applyFilter(state.tasks, state.filter);
      },
      showUncompletedTasks: (state) => {
          state.filter = 'SHOW_UNCOMPLETED_TASKS';
          state.filteredTasks = applyFilter(state.tasks, state.filter);
      },
      showAllTasks: (state) => {
          state.filter = 'SHOW_ALL_TASKS';
          state.filteredTasks = applyFilter(state.tasks, state.filter);
      },
      sortTasksDown: (state) => {
          state.filteredTasks = [...state.tasks].sort((a, b) => a.text.localeCompare(b.text));
      },
      sortTasksUp: (state) => {
          state.filteredTasks = [...state.tasks].sort((a, b) => b.text.localeCompare(a.text));
      },
  },
});

export const {
  addTask,
  changeInputValue,
  deleteTask,
  deleteAllTasks,
  toggleTaskCompletion,
  showCompletedTasks,
  showUncompletedTasks,
  showAllTasks,
  sortTasksDown,
  sortTasksUp,
} = tasksSlice.actions;

export default tasksSlice.reducer;