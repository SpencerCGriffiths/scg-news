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