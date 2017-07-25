import React from 'react';
import ReactDOM from 'react-dom';
import { addTodo, showAll, toggle, setVisibilityFilter } from './actions';
import { todos } from './reducers';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import MyAppBar from '../AppBar';
import Button from '../../components/Button';
import styled from 'styled-components';
import {List} from 'material-ui/List';
import ListComponent from '../../components/List';
import Subheader from 'material-ui/Subheader';
import Link from '../../components/Link';
const Input = styled.input`
    padding: 0.5em;
	margin: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
`
const getVisibleTodos = (todos,filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_COMPLETED':
            return todos.filter(x => x.completed === true);
        case 'SHOW_ACTIVE':
            console.log("show active");
            return todos.filter(x => x.completed === false)
        default:
            return todos;
    }
}

class TodoApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            text: '',
        }
    }
    handleClick = () => {
        this.props.addTodo(this.state.text);
        this.setState({text: ''});
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            text: e.target.value
        })
    }
    handleClickLink = (filter) => {
        this.props.setVisibilityFilter(filter);
    }
    render(){
        console.log(this.props.todos);
        console.log('123--->',this.props.filter);
        const todos = getVisibleTodos(this.props.todos,this.props.filter);
        console.log('bvbvb', todos);
        return(
            <div>
                <MyAppBar/>
                <Input
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.text}
                />
                <Button label="Primary" primary={true} onClick={this.handleClick}/>
                <div>
                    <Link text="All" handleClickLink={this.handleClickLink} filter="SHOW_ALL"/>
                    <Link text="Active" handleClickLink={this.handleClickLink} filter="SHOW_ACTIVE"/>
                    <Link text="Completed" handleClickLink={this.handleClickLink} filter="SHOW_COMPLETED"/>
                </div>
                <List>
                    <Subheader style={{textAlign: 'center'}}>Todo App</Subheader>
                    {todos.map(x => <ListComponent key={x.id} id={x.id} text={x.text} handleComplete={() => this.props.toggle(x.id)} completed={x.completed}/>)}                   
                </List>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        filter: state.visibilityFilter,
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       addTodo: (text) => dispatch(addTodo(text)),
       toggle: (id) => dispatch(toggle(id)),
       show: () => dispatch(showAll()),
       setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter)),
    }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);
export default TodoApp;