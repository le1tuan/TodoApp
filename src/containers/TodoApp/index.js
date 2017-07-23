import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< 21e975da869ea60ab00763cd2d869011ee14b581
import { addTodo, showAll, toggle } from './actions';
import { todos } from './reducers';
import { connect } from 'react-redux';
import TodoList from '../../components/TodoList';
import MyAppBar from '../AppBar';
import TextField from 'material-ui/TextField';
import Button from '../../components/Button';
=======
import { addTodo, showAll } from './actions';
import { todos } from './reducers';
import { connect } from 'react-redux';
>>>>>>> Refactor and Rewrite the new todo application

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
    render(){
<<<<<<< 21e975da869ea60ab00763cd2d869011ee14b581
        const {todos} = this.props;
        return(
            <div>
                <MyAppBar/>
                <ul>
                    {todos.map(x => <TodoList key={x.id} id={x.id} text={x.text} handleComplete={() => this.props.toggle(x.id)} completed={x.completed}/>)}                   
                </ul>
                <TextField
                    type="text"
                    onChange={this.handleChange} value={this.state.text}
                />
                <br />
                <Button label="Primary" primary={true} onClick={this.handleClick}/>
=======
        return(
            <div>
                <ul>
                    {this.props.todos.map(x => {
                        return <li>{x}</li>
                    })}
                </ul>
   
                <input type="text" onChange={this.handleChange} value={this.state.text}/>
                <button onClick={this.handleClick}>ADD</button>
>>>>>>> Refactor and Rewrite the new todo application
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       addTodo: (text) => dispatch(addTodo(text)),
<<<<<<< 21e975da869ea60ab00763cd2d869011ee14b581
       toggle: (id) => dispatch(toggle(id)),
=======
>>>>>>> Refactor and Rewrite the new todo application
       show: () => dispatch(showAll()),
    }
}

TodoApp = connect(mapStateToProps,mapDispatchToProps)(TodoApp);
export default TodoApp;