import axios from "axios"

export function getArticles (id) {  
        return axios
        .get("https://readaway.onrender.com/api/articles", {
          params: { 
            id : 3
          }
        })
        .then((res) => { 
          return res.data.articles
        })
}


export function getArticleById (id) {  
  return axios
  .get(`https://readaway.onrender.com/api/articles/${id}`, {
  })
  .then((res) => { 
    return res.data.article
  })
}

export function getCommentById (id) { 
  return axios
  .get(`https://readaway.onrender.com/api/articles/${id}/comments`)
  .then((res)=> { 
    return res.data.comments
  })
}


export function updateVotes (id, vote) { 
  return axios
  .patch(`https://readaway.onrender.com/api/articles/${id}`, 
  {"inc_votes": vote})
  .then((res) => { 
    console.log(res.data.updatedArticle.votes)
  })
  .catch((err) => { 
    console.log(err)
  })
}