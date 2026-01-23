import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getLocationById } from "../services/servicesAPI"

getLocationById

export const LocationsDetail = () => {

    const { id } = useParams()

    const [location, setLocation] = useState({})





    const getLocationData = async () => {

        const LocationData = await getLocationById(id)
        setLocation(LocationData)

    }


    useEffect(() => {
        getLocationData()

    }, [])





    return (
        <div className="container py-4 simpson-bg mt-4">
            <Link to={"/"}>
                <button className=" btn btn-outline-secondary btn-link p-0 mb-3">
                  <i class="fa-solid fa-arrow-left"></i>  Volver
                </button>
            </Link>

            <div className="container d-flex justify-content-center">
                <div className="card shadow-sm simpson-card" style={{ maxWidth: '700px', maxHeight: '400px' }}>
                    <div className="row g-0">
                        <div className="col-md-5 p-3 d-flex justify-content-center align-items-center">
                            <img
                                src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`}
                                alt={location.name}
                                className="img-fluid"
                                style={{ maxHeight: '350px', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="col-md-7">
                            <div className="card-body">
                                <p>{location.name}</p>
                                <p>{location.town}</p>
                                <p>{location.use}</p>
                                <div className="d-flex gap-2 mt-3">
                                    <button className="btn btn-primary">Agregar a favoritos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>


    )
}