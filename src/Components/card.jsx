import { useContext } from "react";
import { appContext } from "../context";
import moment from "moment";
import ReactionButtons from "./ReactionButtons";
import { FaReply } from "react-icons/fa";
import { MdDelete,MdMode } from "react-icons/md";
import Editor from "./Editor"
import ReplyBox from "./ReplyBox";
import { getImageURL } from "../utils";

const Card=({user,score,id,parentId=null,replyingTo:replyingToUserName,content,createdAt})=>{

    const {currentUser:{username:currentUserName},replyingToID,setReplyingTo,setEditID,editID,setRemoveID}=useContext(appContext);
    return <>
        <blockquote className="bg-white mb-4 p-4 rounded grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 sm:grid-cols-[2.25rem_auto] sm:gap-x-5" >
            <div className="flex gap-x-3 items-center col-span-full sm:col-start-2 sm:row-start-1">
                <img src={getImageURL(user.image.png)} alt={user.username} className="w-8" />
                <p className="font-rubik font-bold">{user.username}
                {user.username===currentUserName && 
                    <span className="ml-1 font-rubik font-medium px-1 py-px rounded-sm text-white text-xs bg-moderate_blue">you</span>
                }
                </p> 
                <p>{moment(createdAt,moment.ISO_8601).isValid()?moment(createdAt).fromNow():createdAt}</p>
            </div>
            {editID==id?<Editor content={content}/> :
            <p className="text-justify col-span-full sm:col-start-2 sm:row-start-2">
                {!replyingToUserName ? content:
                <>
                    <span className="text-moderate_blue font-medium">@{replyingToUserName+" "}</span>
                    {content}
                </>
                }
            </p>
            }
            <ReactionButtons score={score}/>
            {user.username===currentUserName?
            <div className="flex gap-x-3 col-start-2 justify-self-end sm:row-start-1 sm:self-center">
                <button type="button" className="flex items-center text-soft_red gap-x-1" onClick={()=>setRemoveID(id,parentId)}><><MdDelete/><span className="font-bold">Delete</span></></button>
                <button type="button" className="flex items-center text-moderate_blue gap-x-1" onClick={()=>setEditID(id,parentId)}><><MdMode/><span className="font-bold">Edit</span></></button>
            </div>:
            <button type="button" className="flex text-moderate_blue gap-x-1 items-center col-start-2 justify-self-end sm:row-start-1 sm:self-center" onClick={()=>setReplyingTo(id,parentId??id)}>
                
                <FaReply/>
                <span className="font-bold">Reply</span>
                
            </button> 
            }
        </blockquote>

        {id===replyingToID && <ReplyBox to={user.username}/>} 
    </>
    
}

export default Card;