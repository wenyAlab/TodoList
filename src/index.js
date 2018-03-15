import React from 'react';
import ReactDOM from 'react-dom';
import Todolist from '../component/todoList.js';
import Todolistinput from '../component/todoListInput.js';
import Todolistitem from '../component/todoListItem.js';
import Todolistbox from '../component/todoListBox.js';
import '../style/todoList.css';


class App extends React.Component{
    render(){
        return(
            
                <Todolistbox/>
            
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));