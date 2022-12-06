const Location = (props) => {
    return (
        <>
            <div class="card">
                <img class="card-img-top" src={props.location.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{props.location.name}</h5>
                    <p class="card-text">{props.location.touristRating}</p>
                    <p>{props.location.info}</p>
                </div>
            </div>
        </>
    )
}

export default Location