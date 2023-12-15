const Error = (props) => { 
    const {message} = props
    let style = {}
    if(message === "page not found") { 
        style = { paddingTop: '50vh', textAlign: 'center' }
    } else { 
        style = { paddingTop: '0vh' }
    }

    return (
        <div className="error" style={ style }>
            <h2>Error</h2>
            <p>{message}</p>
        </div>
    )
}

export default Error; 