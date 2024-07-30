import { useContext } from "react";
import { appContext } from '../context';

const Modal= ()=>{

    const {modalContainer,resetRemoveID,remove}=useContext(appContext);

    return <dialog ref={modalContainer} className="w-11/12 max-w-xs rounded-lg sm:p-5 backdrop:bg-black/40" >
        <h3 className="font-rubik font-bold mb-4">Delete comment</h3>
        <p className="font-rubik mb-4 text-grayish_blue">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
        <div className="flex justify-between gap-x-1">
            <button type="button" className="uppercase rounded-lg bg-grayish_blue px-5 py-2 font-rubik text-light_gray font-medium" onClick={resetRemoveID}>no,cancel</button>
            <button type="button" className="uppercase rounded-lg bg-soft_red px-5 py-2 font-rubik text-light_gray font-medium" onClick={remove} >yes,delete</button>
        </div>
    </dialog>


}

export default Modal;