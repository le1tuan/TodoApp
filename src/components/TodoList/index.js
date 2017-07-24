import React from 'react';
const TodoList = ({id, text, handleComplete, completed}) => {
    return (
        <li onClick={handleComplete} key={id} style={{textDecoration: completed?'line-through': 'none' }}>{text}</li>
    )
}
export default TodoList;