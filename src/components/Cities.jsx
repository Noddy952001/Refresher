import React, { useState } from "react"
import axios from "axios"


export const Cities = () => {


    const  [city , setCity ]  = useState()
    const [country ,  setCountry]  = useState()
    const [population ,  setPopulation]  = useState()

    const data = {
        city : city,
        country : country,
        population : population
    }


    const handelSubmit = () => {
        axios.post ("http://localhost:3001/cities" , data).then(function (res){
            console.log(res.data)
        })
    } 
    




    return(
        <div>

            <div>Add City Page</div>

      



            <input 
             type="text"
             placeholder="Enter city"
             onChange={(e) => {
                setCity(e.target.value)
             }}
             
             /> <br />
            <input 
             type="text"
             placeholder="Enter Population"
             onChange={(e) => {
                setCountry(e.target.value)
             }}
             
             /> <br />
            <input 
             type="text"
             placeholder="Enter Country"
             onChange={(e) => {
                setPopulation(e.target.value)
             }}
             
             /> <br />
            <button 
                onClick={handelSubmit}
            >Add</button>
        </div>
    )
}