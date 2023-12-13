import { useContext } from "react"
import { DateConverter } from "../Utils/DateConverter"
import UserContext from "../contexts/UserContext"
import { deleteComment } from "../Utils/Queries"
import { useParams } from "react-router-dom"

const CommentCard = (props) => { 

    const { currUser } = useContext(UserContext)
    const {comment, setComments} = props


    const handleClick = () => { 
        // if (comment.comment_id) { 
        //     setComments((comments) => { 
        //         console.log(comments)
        //         let updatedComments = comments.filter((com) => {
        //             return !(com.author === comment.author && com.comment_id === comment.comment_id);
        //         });
        //         return updatedComments;
        //     })                 
        // } else { 
        //     setComments((comments) => { 
        //         let updatedComments = comments.filter((com) => {
        //             return !(com.author === comment.author && com.comment_id === comment.comment_id);
        //         });
        //         return updatedComments;
        //     })     
            deleteComment(comment.comment_id)
            .then((res) => { 
                console.log(res)
            })
            .catch(() => { 
                setComments((comments) => { return [...comments]})
            })    
        // }
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