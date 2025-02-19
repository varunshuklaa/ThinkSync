// import { createBrowserRouter, RouterProvider} from 'react-router-dom'
// import './App.css'
// import Navbar from './components/navbar'
// import Home from './components/Home';
// import Paste from './components/Paste';
// import ViewPaste from './components/ViewPaste';

// const router = createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:
//       <div>
//         <Navbar/>
//         <Home />
//       </div>
//     },
//     {
//       path:"/Pastes",
//       element:
//       <div>
//         <Navbar />
//         <Paste />
//       </div>
//     },
//     {
//       path:"/Pastes/:id",
//       element:
//       <div>
//         <Navbar />
//         <ViewPaste />
//       </div>
//     },
//   ]
// )

// function App() {
  

//   return (
//     <div>
//       <RouterProvider router={router} />
//     </div>
//   )
// }

// export default App



import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar'
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
      <div className="min-h-screen bg-[#121212]">
        <Navbar/>
        <Home />
      </div>
    },
    {
      path: "/Pastes",
      element:
      <div className="min-h-screen bg-[#121212]">
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/Pastes/:id",
      element:
      <div className="min-h-screen bg-[#121212]">
        <Navbar />
        <ViewPaste />
      </div>
    },
  ]
)

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <RouterProvider router={router} />
    </div>
  )
}

export default App