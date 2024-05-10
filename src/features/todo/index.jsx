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
    const [FilterStatus, setFilterStatus] = useState('all');
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
    const handleShowAll = () => {
        setFilterStatus('all')
    }
    const handleShowNew = () => {
        setFilterStatus('new')
    }
    const handleShowCompleted = () => {
        setFilterStatus('completed')
    }
    const rendertodolist = todoList1.filter(todo => FilterStatus === 'all' || todo.status === FilterStatus);

    return (
        <div>
            <div>
                <h3> Todo </h3>
                <TodoList todoList2={rendertodolist} onTodoClick={handleTodoClick} />
            </div>
            <div>
                <button onClick={handleShowAll}>Show All</button>
                <button onClick={handleShowNew}>ShowNew</button>
                <button onClick={handleShowCompleted}>ShowCompleted</button>
            </div>
        </div>
    );
}

export default TodoFeature;