import React from 'react'
import Link from 'next/link'
type Props = {}
import { Todo } from '../../typings';
const TodosList = async (props: Props) => {
    const todos = await fetchTodos();
    console.log(todos)
    return (
      <div>  <>
          {todos.map((todo: Todo) => { 
              return (
                  <p key={todo.id}>
                      <Link className='text-black'
                          href={`/todos/${todo.id}`}
                          key={todo.id}>{ todo.title}</Link>
                  </p>
                 
              );
          })
          }
      </></div>
    
  )
}
const fetchTodos = async () => { 
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos:Todo[] = await res.json();
     return todos;
}
export default TodosList