import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { animals, getAnimals } = useContext(AnimalContext) //using animalcontext from animalprovider module/component as an argument to usecontext

  //useEffect - reach out to the world for something
  useEffect(() => {//useEffect = listen for customevents 
    console.log("AnimalList: useEffect - getAnimals") //first argument contains a logic that should run
    getAnimals() //gets invoked and will change the value in line 8 "animals"

  }, []) //second argument -array that is being observed that if a value changes then the function will run


  return (
    <div className="animals">
      {console.log("AnimalList: Render", animals)}
      {
        animals.map(animal => {
          return <AnimalCard key={animal.id} animal={animal} />
        })
      }
    </div>
  )
}
