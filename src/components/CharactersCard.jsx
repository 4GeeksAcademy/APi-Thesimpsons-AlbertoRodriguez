export const CharactersCard = ({character}) => {

    return(
        <div className="card h-100 shadows-sm d-flex flex-column">
            <div className="p-3 d-flex justify-content-center align-items-center product-img">
                <img src={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`} 
                alt="" 
                style={{maxHeight: 160, objectFit: "contain"}}/>

            </div>
            <div className="card-body">
                <h2 className="h6 card-title character-title mb-2">
                    {character.name}
                </h2>
                <p className="fw-bold mb-0">
                    
                    {character.occupation}
                </p>
                
            </div>
            <div className="card-footer bg-white border-0 mt-auto pt-0">
                <div className="d-flex gap-2">
                    
                        <button className="btn btn-outline-primary btn-sm ">
                             Ver mas
                         </button>
                    
                  
                     <button className="btn btn-primary btn-sm w-50">
                        Agregar
                    </button>
                </div>
            </div>
        </div>
    )
}