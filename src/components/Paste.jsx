// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeFromPastes } from '../redux/pasteSlice';
// import toast from 'react-hot-toast';

// const Paste = () => {
//   const pastes = useSelector((state) => state.paste.pastes || []);
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();

//   const filteredData = pastes.filter((paste) =>
//     paste.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   function handleDelete(pasteId) {
//     dispatch(removeFromPastes(pasteId));
//   }

//   return (
//     <div>
//       <input
//         className='p-2 rounded-2xl min-w-[600px] mt-5'
//         type="search"
//         placeholder='Search here'
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />

//       <div className='flex flex-col gap-5 mt-5'>
//         {filteredData.length > 0 &&
//           filteredData.map((paste) => (
//             <div key={paste?._id} className='border'>
//               <div>
//                 <strong>Title:</strong> {paste.title}
//               </div>
//               <div>
//                 <strong>Content:</strong> {paste.content}
//               </div>
//               <div className='flex flex-row gap-4 place-content-evenly'>
//                 <button>
//                   <a href={`/?pasteId=${paste?._id}`}>
//                     Edit
//                   </a>
//                 </button>
//                 <button>
//                   <a href={`/pastes/${paste?._id}`}>
//                     View
//                   </a>
//                 </button>
//                 <button onClick={() => handleDelete(paste?._id)}>
//                   Delete
//                 </button>
//                 <button onClick={() => {
//                   navigator.clipboard.writeText(paste?.content);
//                   toast.success("Copied to clipboard");
//                 }}>
//                   Copy
//                 </button>
//                 <button>
//                   Share
//                 </button>
//               </div>
//               <div>
//                 {paste.createdAt}
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Paste;




// VARUNSHUKLAAAA

// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
// import { removeFromPastes } from '../redux/pasteSlice';
// import toast from 'react-hot-toast';



// const Paste = () => {

//   const pastes = useSelector((state) => state.paste.pastes || []);
//   const [searchTerm, setSearchTerm] = useState('');
//   const dispatch = useDispatch();

//   const filteredData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

//   function handleDelete(pasteId) {
//     dispatch(removeFromPastes(pasteId));
//   }


//   return (
//     <div>
//       <input
//         className='p-2 rounded-2xl min-w-[600px] mt-5'
//         type="search" placeholder='search here' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />


//       <div className='flex flex-col gap-5 mt-5'>
//         {
//           filteredData.length > 0 &&
//           filteredData.map((paste) => {
//             return (
//               <div key={paste?._id} className='border'>
//                 <div>
//                   {paste.title}
//                 </div>
//                 <div>
//                   {paste.content}
//                 </div>
//                 <div className='flex flex-row gap-4 place-content-evenly'>
//                   <button>
//                     <a href={`/?pasteId=${paste?._id}`}>
//                     Edit
//                     </a>
//                   </button>
//                   <button>
//                     <a href={`/pastes/${paste?._id}`}>
//                       View
//                     </a>
//                   </button>
//                   <button onClick={() => handleDelete(paste?._id)}>
//                     Delete
//                   </button>
//                   <button onClick={() => {
//                     navigator.clipboard.writeText(paste?.content)
//                     toast.success("Copied to clipboard")
//                   }}>
//                     Copy
//                   </button>
//                   <button>
//                     Share
//                   </button>
//                 </div>
//                 <div>
//                   {paste.createdAt}
//                 </div>
//               </div>)
//           }
//           )
//         }

//       </div>


//     </div>

//   )
// }

// export default Paste



import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes || []);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    // toast.success("Paste deleted");
  }

  function formatDate(dateString) {
    try {
      const date = new Date(dateString);
      return format(date, 'MMMM d, yyyy');
    } catch (e) {
      return "Invalid date";
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="relative mb-8">
        <input
          className='w-full p-3 pl-10 rounded-lg border-none bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-blue-500'
          type="search" 
          placeholder='Search notes here...' 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </div>

      <h2 className="text-2xl font-bold mb-6 text-left">All Notes</h2>

      <div className='space-y-4'>
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste?._id} className='bg-[#1e1e1e] rounded-lg overflow-hidden shadow-md'>
              <div className='p-4 text-left'>
                <h3 className='text-xl font-semibold mb-1'>{paste.title}</h3>
                <p className='text-gray-400 truncate'>{paste.content}</p>
              </div>
              
              <div className='flex justify-between items-center px-4 py-3 bg-[#252525] border-t border-[#333]'>
                <div className='flex items-center'>
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span className='text-sm text-gray-400'>{formatDate(paste.createdAt)}</span>
                </div>
                
                <div className='flex space-x-2'>
                  <button className='p-1 text-gray-400 hover:text-white' title="Edit">
                    <a href={`/?pasteId=${paste?._id}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </a>
                  </button>
                  
                  <button className='p-1 text-gray-400 hover:text-white' title="Delete" onClick={() => handleDelete(paste?._id)}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                  
                  <button className='p-1 text-gray-400 hover:text-white' title="View">
                    <a href={`/pastes/${paste?._id}`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </a>
                  </button>
                  
                  <button 
                    className='p-1 text-gray-400 hover:text-white' 
                    title="Copy to clipboard"
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content)
                      toast.success("Copied to clipboard")
                    }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </button>
                  
                  <button className='p-1 text-gray-400 hover:text-white' title="Share">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No notes found</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Paste