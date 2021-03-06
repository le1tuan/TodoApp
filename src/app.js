import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { createStore, combineReducers } from 'redux';
// Reducer
const todo = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case 'TOGGLE_TODO':
            if(state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            }
        default: 
            return state;
    }
}
const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                todo(state,action)
            ];
        case 'TOGGLE_TODO':
            return state.map(t => {
                return todo(t,action)
            })
        default:
            return state;
    }
}
const visibilityFilter = (state = 'SHOW_ALL',action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER': 
            return action.filter;
        default:
            return state;
    }

}
const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(x => x.completed === true);
        case 'SHOW_ACTIVE':
            return todos.filter(x => x.completed === false)
        default:
            return todos;
    }
}
//combine
const todoApp = combineReducers({
    todos,
    visibilityFilter
})
//Component
const Link = ({ active,children,onClick }) => {
    if(active){
        return <span>{children}</span>
    }
    return (
        <a  href = '#' 
            onClick = {
                e => {
                    e.preventDefault();
                    onClick(filter);
                }
            }
        >{children}</a>
    )
};
class FilterLink extends React.Component {
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    render() {
        const props = this.props;
        const state = store.getState();
        return (
            <Link 
                active = { props.filter === state.visibilityFilter}
                onClick = { () => store.dispatch({
                    type: 'SET_VISIBILITY_FILTER',
                    filter:  props.filter
                })}
            >
                {props.children}
            </Link>
        )
    }
}
// store.dispatch({
//                         type: 'SET_VISIBILITY_FILTER',
//                         filter
//                     });
const Todo = ({ onClick, completed, text}) => (
    <li onClick={onClick}
        style = {{textDecoration:completed ? 'line-through' : 'none'}}
                        >
                            {text}
                        </li> 
);
const TodoList = ({todos, onTodoClick }) => (
                <ul>
                    {todos.map(todo => 
                        <Todo key={todo.id}
                            {...todo}
                            onClick={() => onTodoClick(todo.id)}
                        />
                    )}
                </ul>);
const AddTodo =({onAddClick}) => {
    let input;  
    return (
        <div>
            <input ref={node => {
                input =node;
            }}/>
            <button onClick={() => {
                onAddClick(input.value);
                input.value ='';       
            }}>ADD</button>      
        </div>  
    )
}

const Footer = () => (
    <div>
        <p>Show: 
            {' '}
            <FilterLink filter='SHOW_ALL' >All</FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE' >Active</FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED' >Completed</FilterLink>
        </p>
    </div>
);

let nextTodoId = 0;
class TodoApp extends React.Component {
    render(){
        const visibleTodos = getVisibleTodos(this.props.todos,this.props.visibilityFilter);
        return(
            <div>
                <AddTodo
                   onAddClick={ (text) => store.dispatch({
                        type: 'ADD_TODO',
                        text: text,
                        id: nextTodoId++
                    })} 
                />
                <TodoList todos={visibleTodos} onTodoClick={id => store.dispatch({
                        type: 'TOGGLE_TODO',
                        id,
                    })}/>
                    <Footer visibilityFilter={visibilityFilter}
                        onFilterClick={filter => store.dispatch({
                            type: 'SET_VISIBILITY_FILTER',
                            filter
                        })}
                        />
            </div>
        )
    }
}
//Connect store

const store = createStore(todoApp);
console.log(store);
const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()}/>,
        document.getElementById("root")
    )
}
store.subscribe(render);
render();
