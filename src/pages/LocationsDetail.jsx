import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import {  getLocationById } from "../services/servicesAPI"

getLocationById

export const LocationsDetail = () => {

    const { id } = useParams()

    const [location, setLocation] = useState({})

   
    


    const getLocationData = async () => {

        const LocationData = await  getLocationById(id)
        setLocation(LocationData)

    }


    useEffect(() => {
        getLocationData()

    }, [])





    return (
        <div className="container py-4 simpson-bg">
            <Link to={"/"}>
                <button className=" btn btn-outline-secondary btn-link p-0 mb-3">
                    Volver
                </button>
            </Link>

            <div className="card shadow-sm simpson-card">
                <div className="col-md-4 p-3 d-flex justify-content-center align-items-center">
                    <img
                        src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`}
                        alt={location.name}
                        className="img-fluid"
                        style={{ maxHeight: 260, objectFit: "contain" }}
                    />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                       <p>{location.name}</p>
                       <p>{location.town}</p>
                        <p>{location.use}</p>
                        
                        
                       

                        <div className="d-flex gap-2 mt-3">
                            <button className="btn btn-primary" >
                                Agregar a favoritos

                            </button>


                        </div>

                    </div>
                </div>

            </div>

        </div>


    )
}