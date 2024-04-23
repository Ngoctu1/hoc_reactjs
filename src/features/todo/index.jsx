import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './component/todolist';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const todoList1 = [
        {
            id: 1,
            title: 'hoc'

        },
        {
            id: 2,
            title: 'viet1'

        },
        {
            id: 3,
            title: 've'

        },
        {
            id: 4,
            title: 'choi'

        },
    ]
    return (
        <div>
            <h3> Todo </h3>
            <TodoList todoList2={todoList1} />
        </div>
    );
}

export default TodoFeature;