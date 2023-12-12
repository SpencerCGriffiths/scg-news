import { useEffect } from "react"
import { getArticleById } from "../Utils/Queries"
import { DateConverter } from "../Utils/DateConverter"

const ViewSingleArticle = (props) => { 
    
    const {singleArticle} = props
    console.log(singleArticle)

    return ( 
    <article id="singleArticle" className="headerMargin" key= {singleArticle.article_id}> 
    <span>{singleArticle.title}</span>
    <div>{singleArticle.topic}</div>
    <img src={singleArticle.article_img_url} width = "100%" height = "40%"/>
    <div>{singleArticle.body}</div>
    <div>by {singleArticle.author}</div>
    <div>posted {DateConverter(singleArticle.created_at)}</div>
    <span>{singleArticle.votes} votes</span>
    <div>{singleArticle.comment_count} comments</div>
    </article>
    )
}

export default ViewSingleArticle