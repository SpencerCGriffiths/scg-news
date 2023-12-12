import { useEffect } from "react"
import { getArticleById } from "../Utils/Queries"
import { DateConverter } from "../Utils/DateConverter"
import { useNavigate } from "react-router-dom";

const ViewSingleArticle = (props) => { 

    let navigate = useNavigate()


    const handleClick = () => { 
        navigate(-1)
    }

    const {singleArticle} = props

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
    <button onClick={handleClick}>return</button>
    </article>
    )
}

export default ViewSingleArticle