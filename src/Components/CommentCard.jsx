import { useContext } from "react"
import { DateConverter } from "../Utils/DateConverter"
import UserContext from "../contexts/UserContext"
import { deleteComment } from "../Utils/Queries"
import { useParams } from "react-router-dom"

const CommentCard = (props) => { 

    const { currUser } = useContext(UserContext)
    const {comment, setComments, setIsError, setErrMsg} = props


    const handleClick = () => {  
            deleteComment(comment.comment_id)
            .then((res) => { 
                setIsError(false)
                setComments((comments) => { 
                  return comments.filter((com) => com.comment_id !== comment.comment_id) 
            })})
            .catch((err) => { 
                setIsError(true)
                setErrMsg(err.message)
            })    
    };   

   

return ( <li>
                <div>{comment.author} commented</div>
                <div>{comment.body}</div>
                <div>{DateConverter(comment.created_at)}</div> 
                <section> 
                    <button>Yep</button>
                    <button>Nope</button>
                    <span> {comment.votes} Yeps</span>
                    {currUser === comment.author ? 
                    <button onClick={handleClick} >delete Comment</button> : 
                    null }
                </section> 
            </li>
    )
}

export default CommentCard