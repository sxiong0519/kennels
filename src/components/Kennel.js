import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { EmployeeCard } from "./employee/EmployeesCard"
import { CustomersCard } from "./customer/CustomersCard"
import { LocationCard } from "./location/LocationsCard"

//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.
export const Kennel = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Employees</h2>
        <article className="animals">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>

        <h2>Employees</h2>
        <article className="animals">
            <LocationCard />
            <LocationCard />
        </article>

        <h2>Employees</h2>
        <article className="animals">
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
            <CustomersCard />
        </article>
    </>
)
