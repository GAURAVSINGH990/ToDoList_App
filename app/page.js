"use client"
import React, { useState } from 'react'
const page = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
      e.preventDefault()  //--Ye page reload nhi hone dega jissse ki hmara data show krega console pr---
      setmainTask([...mainTask,{title,description}])
      setTitle("")
      setDescription("")
      console.log(mainTask)
  }

  const deleteHandler=(i)=>{
      let copyTask =[...mainTask]
      copyTask.splice(i,1)
      setmainTask(copyTask)
  }

  let renderTask = <h2 className='font-bold'>No Task Available</h2>

  if(mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
      return(
        <li key ={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between  w-2/3'>
          <h5  className='text-2xl font-semibold'>{t.title}</h5>
          <h6 className='text-xl font-semibold'>{t.description}</h6>
        </div>
        <button onClick ={()=>{
          deleteHandler(i)
        }} className='bg-red-500 text-white font-bold  rounded text-xl font-serif px-4 py-3'>Delete</button>
        </li>
      )
    })
  }

  
  return (
    <>
    <h1 className='bg-black text-white p-5 font-bold font-serif text-center text-5xl'>Gaurav's ToDo List</h1>
    <form onSubmit = {submitHandler}>  
      <input className='text-2xl border-zinc-800 m-5 px-4 py-2 border-4'
      placeholder="Enter Text Here"
      value = {title} /* ---------Two Way Binding -> client title me change krega fir react k through display hpoga--------- */
      onChange={(e)=>{
        setTitle(e.target.value)
      }}
      />

    <input className='text-2xl border-zinc-800 m-5 px-4 py-2 border-4'
      placeholder="Enter Description Here"
      value={description} /* ---------Two Way Binding--------- */
      onChange={(e)=>{
        setDescription(e.target.value)
      }}
      />
    
    <button className='bg-black text-white font-bold px-5 py-3 rounded text-2xl font-serif m-5'>Add Task</button>
    </form>
    <hr />
      <div className='bg-slate-400 p-8 font-serif'>
        <ul>{renderTask}</ul>
      </div>
    </>
  )
}

export default page