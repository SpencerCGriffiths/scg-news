import { DateConverter } from "../Utils/DateConverter"

const CommentCard = (props) => { 

    const {comment} = props

return ( <li>
                <div>{comment.author} commented</div>
                <div>{comment.body}</div>
                <div>{DateConverter(comment.created_at)}</div> 
                <section> 
                    <button>Yep</button>
                    <button>Nope</button>
                    <span> {comment.votes} Yeps</span>
                </section> 
            </li>
    )
}

export default CommentCard