import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect, useState } from "react"
import { getCharacter } from "../services/servicesAPI"












export const CharactersDetail = () => {

    const {id} = useParams()

    const [character, setCharacter] = useState({})

    const {store, dispatch} = useGlobalReducer()

    const getCharacterData = async () =>{

       const characterData = await getCharacter(id)
       setCharacter(characterData)

    }

    useEffect(() => {
         getCharacterData()

    },[])

    const onAddToFavorito = () => {
        dispatch({type: "add_to_favorito", payload: character})
    }


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
                        src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                        alt={character.name}
                        className="img-fluid"
                        style={{ maxHeight: 260, objectFit: "contain" }}
                    />

                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h1 className="h4">{character.name}</h1>
                        <p className="fw-bold mb-2">Age: {character.age}</p>
                        <p className="fw-bold mb-2">{character.occupation}</p>
                        <p className="fw-bold mb-2"> {character.phrases}</p>

                        <div className="d-flex gap-2 mt-3">
                            <button className="btn btn-primary" onClick={onAddToFavorito} >
                                Agregar a favoritos

                            </button>
                           

                        </div>

                    </div>
                </div>

            </div>

        </div>



    )
}