import { Link } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";


export const CharactersCard = ({ character }) => {

     const {store, dispatch} = useGlobalReducer()

     const onAddToFavorito = () => {
        dispatch({type: "add_to_favorito", payload: character})
    }

    return (
        <div className="card h-100 shadows-sm d-flex flex-column">
            <div className="p-3 d-flex justify-content-center align-items-center product-img">
                <img src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                    alt=""
                    style={{ maxHeight: 160, objectFit: "contain" }} />

            </div>
            <div className="card-body text-center">
                <h1 className="h5 card-title character-title mb-1">
                    {character.name}
                </h1>

                <p className="text-muted mb-2">
                    {character.occupation}
                </p>

                <span className="badge bg-primary">
                    {character.age} 
                </span>
            </div>
            <div className="card-footer bg-white border-0 mt-auto pt-0">
                <div className="d-flex gap-2">

                    <Link to={`/character/${character.id}`}>
                        <button className="btn btn-outline-primary btn-sm ">
                            Ver mas
                        </button>
                    </Link>


                    <button className="btn btn-primary btn-sm w-50" onClick={onAddToFavorito}>

                        <i class="fa-regular fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}