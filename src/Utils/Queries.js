import axios from "axios"

export function getArticles (id) {  
        return axios
        .get("https://readaway.onrender.com/api/articles", {
          params: { 
            id : 3
          }
        })
        .then((res) => { 
          console.log(res.data.articles)
          return res.data.articles
        })
}


