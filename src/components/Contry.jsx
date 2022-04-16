import React, { useState } from "react"
import axios from "axios"


export const Country = () => {

    const [country , setCountry] = useState()

    const data = {
        country: country
    }


    const datahandel = () => {
        axios.post("http://localhost:3001/country" , data).then(function(res) {
            console.log("CountryData :" , res.data  )
        })
    }
    

    return(
        <div>
            <input 
            type="text"
            placeholder="Enter Country" 
            onChange={(e) => {
                setCountry(e.target.value)
            }}
            
            />
            <button
                onClick={datahandel}
            >Add</button>
        </div>
    )
}