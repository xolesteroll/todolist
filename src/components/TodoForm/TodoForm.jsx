import React from 'react';

const TodoForm = (props) => {

    return (
        <div className="TodoForm">
            <form onSubmit={props.onSubmit}>
                <input defaultValue={props.text} type="text" onChange={props.updateText}/>
                <button>Add todo</button>
            </form>
        </div>
    );
};

export default TodoForm;