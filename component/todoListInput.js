import React from 'react';
import ReactDOM from 'react-dom';
import Todolistbox from './todoListBox.js';
import Todolist from './todoList.js';
import Todolistitem from './todoListItem.js';
import '../style/todoList.css';

export default class Todolistinput extends React.Component{
    constructor(props){
        super(props);
        this.addaNewTask = this.addaNewTask.bind(this);
    }
    addaNewTask(e){
        e.preventDefault();
        let element = ReactDOM.findDOMNode(this.refs.inputValue);
        let task = element.value;
        this.props.onAddNewTask(task);
        element.value = '';

    }
    render(){
        return(
            <div className = 'todolist-input-box'>
                <form onSubmit = {this.addaNewTask}>
                    <input className = 'todolist-input' type = 'text' placeholder = 'input your todo task in here' ref = 'inputValue' />
                </form>
            </div>
        )
    }
}