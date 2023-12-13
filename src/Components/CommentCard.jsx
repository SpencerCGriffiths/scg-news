import { useContext } from "react"
import { DateConverter } from "../Utils/DateConverter"
import UserContext from "../contexts/UserContext"
import { deleteComment } from "../Utils/Queries"
import { useParams } from "react-router-dom"

const CommentCard = (props) => { 

    const { currUser } = useContext(UserContext)
    const {comment, setComments} = props

    const handleClick = () => { 
        deleteComment(comment.comment_id)
        setComments((comments) => { 
            let updatedComments = comments.filter((com) => {
                return !(com.author === comment.author && com.comment_id === comment.comment_id);
            });
            console.log(updatedComments)
            return updatedComments;
        });
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