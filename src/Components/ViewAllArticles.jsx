import { DateConverter } from "../Utils/DateConverter"

const ViewAllArticles = (props) => { 

const { articles } = props

return ( 
    <div className="articles"> 
     {articles.map((article) => { 
return <article key = {article.article_id} id="singleArticle"> 
            <h3 id="articleTitle"> {article.title} </h3>
            <div>{article.topic}</div> 
            <img src={article.article_img_url} id="articleImg"/> 
            <div>{DateConverter(article.created_at)}</div>
            <div> by {article.author}</div>
            <div>
            <span>{article.comment_count} comments</span>
            <button>likes</button>
            <button>Dislike</button>
            <button>See Comments</button>
            </div>
        </article>
     })}
   </div> 
)
}

export default ViewAllArticles