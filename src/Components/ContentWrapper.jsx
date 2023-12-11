import ArtHeader from "./ArtHeader"
import ViewAllArticles from "./ViewAllArticles"

const ContentWrapper = (props) => {
    
    const { articles } = props
    return ( 
        <> 
        <ArtHeader /> 
        <ViewAllArticles articles = {articles} /> 
        </>
    )
}

export default ContentWrapper