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
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' onChange={handleChange} value={location.name}/>
                <label htmlFor='rating'>Rating:</label>
                <input type='text' name='info' onChange={handleChange} value={location.info}/>
                <input type='submit'/>
                <label htmlFor='info'>Info:</label>
                <input type='text' name='info' onChange={handleChange} value={location.info}/>
                <input type='submit'/>
            </form>
        </details>
        </>
    )
}

export default Edit