import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
/*
props
number/index
handleDone?
todo
delete?
editTodo?
*/
const Todo=(props)=>{
   const [show,setShow]= useState(false);
   const [value,setValue]= useState(props.todo.value);
 
   const showModal=()=>{
       setShow(true);
   }
 
   const cancel=()=>{
       setShow(false);
   }
 
   const done=()=>{
       setShow(false);
       props.edit(
           {
               id:props.todo.id,
               value:value
           }
       )
   }
 
   const onChange=(event)=>{
       setValue(event.target.value);
   }
 
   return(
     <div>
       <table className="table">
           <tbody>
               <tr>
                   <td style={{width:15}}
                   className="text-center"
                   >
                       {props.number}
                   </td>
                   <td style={{width:15}}
                   className="text-center"
                   >
                       <input type="checkbox"
                       checked={props.todo.isDone}
                       onChange={()=>props.handleDone(props.todo)}
                       />
                   </td>
                   <td style={{width:150,
                   textDecoration:props.todo.isDone?
                   'line-through':''
               }}
                   className="text-center">
                       {props.todo.value}
                   </td>
                   <td style={{width:50}}
                   className="text-center">
                       <input type="button"
                       className="btn btn-warning"
                       value="Edit"
                       onClick={showModal}
                       />
                   </td>
                   <td style={{width:50}}
                   className="text-center">
                       <input type="button"
                       className="btn btn-danger"
                       value="Delete"
                       onClick={()=>props.delete(props.todo)}
                       />
                   </td>
               </tr>
           </tbody>
       </table>
 
       <Modal show={show}>
           <Modal.Header>Edit Todo Value</Modal.Header>
           <Modal.Body>
               <input type="text" className='form-control'
               placeholder={value}
               onChange={onChange}
               />
           </Modal.Body>
           <Modal.Footer>
               <button
               onClick={cancel}
               className='btn btn-secondary'>Cancel</button>
               <button
               onClick={done}
               className='btn btn-success'>Done</button>
           </Modal.Footer>
           
       </Modal>
     </div>
   )
}
 
export default Todo;
