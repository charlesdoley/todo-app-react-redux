import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import './App.scss';

const App = () => {
  return (
  <div className="container">
    <div className="flexContainer">
      <h1>Tasks</h1>
      <AddTodo />    
      <VisibleTodoList />
    </div>
  </div>
)};

export default App;