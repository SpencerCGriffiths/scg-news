import { useEffect } from "react"
import { getArticles } from "../Utils/Queries"

const ViewSingleArticle = () => { 
    
    useEffect(() => { 
        getArticles("3")
        .then((res) => { 
            console.log(res)
        })
    })

    return ( 

    <div id="singleArticle" className="headerMargin"> 
    <h1> Hello </h1>
    </div>
    )
}

export default ViewSingleArticle