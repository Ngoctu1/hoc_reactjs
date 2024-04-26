import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './component/todolist';

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    const inittodoList1 = [
        {
            id: 1,
            title: 'hoc',
            status: 'new',
        },
        {
            id: 2,
            title: 'viet1',
            status: 'completed',
        },
        {
            id: 3,
            title: 've',
            status: 'new',
        },
        {
            id: 4,
            title: 'choi',
            status: 'new',
        },
    ]
    const [todoList1, setTodoList] = useState(inittodoList1);
    const handleTodoClick = (todo, idx) => {
        console.log(todo, idx)
        //clone ra
        const newtodolist = [...todoList1]
        //thay doi
        newtodolist[idx] = {
            ...newtodolist[idx],
            status: newtodolist[idx].status === 'new' ? 'completed' : 'new',
        };
        //update lai 
        setTodoList(newtodolist);
    }
    return (
        <div>
            <h3> Todo </h3>
            <TodoList todoList2={todoList1} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;