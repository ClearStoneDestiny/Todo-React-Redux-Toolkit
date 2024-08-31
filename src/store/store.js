import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../Reducers/taskSlice';

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;