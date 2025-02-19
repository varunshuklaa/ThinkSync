// import React from 'react'
// import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div className='flex flex-row gap-4 place-content-evenly'>
//         <NavLink
//         to="/"
//         >
//             Home
//         </NavLink>


//         <NavLink
//         to="/pastes"
//         >
//             Pastes
//         </NavLink>
//     </div>
//   )
// }

// export default Navbar



import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-center items-center h-14 bg-[#1a1a1a] w-full'>
      <div className='flex space-x-8'>
        <NavLink
          to="/"
          className={({ isActive }) => 
            isActive ? 'text-blue-500 font-medium' : 'text-gray-300 hover:text-white transition-colors'
          }
        >
          <a color='blue'>Home</a>
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) => 
            isActive ? 'text-blue-500 font-medium' : 'text-gray-300 hover:text-white transition-colors'
          }
        >
          <a color='blue'>Notes</a>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar