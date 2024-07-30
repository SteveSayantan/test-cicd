import { useState } from "react";
import { BiPlus } from "react-icons/bi";
import { BiMinus } from "react-icons/bi";

const ReactionButtons=({score})=>{
    const [count,setCount]=useState(score);

    return <div className="bg-very_light_gray px-2 py-2 rounded-lg text-center col-start-1 flex sm:block sm:row-start-1 sm:row-span-2 sm:px-1 sm:h-min">
        <button type="button" className="text-light_grayish_blue" onClick={()=>setCount(count+1)}><BiPlus/></button>
        <p className="px-3 font-bold text-center text-moderate_blue sm:px-0">{count}</p>
        <button type="button" className="text-light_grayish_blue" onClick={()=>setCount(count-1)}><BiMinus/></button>
        </div>
}

export default ReactionButtons;
