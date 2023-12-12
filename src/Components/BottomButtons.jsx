import { Link } from 'react-router-dom'

const BottomButtons = () => { 
    return ( 
        <div className="BottomButtonPane"> 
<Link to='/'> 
            <button> Home </button>
</Link>
            <button> Category </button>
            <button> User </button>
            <button> Create </button>
        </div> 
    )
}

export default BottomButtons