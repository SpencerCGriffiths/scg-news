import { DateConverter } from "../Utils/DateConverter"
import { Link } from 'react-router-dom'
import { updateVotes } from "../Utils/Queries"
import { useEffect } from "react"
import { useState } from "react"

const ViewAllArticles = (props) => { 

const { articles , setArticles } = props

const handleClick = (article_id, vote) => { 
  updatedArticles(article_id, vote)
  return updateVotes(article_id, vote)  
}

const updatedArticles = (article_id, vote) => { 
  const updatedArticles = articles.map((article) => { 
    if(article.id === article_id) { 
      return { ...article, 
        votes: article.votes + vote }
    }
    return article 
  })
  setArticles(updatedArticles)
}

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
        
     })}
   </div> 
)
}

export default ViewAllArticles