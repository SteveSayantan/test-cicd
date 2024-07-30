import { useState } from "react";
import { useContext } from "react"
import { appContext } from '../context'

const Editor=({content})=>{

    const {editComment,editReply,parentID}=useContext(appContext);
    const[updatedComment,setUpdatedComment]=useState(content)

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!parentID){
            editComment(updatedComment);
            return;
        }
        editReply(updatedComment);

    }
    return  <form className="col-span-full sm:row-start-2 sm:col-start-2" onSubmit={handleSubmit}>
        <textarea name="comment" value={updatedComment} onChange={(e)=>setUpdatedComment(e.target.value)}  className="w-full h-28 py-2 px-4 mb-4 focus:ring-1 focus:ring-moderate_blue border rounded-md outline-none resize-none sm:col-start-2 sm:col-span-1 sm:mr-4"></textarea>
        <button disabled={updatedComment.length===0} type="submit" className="uppercase block ml-auto bg-moderate_blue px-6 py-2 rounded-md font-medium text-white">update</button>
</form>
}

export default Editor;