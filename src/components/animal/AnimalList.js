import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router"

export const AnimalList = () => {
    
    const { animals, getAnimals } = useContext(AnimalContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("AnimalList: useEffect - getAnimals")
    getAnimals()

  }, [])

    const history = useHistory()

return (
    <>
        <h2>Animals</h2>
		<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        </button>
        <div className="animals">
        {
			animals.map(animal => {
				return <AnimalCard key={animal.id} animal={animal} />
			})
        }
        </div>
    </>
)

}
