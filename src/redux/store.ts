import { configureStore  } from '@reduxjs/toolkit';
import todoReducer from './slice/Todo';

// // Define a type for the slice of state managed by todoReducer
// interface TodoState {
//   isLoading: boolean;
//   data: null | Array<{
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
//   }>;
//   isErrors: boolean;
// }

// // Define a type for the entire Redux store's state
// interface RootState {
//   todo: TodoState;
// }

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// For typed usage of dispatch and getState
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
