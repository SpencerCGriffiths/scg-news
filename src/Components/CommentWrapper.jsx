import { getCommentById } from "../Utils/Queries";
import CommentCard from "./CommentCard"
import { useEffect} from "react";
import { useState } from "react";
import NewComment from "./NewComment";
import { useParams } from "react-router-dom";
import Error from "./Error";

const CommentWrapper = () => { 
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()
    const [comments, setComments] = useState()
    const [isError, setIsError] = useState(false)
    const [errMsg, setErrMsg] = useState("")

    useEffect(() => {
        setIsError(false)
        getCommentById(id)
        .then((res)=> { 
            setComments(res);
            setIsLoading(false);
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
    {isError ? <Error message = {errMsg} /> : null }
    {comments.map((comment, index)=> { 
        return <CommentCard comment = { comment } setComments= { setComments } key= {index} setIsError = {setIsError} setErrMsg ={setErrMsg}/> 
    })} 
</ul>
</>
) 
}
}

export default CommentWrapper