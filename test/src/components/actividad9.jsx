const ChuckNorrisJoke = (props) => {
    return (
        <div className = "card">
            <div className = "card-body">
                <h5 className = "card-title">Chuck Norris Says</h5>
                <p className = "card-text">"{props.value}"</p>
            </div>
        </div>
    )
}

export default ChuckNorrisJoke;