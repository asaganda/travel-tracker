import {useState} from 'react'

const Edit = (props) => {
    const [location, setLocation] = useState({...props.location})

    const handleChange = (event) => {
        setLocation({...location, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleEdit(location)
    }

    return(
        <>
        <details>
            <summary>Edit Location</summary>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' onChange={handleChange} value={location.name}/>
                </div>
                <div class="form-group">
                    <label htmlFor='image'>Picture:</label>
                    <input type='text' name='image' onChange={handleChange} value={location.image}/>
                </div>
                <div class="form-group">
                    <label htmlFor='touristRating'>Rating: {location.touristRating}</label>
                    <input type='range' class="custom-range" min="0" max="5" name='touristRating' onChange={handleChange} value={location.touristRating}/>
                </div>
                <div class="form-group">
                    <label htmlFor='info'>Info:</label>
                    <textarea class="form-control" rows="3" type='text' name='info' onChange={handleChange} value={location.info}></textarea>
                </div>
                <input type='submit' class="btn btn-primary"/>
            </form>
        </details>
        </>
    )
}

export default Edit