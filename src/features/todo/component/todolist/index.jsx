import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList2: PropTypes.array,

};
TodoList.defaultProps = {
    todoList2: [],
}

function TodoList({ todoList2 }) {


    return (
        <ul>
            {todoList2.map(todo => (
                <li key={todo.id}>{todo.title} </li>
            ))}
        </ul>
    );
}

export default TodoList;