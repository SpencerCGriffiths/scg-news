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
    return res.data.updatedArticle.votes
  })
  .catch((err) => { 
    console.log(err)
  })
}

export function postNewComment (id, username, comment) { 
  return axios
  .post(`https://readaway.onrender.com/api/articles/${id}/comments`,
    { 
    "username": username,
    "body": comment})
  .then((res) => { 
    return res
  })
  .catch((err) => { 
    console.log(err)
  })
}

export function deleteComment (commentId) {
  return axios
  .delete(`https://readaway.onrender.com/api/comments/${commentId}`)
  .then((res) => { 
    return res
  })
  .catch((err) => { 
    console.log(err)
  }) 

}

export function getTopics () { 
  return axios.
  get(`https://readaway.onrender.com/api/topics`)
  .then((res) => { 
    return res.data.topics
  })
  .catch((err) => { 
    console.log(err)
  })
}


export function getArticleByTopic (topic) { 
  return axios
  .get(`https://readaway.onrender.com/api/articles?topic=${topic}`)
  .then((res) => { 
    return res.data.articles
  })
  .catch((err) => { 
    console.log(err)
  })
}