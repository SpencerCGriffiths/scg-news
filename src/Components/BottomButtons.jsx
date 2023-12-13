import { Link } from 'react-router-dom'
import CategoryDraw from './CategoryDraw'

const BottomButtons = () => { 
    return ( 
        <div className="BottomButtonPane"> 
<Link to='/'> 
            <button> Home </button>
</Link>
            <button> Category </button>
            <button> User </button>
            <CategoryDraw /> 
        </div> 
    )
}

export default BottomButtons