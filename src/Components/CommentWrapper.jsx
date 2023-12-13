import { getCommentById } from "../Utils/Queries";
import CommentCard from "./CommentCard"
import { useEffect} from "react";
import { useState } from "react";
import NewComment from "./NewComment";
import { useParams } from "react-router-dom";

const CommentWrapper = () => { 
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    const [comments, setComments] = useState()

    useEffect(() => {
        getCommentById(id)
        .then((res)=> { 
            setComments(res);
            setIsLoading(false)
           ;
        })
        .catch((err) => { 
            console.log(err);
        });
    }, []);


if (isLoading) { 
    return <h1>Loading comments...</h1>
}

if(comments) { 

return ( 
<>
<NewComment setComments = { setComments } /> 
<ul> 
    {comments.map((comment, index)=> { 
        return <CommentCard comment = { comment } setComments= { setComments } key= {index}/> 
    })} 
</ul>
</>
) 
}
}

export default CommentWrapper