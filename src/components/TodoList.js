import React, { useEffect } from 'react';
import Todo from './Todo';
import './TodoList.scss'

const TodoList = ({ todos, toggleTodo, sortTodo }) => {
  const active = todos.filter((value) => value.completed === false);
  const completed = todos.filter((value) => value.completed === true);
  return (
    <>
      <div className="gridDisplay">
        {active.length > 0 && <div className="toDoList">
          <h2>To-do</h2>
          <ul>
            {active.map((todo,index) => {
              if(index<=10) {
                return(<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />)
              }})
              }
          </ul>
          {active.length > 10 && <div className="loadMore">Load More...</div>}
        </div>}
        {completed.length > 0 && <div className="completedList">
          <h2>Completed</h2>
          <ul>
            {completed.map((todo, index) => {
              if (index <= 10) {
                return (<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />)
              }})
            }
          </ul>
          {completed.length > 10 && <div className="loadMore">Load More...</div>}
        </div>}
      </div>
    </>
  )};

export default TodoList;
