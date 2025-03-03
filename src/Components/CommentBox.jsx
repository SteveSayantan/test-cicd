import { useContext } from "react";
import { appContext } from "../context";
import InputTemplate from "./input-template";
import { getImageURL } from "../utils";

const CommentBox=()=>{

    const {currentUser:{image},addComment}=useContext(appContext);


    return <InputTemplate submitFn={addComment} userImg={getImageURL(image.png)} buttonLabel='send' placeholder={'Add a comment...'}/>
}

export default CommentBox;