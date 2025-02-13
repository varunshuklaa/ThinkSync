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



import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateTopastes } from '../redux/pasteSlice';

const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);


    useEffect(() => {
        console.log("inside use effect");
        if(pasteId && allPastes.length > 0){
            const paste = allPastes.find((p) => p._id
            === pasteId);
            if (paste) {
                console.log("Page Found");
                setTitle(paste.title);
                setValue(paste.content);
            } else {
                console.log("No paste found with this ID");
                setTitle("");  // Reset state to avoid stale data
                setValue("");
            }
        }      
    }, [pasteId, allPastes])
    


    function createPaste() {
        const paste={
            title:title,
            content: value,
            _id:pasteId || Date.now().toString(36),
            createedAt:new Date().toISOString(),
        }

       

        if(pasteId){
            //update
            dispatch(updateTopastes(paste));
        }
        else{
            //create
            dispatch(addToPastes(paste));
        }

        //after creation or updation
        setTitle('');
        setValue('');
        setSearchParams({});
    }

   

    return (
        <div>
            <div
                className='flex flex-row gap-7 place-content-between'>
                <input
                    className='p-1 rounded-2xl mt-2 w-[66%] pl-4'
                    type="text"
                    placeholder='Enter value here'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button
                    onClick={createPaste}
                    className='p-2 rounded-2xl mt-2'>{
                        pasteId ? "Update My Paste" : "Create My Paste"}
                </button>
            </div>

            <div className='mt-8'>
                <textarea
                    className='rounded-2xl mt-4, min-w-[500px] p-4'
                    value={value}
                    placeholder='enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                />
            </div>
        </div>


    )
}

export default Home
