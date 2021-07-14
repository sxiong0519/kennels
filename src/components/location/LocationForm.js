import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { LocationContext } from "./LocationProvider";
import "./Location.css"



export const LocationForm = () => {
  const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)
  
  const [isLoading, setIsLoading] = useState(true);

  const [location, setLocation] = useState({})

  const { locationId } = useParams();
  const history = useHistory();



  //when a field changes, update state. The return will re-render and display based on the values in state
  //Controlled component
  const handleControlledInputChange = (event) => {
    /* When changing a state object or array,
    always create a copy, make changes, and then set state.*/
    const newLocation = { ...location }
    /* Animal is an object with properties.
    Set the property to the new value
    using object bracket notation. */
    newLocation[event.target.id] = event.target.value
    // update state
    setLocation(newLocation)
  }

  const handleClickSaveLocation = () => {
    if (location.address === "" || location.name === "") {
        window.alert("Please complete the form")
    } else {
      //disable the button - no extra clicks
      setIsLoading(true);
      if (locationId) {
        //PUT - update
        updateLocation({
            id: location.id,
            name: location.name,
            address: location.address
        })
        .then(() => history.push(`/locations/detail/${location.id}`))
      } else {
        //POST - add
        addLocation({
          name: location.name,
          address: location.address,
      })
        .then(() => history.push("/locations"))
      }
    }
  }

  useEffect(() => {
    if (locationId) {
        getLocationById(locationId)
            .then(location => {
                setLocation(location)
                setIsLoading(false)
            })
    } else {
        setIsLoading(false)
    }
}, [])

return (
        <form className="locationForm">
            <h2 className="locationForm__title">New Location</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location name: </label>
                    <input type="text" id="name" required autoFocus className="form-control" placeholder="Location name" value={location.name} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location address: </label>
                    <input type="text" id="address" required autoFocus className="form-control" placeholder="Location address" value={location.address} onChange={handleControlledInputChange} />
                </div>
            </fieldset>
            <button className="btn btn-primary" disabled={isLoading} onClick={
                (event) => {
                    event.preventDefault()
                    handleClickSaveLocation()
                }
            }>
                {locationId ? <>Save Location</> : <>Add Location</>}
            </button>
        </form>
    )
}
