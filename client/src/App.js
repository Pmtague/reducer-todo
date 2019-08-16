import React, { useReducer } from 'react';
import './App.css';

import { initialState, itemReducer } from './reducers/itemReducer';

import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';

function App() {
  const [ state, dispatch ] = useReducer(itemReducer, initialState);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList dispatch={dispatch} state={state} />
    </div>
  );
}

export default App;
