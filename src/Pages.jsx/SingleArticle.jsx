import ViewSingleArticle from "../Components/CommentCard"
import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { getArticleById, getCommentById } from "../Utils/Queries"
import { useNavigate } from 'react-router-dom'
import { DateConverter } from "../Utils/DateConverter"
import CommentCard from "../Components/CommentCard"
import NewComment from "../Components/NewComment"
import UserContext from "../contexts/UserContext"
import CommentWrapper from "../Components/CommentWrapper"

const SingleArticle = () => { 

    const user = useContext(UserContext)


    let navigate = useNavigate()


    const handleClick = () => { 
        navigate(-1)
    }

    const [singleArticle, setSingleArticle] = useState()
    const [isLoading, setIsLoading] = useState(true)



    const {id} = useParams()


    useEffect(() => {
        getArticleById(id)
        .then((res) => { 
            setSingleArticle(res); 
            setIsLoading(false)
        })
        .catch((err) => { 
            console.log(err);
        });
    }, [id]);
    

if (isLoading) { 
    return <h1>Loading...</h1>
} 

if(singleArticle) { 
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
<CommentWrapper /> 
<button onClick={handleClick}>return</button>
</article>
)
}
} 
export default SingleArticle