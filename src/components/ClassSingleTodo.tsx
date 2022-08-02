import React, { Component } from 'react'
import { Todo } from '../models/Todo';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';

type MyProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

interface MyStates  {
    edit:boolean;
    editTodo:string;
  }


class ClassSingleTodo extends Component<MyProps,MyStates> {
    constructor(props:MyProps){
        super(props)
      this.state = {
        edit:false,
        editTodo:props.todo.todo
      
      }
        
    }

    handleDelete = (id:number) => {
      let result = this.props.todos.filter((todo) => todo.id !== id)
      this.props.setTodos(result)
      
    }
    
    handleEdit = (id:number) => {
      this.setState({
        edit:!this.state.edit
      })
    }
    
    handleUpdate = (id:number) =>{
      this.props.setTodos(
        this.props.todos.map((todo) => (todo.id === id ? { ...todo, todo: this.state.editTodo } : todo))
      );
      this.setState({
        edit:!this.state.edit
      })
    }

  render() {
    return (
        <div>
        {this.state.edit ?
         <>
            <input type="text" name="editTodo" value={this.state.editTodo} onChange={(e)=>this.setState({editTodo:e.target.value})}/>
            <button onClick={()=>this.handleUpdate(this.props.todo.id)}>Update</button>
         </>
        :this.props.todo.todo
        }
        
        <button onClick={()=>this.handleEdit(this.props.todo.id)}><AiFillEdit/></button>
        <button onClick={()=>this.handleDelete(this.props.todo.id)}><AiFillDelete/></button>
      </div>
    )
  }
}

export default ClassSingleTodo