import {initialActivityState} from "./state"
import moment from 'moment';



const reducer=(state,action)=>{

    if(action.type==='ADD COMMENT'){

        const {value}=action.info;
        const newComment={
            id:Date.now(),
            content: value,
            createdAt:moment().format(),
            score: 0,
            user: state.currentUser,
            replies:[]
        } 

        return {...state,comments:[...state.comments,newComment]}
    }

    if(action.type==='SET REPLY ID'){
        
        return {...state,...initialActivityState,replyingToID:action.info.id,parentID:action.info.parentID}
    }
   
    if(action.type==='ADD REPLY'){
        
        const {value,replyingTo}=action.info;
        const newReply={
            id:Date.now(),
            content: value,
            createdAt:moment().format(),  
            score: 0,
            user: state.currentUser,
            replyingTo
        }
        const updatedComments= state.comments.map(item=>{
            if(item.id!==state.parentID) return item;
            return {...item,replies:[...item.replies,newReply]}
        })

        return {...state,...initialActivityState,comments:updatedComments}
    }

    if(action.type=='SET REMOVE ID'){
        return {...state,...initialActivityState,deleteID:action.info.id,parentID:action.info.parentID}
    }


    if(action.type==='DELETE'){

        if(!state.parentID){
            // console.log(action.info);
            return{...state,comments:state.comments.filter(item=>item.id!==state.deleteID),...initialActivityState}
        }
       
        const updatedComments= state.comments.map(item=>{
            if(item.id!==state.parentID) return item;

            let updatedReplies= item.replies.filter(reply=>reply.id!==state.deleteID);
            return {...item,replies:updatedReplies}
        })
        return {...state,comments:updatedComments,...initialActivityState};
    }

    if(action.type==='SET EDIT ID'){
        return {...state,...initialActivityState,editID:action.info.id,parentID:action.info.parentID}
    }

    if(action.type==='EDIT COMMENT'){

        const updatedComments= state.comments.map(item=>{
            if(item.id!==state.editID) return item;

            return {...item,content:action.info}
        })
        return {...state,comments:updatedComments,...initialActivityState};

    }
    if(action.type==='EDIT REPLY'){

        const updatedComments= state.comments.map(item=>{
            if(item.id!==state.parentID) return item;

            let updatedReplies= item.replies.map(reply=>{
                if(reply.id!==state.editID) return reply;
                return {...reply,content:action.info}
            })
            return {...item,replies:updatedReplies}
        })
        return {...state,comments:updatedComments,...initialActivityState};

    }

    
    throw new Error('No Matching Action Type');
}


export default reducer;