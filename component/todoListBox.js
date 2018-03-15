import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from './todoList.js';
import Todolistinput from './todoListInput.js';

import Todolistitem from './todoListItem.js';
import '../style/todoList.css';

export default class Todolistbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[]
            
        };
        this.addTask = this.addTask.bind(this);
    }
    
    addTask(newTask){
        let taskList = this.state.list;

        // add a new task
        let addNewTaskObj = {};
        if(newTask){
            
            addNewTaskObj.task = newTask;
            addNewTaskObj.id = this.state.list.length;
        }else{
            return;
        }
        // add a new task to the object
        taskList.push(addNewTaskObj);
        this.setState({list:taskList});

    }

    render(){
        return(
            <div className = 'todolist-box' >
                <h2>Your Todo List</h2>
                <Todolist list = {this.state.list} />
                <Todolistinput onAddNewTask = {this.addTask} />
            </div>
        )
    }
}

