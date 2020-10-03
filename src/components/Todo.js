import React from 'react';
import CheckedIcon from './../images/checked.svg';
import UnCheckedIcon from './../images/not-checked.svg';

import './Todo.scss';

const Todo = ({ onClick, completed, text }) => (
  <li
    className="listItem"
    onClick={onClick}
    // style={{
    //   textDecoration: completed ? 'line-through' : 'none'
    // }}
  >
    {completed ? <img src={CheckedIcon} alt="blue Checked"></img> : <img src={UnCheckedIcon} alt="unchecked icon"></img>}
    <span className={completed ? "underline" : ""}>{text}</span>
  </li>
);

export default Todo;