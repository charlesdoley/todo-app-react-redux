import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, sortTodo } from './../actions/index'
import AddBlue from './../images/add-blue.svg'
import './AddTodo.scss'

const AddTodo = (props) => {
    let input;
    const [flag, setFlag] = useState(false);
    return (
        <div className="inputTodo">
            <form onSubmit={
                e => {
                    e.preventDefault();
                    if(!input.value.trim()){
                        return
                    }
                    if(input.value.trim().length > 20){
                        setFlag(true);
                        return
                    }
                    setFlag(false);
                    props.dispatch(addTodo(input.value));
                    input.value = '';
                }
            }>
                <input placeholder="Add a task" type="text" ref={el => (input = el)}></input>
                <img className="blueIcon" src={AddBlue} alt="blue icon"></img>
                <button onClick={()=> props.dispatch(sortTodo())} type="button">Sort</button>
                <button type="submit">Add</button>
            </form>
            {flag ? <p className="errorInput">Must be 20 characters or less</p>:<></>}

        </div>
    )
}
export default connect()(AddTodo);
