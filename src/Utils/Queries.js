import axios from "axios"

export function getArticles () {  
        return axios
        .get("https://readaway.onrender.com/api/articles")
        .then((res) => { 
          return res.data.articles
        })
}


