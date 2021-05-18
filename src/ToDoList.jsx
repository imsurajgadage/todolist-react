import React from 'react'


const ToDoList = (props) => {

    return (
        <>
            <div className='todo_style'>
                <i className='fa fa-times' area-hidden='true' onClick={()=>{
                    props.onSelect(props.id)
                }}/>
                <li className='text'>{props.text}</li>
            </div>
         
        </>
    )
}

export default ToDoList
