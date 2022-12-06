import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'

import Location from './components/Location.js'
import Add from './components/Add.js'
import Edit from './components/Edit.js'

const App = () => {
  const [locations, setLocations] = useState([])

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

useEffect(() => {
  getLocations()
}, [])



  return(
    <>
      <h1>Travel Destinations</h1>
      <Add handleCreate={handleCreate}/>
      <div className="d-flex flex-wrap">
      {locations.map((location) => {
        return (
          <div className="location-item">
            <Location location={location}/>
            <Edit location={location} handleEdit={handleEdit}/>
            <button onClick={()=>{handleDelete(location)}}>X</button>
          </div>
        )
      })}
      </div>
    </>
  )
}

export default App
