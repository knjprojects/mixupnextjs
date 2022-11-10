import { fetchContractMetadataFromAddress } from '@thirdweb-dev/sdk'
import React from 'react'
import { Todo } from '../../../typings'
import { notFound } from 'next/navigation'


//dynparam is on by default tho
export const dynamicParams = true;//

//to prevent weird behsavoiour when we go to todo 1000000000 when 9t doesnt existr
//we return not found notfound from todopage
type Props = {
    params: {
        todoId:string
    }
}
const fetchTodo = async (todoId: string) => { 
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,
        { next: { revalidate: 60 } }//refresjes the component every 60 seconds
        //cache:'force-cache' for static generatiion,
        //cache:'no-cache' for simple ssr
    );

    const todo:Todo = await res.json();
     return todo;

}
const TodoPage = async({ params: { todoId } }: Props) => {
    const todo = await fetchTodo(todoId);
    if (!todo.id)
        return notFound()//we can customize not found with a specific ssr page just like layout!:D
  return (
      <div>{todoId}
          
      </div>
  )
}

export default TodoPage;


export async function generateStaticParams() { 
     const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todos: Todo[] = await res.json();
    //generate all pages from this url
    return todos.map(todo => ({
        todoId:todo.id.toString(),
    }))
    
}