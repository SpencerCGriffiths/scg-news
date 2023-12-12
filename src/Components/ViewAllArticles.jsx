import { DateConverter } from "../Utils/DateConverter"
import { Link } from 'react-router-dom'

const ViewAllArticles = (props) => { 

const { articles } = props

return ( 
    <div className="articles"> 
     {articles.map((article) => { 
return <article  id="singleArticle" key = {article.article_id} > 
<Link className="Link" to={`/articles/${article.article_id}`}>
            <h3 id="articleTitle"> {article.title} </h3>
            
            <img src={article.article_img_url} id="articleImg"/> 
            </Link>         
            <div>{article.topic}</div> 
            <div>{DateConverter(article.created_at)}</div>
            <div> by {article.author}</div>
            <div>
            <span>{article.comment_count} comments</span>
            <button>likes</button>
            <button>Dislike</button>
            <Link className="Link" to={`/articles/${article.article_id}`} >
            <button>See Comments</button>
            </Link>
            </div>
        </article>
        
     })}
   </div> 
)
}

export default ViewAllArticles