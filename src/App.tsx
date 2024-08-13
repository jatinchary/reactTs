import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { fetchTodos } from './redux/slice/Todo';
import { AppDispatch } from './redux/store'; // Ensure this path is correct
import './App.css';

// export const useAppDispatch = () => ;

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface RootState {
  todo: {
    isLoading: boolean;
    data?: Todo[];
    isErrors: boolean;
  };
}

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const state = useSelector((state: RootState) => state);

  console.log("state", state);

  if (state.todo.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-center w-full h-full">
      <button onClick={() => dispatch(fetchTodos())} className="bg-black text-white px-4 py-2 rounded text-center">
        Fetch Todos
      </button>
      {
        state.todo.data && state.todo.data.map((todo, index) => (
          <div key={index}>
            <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
              <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">Quisque</span>
                <h2 className="text-xl font-semibold tracking-wide">{todo.id}</h2>
              </div>
              <p className="dark:text-gray-800">{todo.title}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default App;
