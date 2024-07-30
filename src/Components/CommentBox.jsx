import { useContext } from "react";
import { appContext } from "../context";
import InputTemplate from "./input-template";

const CommentBox=()=>{

    const {currentUser:{image},addComment}=useContext(appContext);


    return <InputTemplate submitFn={addComment} userImg={image.png} buttonLabel='send' placeholder={'Add a comment...'}/>
}

export default CommentBox;