import React from 'react';
import classes from './TodoList.module.css'

const TodoList = (props) => {
    const todoList = props.todos.map((el, i) => <li className={classes.item} onClick={props.onDelete} id={el.id} key={el.id}>{i + 1 + '. ' + el.text}</li>)

    return (
            <>
                <ul className={classes.list}>
                    {todoList}
                </ul>
            </>
    );
};

export default TodoList;