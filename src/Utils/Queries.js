import axios from "axios"

export function getArticles () {  
        return axios
        .get("https://readaway.onrender.com/api/articles")
        .then((res) => { 
          return res.data.articles
        })
}


export function getArticleById (id) {  
  return axios
  .get(`https://readaway.onrender.com/api/articles/${id}`)
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