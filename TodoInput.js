import React from 'react'

export default function TodoInput(props) {
const handleAdd=(e)=>{
    e.preventDefault();
const val= e.target.elements.todo.value;
props.setTodo((pre)=> [...pre, val])

}
const handleChange = (e) => {

}
  return (
    <>
    <form onSubmit={handleAdd}>
  <div className="container mx-auto mt-3">
  
    <input type="text" className="form-control w-50 mx-auto" id="todo" placeholder='Make a list...' />
  </div>
  <div className='text-center mt-4'>
  <button className="btn btn-primary">Add Item</button>
  </div>
  </form>
</>
  )
}
