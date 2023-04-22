import React from 'react'

export default function TodoList(props) {

    const handleDel =(index)=>{
       const newArr= [...props.todo]
       newArr.splice(index,1)
       props.setTodo(newArr)
    }

    const handleEdit = (index) =>{
        props.isEditing(true)
        props.setTodo([...props.todo])

      let newEd=  props.todo.find((t)=> {return t = index})
      console.log(newEd);
    }

    return (
        <>
            <div>

                <div className='container mx-auto d-block w-50 my-3'>
                    {props.todo.map((e, index) => {
                        return (
                            <>

                                <h5 key={index} className='pb-2'>{e} 
                                 <span style={{float:'right'}}>

                                    <button className='btn btn-danger px-2' onClick={()=> {handleDel(index)}}>Delete</button>
                                    <button className='btn btn-success px-2 mx-2' onClick={()=> {handleEdit(index)}}>Edit</button>

                                </span>
                                </h5>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
