import { DateConverter } from "../Utils/DateConverter"
import { Link } from 'react-router-dom'
import { updateVotes } from "../Utils/Queries"
import { useContext, useState } from "react"

const ArticleCard = (props) => { 

const { article, setArticles } = props


const handleClick = (article_id, vote) => { 
  updatedArticles(article_id, vote)
  updateVotes(article_id, vote)
}

const updatedArticles = (article_id, vote) => { 
setArticles((articles) => {
 let updatedArray = articles.map((article) => { 
        if (article.article_id === article_id) { 
            article.votes += vote 
        }
        return article
    }) 
    console.log(updatedArray)
    return setArticles(updatedArray)
})
}


return ( <article  id="singleArticle" key = {article.article_id} > 
<Link className="Link" to={`/articles/${article.article_id}`}>
            <h3 id="articleTitle"> {article.title} </h3>
            
            <img src={article.article_img_url} id="articleImg"/> 
            </Link>         
            <div>{article.topic}</div> 
            <div>{DateConverter(article.created_at)}</div>
            <div> by {article.author}</div>
            <div>
            <span>{article.comment_count} comments</span>
            <span> {article.votes} </span>
            <button onClick={() => { 
            handleClick(article.article_id, 1)}}>likes</button>
            <button onClick={() => { 
            handleClick(article.article_id, -1)}}>Dislike</button>
            <Link className="Link" to={`/articles/${article.article_id}`} >
            <button>See Comments</button>
            </Link>
            </div>
        </article>
         )
}

export default ArticleCard