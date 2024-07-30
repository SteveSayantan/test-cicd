import { useState } from "react";

const InputTemplate=({submitFn,userImg,buttonLabel,placeholder,replyingTo})=>{

    const [value,setValue]= useState('');

    const name=placeholder.toLowerCase().endsWith("comment")?"comment":"reply";

    const handleSubmit=(e)=>{
        e.preventDefault();
        submitFn({value,replyingTo});
        setValue('')    
    }

    return <form onSubmit={handleSubmit} className="bg-white mb-4 p-4 rounded grid grid-cols-[auto_1fr] items-center sm:grid-cols-[3rem_auto_90px] sm:items-start ">
        <textarea name={name} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)}  className="col-span-full h-24 py-2 px-4 mb-4 focus:ring-1 focus:ring-moderate_blue border rounded-md outline-none resize-none sm:col-start-2 sm:col-span-1 sm:mr-4"></textarea>
        <img src={userImg} alt="user image" className="w-8 sm:col-start-1 sm:row-start-1" />
        <button disabled={value.length===0} type="submit" className="uppercase col-start-2 justify-self-end bg-moderate_blue px-6 py-2 rounded-md font-medium text-white sm:col-start-3 sm:row-start-1">{buttonLabel}</button>

    </form>
}

export default InputTemplate;