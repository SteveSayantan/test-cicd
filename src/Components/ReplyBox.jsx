import { useContext } from "react";
import { appContext } from '../context';
import InputTemplate from "./input-template";
import { getImageURL } from "../utils";

const ReplyBox=({to})=>{

    const {currentUser:{image},addReply}=useContext(appContext);


    return <InputTemplate submitFn={addReply} userImg={getImageURL(image.png)} buttonLabel='reply' placeholder={'Add a reply...'} replyingTo={to}/>
}

export default ReplyBox;