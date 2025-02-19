// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams, useSearchParams } from 'react-router-dom';
// import { addToPastes, updateTopastes } from '../redux/pasteSlice';

// const ViewPaste = () => {

//     const {id} = useParams();

//     const allPastes = useSelector((state) => state.paste.pastes);

//     const paste = allPastes.filter((p) => p._id === id)[0];


//   return (
//     <div>
//             <div
//                 className='flex flex-row gap-7 place-content-between'>
//                 <input
//                     className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
//                     type="text"
//                     placeholder='Enter value here'
//                     value={paste.title}
//                     disabled
//                     onChange={(e) => setTitle(e.target.value)}
//                 />

//                 {/* <button
//                     onClick={createPaste}
//                     className='p-2 rounded-2xl mt-2'>{
//                         pasteId ? "Update My Paste" : "Create My Paste"}
//                 </button> */}
//             </div>

//             <div className='mt-8'>
//                 <textarea
//                     className='rounded-2xl mt-4, min-w-[500px] p-4'
//                     value={paste.content}
//                     placeholder='enter content here'
//                     disabled
//                     onChange={(e) => setValue(e.target.value)}
//                     rows={20}
//                 />
//             </div>
//         </div>
//   )
// }

// export default ViewPaste




import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ViewPaste = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.find((p) => p._id === id);

    if (!paste) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-6 text-center">
                <h2 className="text-2xl mb-4">Note not found</h2>
                <button 
                    onClick={() => navigate('/pastes')}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
                >
                    Back to notes
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">{paste.title}</h2>
                <div className="flex space-x-3">
                    <button 
                        onClick={() => navigate(`/?pasteId=${id}`)}
                        className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        Edit Note
                    </button>
                    <button 
                        onClick={() => {
                            navigator.clipboard.writeText(paste?.content);
                            toast.success("Copied to clipboard");
                        }}
                        className="px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors flex items-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                        Copy Content
                    </button>
                </div>
            </div>
            
            <div className='w-full'>
                <div className='flex items-center bg-[#1e1e1e] rounded-t-lg px-3 py-2 border-b border-[#333]'>
                    <div className='flex space-x-2'>
                        <div className='w-3 h-3 rounded-full bg-red-500'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    </div>
                </div>
                <div
                    className='w-full min-h-[400px] p-4 bg-[#1e1e1e] rounded-b-lg text-left whitespace-pre-wrap'
                >
                    {paste.content}
                </div>
            </div>
        </div>
    )
}

export default ViewPaste