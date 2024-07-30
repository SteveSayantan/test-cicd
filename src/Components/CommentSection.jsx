import { useContext } from 'react';
import { appContext } from '../context';
import Card from './card';


const CommentSection=()=>{

    const {comments}=useContext(appContext);

    if(comments.length==0){
        return <section>
            <p className='mb-3 text-center capitalize'>no comments to display</p>
        </section>
    }

    return <section>
        {comments.map((item)=>{

            return <Comment item={item} key={item.id}/>
            
        })}
    </section>
}

const Comment=({item})=>{

    return <>
    
        <Card {...item}/>
        {
            item.replies?.length > 0 && 
            <section className="border-l-2 border-light_gray pl-4 sm:pl-8">
            {item.replies.map(reply=>{
                return <Card key={reply.id} {...reply} parentId={item.id}/>
            })}
            </section>
        }
    </>
}


export default CommentSection;