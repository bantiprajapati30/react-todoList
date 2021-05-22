import React from 'react';

const ToDoList=(props)=> {
 
        return (
            <>
            <div className="cross-icon">
                <h5 onClick= {()=> {
                    props.onSelect(props.id)
                }} >x</h5>
        <li >{props.text}</li>
        </div>
        </>
        );
}
export default ToDoList;