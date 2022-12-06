const Location = (props) => {
    return (
        <>
            <div class="card">
                <img class="card-img-top" src={props.location.image} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">Location: {props.location.name}</h5>
                    <h5 class="card-text">Tourist Rating: {props.location.touristRating}</h5>
                    <h5 class="card-text">Information: {props.location.info}</h5>
                </div>
            </div>
        </>
    )
}

export default Location