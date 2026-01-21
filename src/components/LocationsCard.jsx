export const LocationsCard = ({location}) => {

    return (
        <div className="card h-100 shadows-sm d-flex flex-column">
            <div className="p-3 d-flex justify-content-center align-items-center product-img">
                <img src={`https://cdn.thesimpsonsapi.com/500${location.image_path}`}
                    alt=""
                    style={{ maxHeight: 160, objectFit: "contain" }} />

            </div>
            <div className="card-body text-center">
                <h1 className="h5 card-title character-title mb-1">
                    {location.name}
                </h1>

                <p className="text-muted mb-2">
                    {location.town}
                </p>

                <span className="badge bg-primary">
                    {location.use} 
                </span>
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