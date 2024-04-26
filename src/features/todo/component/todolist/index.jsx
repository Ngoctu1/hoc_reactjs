import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList2: PropTypes.array,
    onTodoClick: PropTypes.func,

};
TodoList.defaultProps = {
    todoList2: [],
    onTodoClick: null,
}

function TodoList({ todoList2, onTodoClick }) {
    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);

    }



    return (
        <ul className='todo-list'>
            {todoList2.map((todo, idx) => (
                <li key={todo.id} className={classNames({ 'todo-item': true, completed: todo.status === 'completed' })}
                    onClick={() => handleTodoClick(todo, idx)}
                >{todo.title} </li>
            ))}
        </ul>
    );
}

export default TodoList;