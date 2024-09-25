import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-900 text-white py-2">
        <div className="logo">
            <span className="text-1xl font-bold mx-8">iTask</span>
        </div>
        <ul className="flex gap-8 mx-8">
            <li className='cursor-pointer hover:text-violet-200 transition-all'>Home</li>
            <li className='cursor-pointer hover:text-violet-200 transition-all'>Task</li>
        </ul>
    </nav>
  )
}

export default Navbar
