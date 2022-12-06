import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

import Location from './components/Location.js'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {
  const [locations, setLocations] = useState([])
  const [addLocation, setAddLocation] = useState(false)

  const getLocations = () => {
    axios.get('http://localhost:3000/locations')
    .then((response) => setLocations(response.data))
    .catch((error) => console.log(error))
  }

  const handleCreate = (data) => {
    axios.post('http://localhost:3000/locations', data)
    .then((response) => {
      console.log(response)
      let newLocations = [...locations, response.data]
      setLocations(newLocations)
    })
    setAddLocation(false)
  }

  const handleEdit = (data) => {
    axios.put('http://localhost:3000/locations/' + data._id, data)
    .then((response) => {
      console.log(response)

      let newLocations = locations.map((location) => {
        return location._id !== data._id ? location : data
      })

      setLocations(newLocations)
    })
  }

  const handleDelete = (deletedLocation) => {
    axios.delete('http://localhost:3000/locations/' + deletedLocation._id)
    .then((response) => {

      let newLocations = locations.filter((location) => {
        return location._id !== deletedLocation._id
      })

      setLocations(newLocations)
    })
  }

  const toggleAddLocation = () => {
    setAddLocation(prev => !prev)
  }

useEffect(() => {
  getLocations()
}, [])



  return(
    <div class="container">
      <h1>Travel Destinations</h1>
      <button class="btn btn-warning" onClick={toggleAddLocation}>Add Location</button>
      <div>
      {
        addLocation ? <Add handleCreate={handleCreate}/> : null
      }
      </div>
      <br/>
      <div className="d-flex flex-wrap justify-content-around">
      {locations.map((location) => {
        return (
          <div className="location-item">
            <Location location={location}/>
            <Edit location={location} handleEdit={handleEdit}/>
            <button class="btn btn-danger" onClick={()=>{handleDelete(location)}}>Delete</button>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default App
