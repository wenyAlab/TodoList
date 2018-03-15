import React from 'react';
import ReactDOM from 'react-dom';
import Todolistbox from './todoListBox.js';
import Todolistinput from './todoListInput.js';

import Todolistitem from './todoListItem.js';
import '../style/todoList.css';

export default class Todolist extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        let listItem;
        if(true){
             listItem = this.props.list.map((list) => {
                if(list.task !== null){
                    return(
                        <Todolistitem key = {list.id} list = {list} />
        
                    )
                }else{
                    return;
                }
                
            })
        }
        

        return(
            <ul className = 'todo-list'>
                {listItem}
            </ul>
        )
    }
}