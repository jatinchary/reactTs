import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

// Define the shape of our todos data
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Define a type for the slice state
interface TodosState {
  isLoading: boolean;
  data: Todo[] | null;
  isErrors: boolean;
}

// Async thunk to fetch todos
// import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk<Todo[], void >('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  return await response.json();
});

// import { AsyncThunkAction } from '@reduxjs/toolkit';

// export const fetchTodos = createAsyncThunk<Todo[], void>('todos/fetchTodos', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   return await response.json();
// });



// Define the slice
const todoSlice = createSlice({
  name: 'todos',
  initialState: { isLoading: false, data: null, isErrors: false } as TodosState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
      state.isErrors = true;
    });
  },
});

// Export the reducer
export default todoSlice.reducer;

// Optionally export the actions if needed elsewhere
// export const {} = todoSlice.actions;
