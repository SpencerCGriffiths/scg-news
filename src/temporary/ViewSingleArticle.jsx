import { useEffect } from "react"
import { getArticleById } from "../Utils/Queries"
import { DateConverter } from "../Utils/DateConverter"

const ViewSingleArticle = (props) => { 
    
    const {singleArticle, comments} = props

    return ( 
    <section id="singleArticle" className="headerMargin" key= {singleArticle.article_id}> 
    <article> 
    <span>{singleArticle.title}</span>
    <div>{singleArticle.topic}</div>
    <img src={singleArticle.article_img_url} width = "100%" height = "40%"/>
    <div>{singleArticle.body}</div>
    <div>by {singleArticle.author}</div>
    <div>posted {DateConverter(singleArticle.created_at)}</div>
    <span>{singleArticle.votes} votes</span>
    <div>{singleArticle.comment_count} comments</div>
    </article>
    <ul> 
        {comments.map((comment)=> { 
            return <li key= {comment.comment_id}>
                <div>{comment.author} commented</div>
                <div>{comment.body}</div>
                <div>{comment.created_at}</div> 
                <section> 
                    <button>Yep</button>
                    <button>Nope</button>
                    <span> {comment.votes} Yeps</span>
                </section> 
            </li>
        })}
    </ul>
    </section>

    )
}

export default ViewSingleArticle