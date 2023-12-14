import axios from "axios"

export function getArticles (topic, sort_by, order_by) {  
  const baseURL =  "https://readaway.onrender.com/api/articles";

  const params = {
    topic: topic,
    sort_by: sort_by,
    order_by: order_by,
  }; 

  const url = `${baseURL}?topic=${params.topic}&sort_by=${params.sort_by}&order_by=${params.order_by}`;
  console.log('Request URL:', url); // Logging the URL

  return axios.get(baseURL, { params })
      .then((res) => {
          return res.data.articles
        })
        .catch((error) => {
        console.error('Error fetching data:', error);
      });
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
  .catch(error => {
    if (error.response) {
      console.log('Server responded with an error status:', error.response.status);
    } else if (error.request) {
      return Promise.reject({ status: error.message, message: "Comment was not deleted" })
    } else {
      console.log('Error during request setup:', error.message);
    }
  });
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