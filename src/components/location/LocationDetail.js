import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
  const { getLocationById } = useContext(LocationContext)

	const [location, setLocation] = useState({})

	const {locationId} = useParams();

    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
        setLocation(response)
        })
    }, [])

    return (
        <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__employees">Employees at this location: <br/>
            {
                location.employees?.map(employee => {
                    return (
                    <> 
                    {employee.name + ", "}
                    </>
                    ) 
                    
            })
            }
        </div>
        <div className="location__animals">Animals at this location: <br />
            {
                location.animals?.map(animal => {
                    return (
                    <> 
                    {animal.name + ", "}
                    </>
                    ) 
                    
            })
            }
        </div>
        <button onClick={() => {
          history.push(`/locations/edit/${location.id}`)
         }}>Edit</button>
        </section>
    )
    }
