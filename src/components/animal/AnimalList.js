import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {

    const { getAnimals, animals } = useContext(AnimalContext)
    const history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getAnimals()
    }, [])

    return (
      <>
        <h1>Animals</h1>

        <button onClick={() => history.push("/animals/create")}>
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
