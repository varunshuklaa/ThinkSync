// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, updateTopastes } from '../redux/pasteSlice';

// const Home = () => {
//     const [title, setTitle] = useState("");
//     const [value, setValue] = useState("");
//     const [searchParams] = useSearchParams();
//     const pasteId = searchParams.get("pasteId");
//     const dispatch = useDispatch();
//     const allPastes = useSelector((state) => state.paste.pastes);

//     useEffect(() => {
//         console.log("inside use effect");
//         console.log("pasteId:", pasteId);
//         console.log("allPastes:", allPastes);
        
//         if (pasteId && allPastes.length > 0) {
//             const paste = allPastes.find((p) => p._id === pasteId);
//             if (paste) {
//                 console.log("Paste Found:", paste);
//                 setTitle(paste.title);
//                 setValue(paste.content);
//             } else {
//                 console.log("No paste found with this ID");
//                 setTitle("");  // Reset state to avoid stale data
//                 setValue("");
//             }
//         }      
//     }, [pasteId, allPastes]);

//     function createPaste() {
//         const paste = {
//             title: title,
//             content: value,
//             _id: pasteId || Date.now().toString(36),
//             createdAt: new Date().toISOString(),
//         };

//         if (pasteId) {
//             // Update existing paste
//             dispatch(updateTopastes(paste));
//         } else {
//             // Create new paste
//             dispatch(addToPastes(paste));
//         }

//         // Reset after creation or update
//         setTitle('');
//         setValue('');
//     }

//     return (
//         <div>
//             <div className='flex flex-row gap-7 place-content-between'>
//                 <input
//                     className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
//                     type="text"
//                     placeholder='Enter title here'
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />

//                 <button
//                     onClick={createPaste}
//                     className='p-2 rounded-2xl mt-2'>
//                     {pasteId ? "Update My Paste" : "Create My Paste"}
//                 </button>
//             </div>

//             <div className='mt-8'>
//                 <textarea
//                     className='rounded-2xl mt-4 min-w-[500px] p-4'
//                     value={value}
//                     placeholder='Enter content here'
//                     onChange={(e) => setValue(e.target.value)}
//                     rows={10}
//                 />
//             </div>
//         </div>
//     );
// };

// export default Home;

// VARUNSHUKLAAAA

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useSearchParams } from 'react-router-dom';
// import { addToPastes, updateTopastes } from '../redux/pasteSlice';

// const Home = () => {
//     const [title, setTitle] = useState("");
//     const [value, setValue] = useState("");
//     const [searchParams, setSearchParams] = useSearchParams();
//     const pasteId = searchParams.get("pasteId");
//     const dispatch = useDispatch();
//     const allPastes = useSelector((state) => state.paste.pastes);


//     useEffect(() => {
//         console.log("inside use effect");
//         if(pasteId && allPastes.length > 0){
//             const paste = allPastes.find((p) => p._id
//             === pasteId);
//             if (paste) {
//                 console.log("Page Found");
//                 setTitle(paste.title);
//                 setValue(paste.content);
//             } else {
//                 console.log("No paste found with this ID");
//                 setTitle("");  // Reset state to avoid stale data
//                 setValue("");
//             }
//         }      
//     }, [pasteId, allPastes])
    


//     function createPaste() {
//         const paste={
//             title:title,
//             content: value,
//             _id:pasteId || Date.now().toString(36),
//             createedAt:new Date().toISOString(),
//         }

       

//         if(pasteId){
//             //update
//             dispatch(updateTopastes(paste));
//         }
//         else{
//             //create
//             dispatch(addToPastes(paste));
//         }

//         //after creation or updation
//         setTitle('');
//         setValue('');
//         setSearchParams({});
//     }

   

//     return (
//         <div>
//             <div
//                 className='flex flex-row gap-7 place-content-between'>
//                 <input
//                     className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
//                     type="text"
//                     placeholder='Enter value here'
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                 />

//                 <button
//                     onClick={createPaste}
//                     className='p-2 rounded-2xl mt-2'>{
//                         pasteId ? "Update My Paste" : "Create My Paste"}
//                 </button>
//             </div>

//             <div className='mt-8'>
//                 <textarea
//                     className='rounded-2xl mt-4, min-w-[500px] p-4'
//                     value={value}
//                     placeholder='enter content here'
//                     onChange={(e) => setValue(e.target.value)}
//                     rows={20}
//                 />
//             </div>
//         </div>


//     )
// }

// export default Home



import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateTopastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);
    
    useEffect(() => {
        if(pasteId && allPastes.length > 0){
            const paste = allPastes.find((p) => p._id === pasteId);
            if (paste) {
                setTitle(paste.title);
                setValue(paste.content);
            } else {
                setTitle("");
                setValue("");
            }
        }      
    }, [pasteId, allPastes])
   
    function createPaste() {
        if (!title.trim()) {
            toast.error("Title cannot be empty");
            return;
        }
        
        const paste={
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createdAt: new Date().toISOString(),
        }
       
        if(pasteId){
            dispatch(updateTopastes(paste));
            // toast.success("Paste updated");
        }
        else{
            dispatch(addToPastes(paste));
            // toast.success("Paste added");
        }
        
        setTitle('');
        setValue('');
        setSearchParams({});
    }
   
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <div className='flex flex-col md:flex-row gap-4 mb-8'>
                <input
                    className='flex-grow p-3 rounded-lg border-none bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-blue-500'
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createPaste}
                    className='px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors'>
                    {pasteId ? "Update My Note" : "Create My Note"}
                </button>
            </div>
            
            <div className='w-full'>
                <div className='flex items-center bg-[#1e1e1e] rounded-t-lg px-3 py-2 border-b border-[#333]'>
                    <div className='flex space-x-2'>
                        <div className='w-3 h-3 rounded-full bg-red-500'></div>
                        <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
                        <div className='w-3 h-3 rounded-full bg-green-500'></div>
                    </div>
                </div>
                <textarea
                    className='w-full min-h-[400px] p-4 bg-[#1e1e1e] rounded-b-lg resize-y focus:outline-none focus:ring-0 border-none'
                    value={value}
                    placeholder='Write Your Content Here....'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>


            {/* Footer Section */}
            <footer className='w-full text-center py-4 mt-6 bg-grey-200 text-gray-700 font-semibold'>
                © {new Date().getFullYear()} ThinkSync | Made by Varun Shukla
            </footer>


        </div>
    )
}

export default Home
