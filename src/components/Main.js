import React, { useState } from 'react'

const Main = () => {
  const [reply, setReply] = useState({
    age: "",
    message:""
  })
  const messageHandler = (e)=> {
    e.preventDefault()
    setReply({
      age: "",
      message: reply.age < 500 ? `No, at age ${reply.age}, you are not too old to learn to code! You can start today if you were not sure😃` : `Are you kidding me?? are you a vampire?? But even if you are ${reply.age} age, you are not too young to learn to code, lol`
    })

  }
  const ageHandler = (e) => {
    setReply({
      age: e.target.value,
      message: ""
    })
  }
  return (
    <div className= 'p-4 flex flex-wrap justify-center items-center lg:w-2/4 w-11/12 mx-auto'>
        <form onSubmit={messageHandler} className='w-full text-xl md:text-2xl'>
            <div className='my-4'>
            <label className='block mb-4'>Your age:</label>
            <input required onChange={ageHandler} value={reply.age} className='py-4 text-black text-center w-full' type="number"/>
            </div>
            <div>
                <button className='w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500' type="submit">Submit</button>
            </div>
        </form>
        <p className='text-bold text-cyan-600 text-xl text-center md:text-3xl p-8'>{reply.message}</p>
        <p className='text-bold text-cyan-600 italic p-8'>Created by: <a className='underline text-cyan-100' target="_blank" href="https://github.com/Rabbi-Morgan?tab=repositories" rel="noreferrer">Omobolaji Anuoluwapo</a></p>
    </div>
  )
}

export default Main