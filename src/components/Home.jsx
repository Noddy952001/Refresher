import React, { useState } from "react";
import axios from "axios"



export const Home = () => {

    <h1>Home Page</h1>

    const [data , setData] = useState()
    const [deldata , setdelData] = useState(false)
    const [status ,setStatus] = useState(true)


    React.useEffect(() => {
        getdata()
        deletedata()
    },[deldata])

    const getdata =() => {
        axios.get("http://localhost:3001/cities").then(function(res){
            console.log(res.data)
            setData(res.data)
        })
    }


    const deletedata = (id) => {
        axios.delete(`${"http://localhost:3001/cities"}/${id}`).then(res => {
                const del = cities.filter(cities => id !== cities.id)
                setData(del)
                setdelData(true)
        })
        setdelData(true)
        getdata()
    }


    function handel_Acc_Dcc(){
        let All_data = data  
      
        if(status == true){
            All_data.sort( function (a,b){
              return Number(a.country) - Number(b.country);
            })
            setStatus(false)
        }
        else if(status == false){
            All_data.sort( function (a,b){
                return  Number(b.country)-Number(a.country);
            })
            setStatus(true)
        }
        setData(All_data);
      
        console.log("asaa",All_data)
    }

    function handel_country(){
        let All_data = data  
      
        if(status == true){
            All_data.sort( function (a,b){
              return Number(a.id) - Number(b.id);
            })
            setStatus(false)
        }
        else if(status == false){
            All_data.sort( function (a,b){
                return  Number(b.id)-Number(a.id);
            })
            setStatus(true)
        }
        setData(All_data);
      
        console.log("asaa",All_data)
    }


return(


    <div>


            <div className="btndiv">

             <button onClick={handel_country}>FilertCountry</button>   
            <button  onClick={handel_Acc_Dcc}>PopulationAcc</button>
            <button onClick={handel_Acc_Dcc}>PopulationDcc</button>
            
            </div>
        <div className="maindiv">
            <table className="table">
                    <thead>
                        <tr>
                            <th className="table">id</th>
                            <th  className="table">Country</th>
                            <th  className="table">City</th>
                            <th  className="table">Population</th>
                            <th  className="table">Edit</th>
                            <th  className="table">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el) => {
                            return (
                                <tr>
                                    <td className="table">{el.id}</td>
                                    <td className="table">{el.population}</td>
                                    <td className="table">{el.city}</td>
                                    <td className="table">{el.country}</td>
                                   <td> <button>Edit</button></td>
                                    <td><button
                                        onClick={ ()=> deletedata(el.id)}
                                    >Delete</button></td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>
        </div>
    </div>

    )
          
}


