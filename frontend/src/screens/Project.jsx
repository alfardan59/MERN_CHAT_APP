import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Project = () => {

    const location=useLocation()
    
    
  return (
    <main className='h-screen w-screen flex'>
            <section className="left relative flex flex-col h-screen min-w-72 bg-slate-300">
                <header className='flex justify-end p-2 px-4 w-full bg-slate-100'>
                  <button className='p-2'>

                  </button>
                  <i className="ri-group-fill"></i>
                </header>
                <div className="conversation-area flex-grow flex flex-col">
                  <div className="message-box p-1 flex-grow flex flex-col gap-1">
                    <div className="message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
                      <small className='opacity-65 text-xs'>example@gmail.com</small>
                      <p className='text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                    </div>
                    <div className="ml-auto message max-w-56 flex flex-col p-2 bg-slate-50 w-fit rounded-md">
                      <small className='opacity-65 text-xs'>example@gmail.com</small>
                      <p className='text-sm'>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                    </div>
                  </div>
                  <div className="inputField w-full flex">
                    <input className='p-2 px-4 border-none outline-none' type="text" placeholder='Enter message'/>
                    <button className='flex-grow px-3'><i className="ri-send-plane-fill"></i></button>
                  </div>
                </div>

                <div className="sidePanel w-36 h-60 bg-red-600 absolute left-[-100%] top-0"></div>
      </section>
    </main>
  )
}

export default Project
