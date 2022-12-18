import { useState } from 'react';
import AddTodo from './AddTodo'
import Todo from './Todo'

    const Todos=()=>{
        const [todos,setTodos]=useState(
            localStorage.getItem("todos")?
            JSON.parse(localStorage.getItem("todos"))
            :[]
        );
        

        const onDelete=todo=>{
            const todoArr=todos.filter(item=>
                item.id!==todo.id);
             updateState(todoArr);
        }
      
        const handleDone=todo=>{
             const todoArr=[...todos];
             todoArr.map(item=>{
                if(item.id===todo.id){
                    item.isDone=!item.isDone;
                }
                return item;
             });
             updateState(todoArr);
        }
      
        const addNewTodo=todoValue=>{
           if(todoValue){
                const todoArr=[...todos];
                todoArr.push({
                    id:new Date().getTime(),
                    value:todoValue,
                    isDone:false
                });
                updateState(todoArr);
           }
        }
     

        const updateState=(todoArr)=>{
            setTodos(todoArr);
            localStorage.setItem("todos",
            JSON.stringify(todoArr)
       );
   }
 
   const onEdit=todo=>{
       const todoArr=[...todos];
        todoArr.map(item=>{
           if(item.id==todo.id){
               item.value=todo.value;
           }
           return item;
        });
        updateState(todoArr);
   }

     


    return (
        <div>
           {
               todos?.length===0?
               <h1>No todos are present</h1>:
               todos.map((item,index)=>{
                   return <Todo
                   key={index}
                   number={index+1}
                   todo={item}
                   handleDone={handleDone}
                   delete={onDelete}
                   edit={onEdit}
                   ></Todo>
                })
           }
           <AddTodo addtodo={addNewTodo}/>

        </div>
    );
}

export default Todos;

