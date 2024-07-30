import { useReducer,useRef } from 'react';
import CommentBox from './Components/CommentBox';
import CommentSection from './Components/CommentSection';
import data from './data';
import reducer from './reducer';
import Modal from './Components/Modal';
import { initialActivityState } from './state';
import { appContext } from './context';

const initialState={
  currentUser:data.currentUser,
  comments:data.comments,
  ...initialActivityState
}

export default function App(){

  const[state,dispatch]=useReducer(reducer,initialState);

  const modalContainer=useRef(null);

  const displayModal=()=>{
    modalContainer.current.showModal();
  }
  const closeModal=()=>{
    modalContainer.current.close();
  }

  const addComment=(payload)=>{
    dispatch({type:'ADD COMMENT',info:payload})
  }

  
  const setReplyingTo=(id,parentID=null)=>{
    dispatch({type:'SET REPLY ID',info:{id,parentID}})
  }

  const addReply=(payload)=>{
    dispatch({type:'ADD REPLY',info:payload});
  }

  const setRemoveID=(id=null,parentID=null)=>{
    if(id) displayModal();
    dispatch({type:'SET REMOVE ID',info:{id,parentID}});
  }

  const resetRemoveID=()=>{
    closeModal();
    setRemoveID();
  }

  const remove=()=>{
    closeModal();
    dispatch({type:'DELETE'});
  }

  const setEditID=(id,parentID=null)=>{
    dispatch({type:'SET EDIT ID',info:{id,parentID}});
  }

  const editComment=(content)=>{
    dispatch({type:'EDIT COMMENT',info:content})
  }
  const editReply=(content)=>{
    dispatch({type:'EDIT REPLY',info:content})
  }

  return <appContext.Provider value={{...state,remove,addComment,setRemoveID,resetRemoveID,setReplyingTo,addReply,setEditID,editComment,editReply,modalContainer}}>
    <main className="w-11/12 m-auto my-10 max-w-3xl">
      <CommentSection/>
      <CommentBox/>
      <Modal/>
    </main>
  </appContext.Provider>
}
