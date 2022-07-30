import React ,{useState} from 'react'
import { Todo } from '../models/Todo';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
// type Props = {
//   todo: Todo;
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }
const SingleTodo :React.FC<{
    todo: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }> = ({ todo, todos, setTodos }) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string>(todo.todo)

const handleDelete = (id:number) => {
  let result = todos.filter((todo) => todo.id !== id)
  setTodos(result)
  
}

const handleEdit = (id:number) => {
  setEdit(!edit)
}

const handleUpdate = (id:number) =>{
  setTodos(
    todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
  );
  setEdit(false)
}

  return (
    <div>
      {edit ?
       <>
          <input type="text" name="editTodo" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
          <button onClick={()=>handleUpdate(todo.id)}>Update</button>
       </>
      : todo.todo
      }
      
      <button onClick={()=>handleEdit(todo.id)}><AiFillEdit/></button>
      <button onClick={()=>handleDelete(todo.id)}><AiFillDelete/></button>
    </div>
  )
}

export default SingleTodo