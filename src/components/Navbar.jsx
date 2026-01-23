import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer();
  console.log(store.favorito);
  console.log(store.favorit);


  const delete_favorito = (characterinfo) => {


    dispatch({ type: "delete_favorito", payload: characterinfo })
    console.log("funciona");

  }

  const delete_favorit = (characterinf) => {


    dispatch({ type: "delete_favorit", payload: characterinf })
    console.log("funciona");

  }





  return (
    <nav className="navbar navbar-dark bg-warning">
      <div className="container">
        <div className="ms-auto">
          {/* Botón que abre el off-canvas */}
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#favoritosCanvas"
            aria-controls="favoritosCanvas"
          >
            Favoritos
          </button>

          {/* Off-canvas panel */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="favoritosCanvas"
            aria-labelledby="favoritosCanvasLabel"
          >
            <div className="offcanvas-header">
              <h5 id="favoritosCanvasLabel">Favoritos</h5>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body p-0">
              {/* Characters */}
              <div className="p-3">
                <h6 className="text-center mb-3" style={{ fontWeight: "bold" }}>
                  🍩 Characters 🍩
                </h6>

                {store.favorito.length > 0 ? (
                  store.favorito.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center rounded mb-2 p-2"
                      style={{ background: "#f8f9fa" }}
                    >
                      <span>{item.name}</span>
                      <span
                        onClick={() => delete_favorito(item)}
                        style={{ color: "#ff4444", cursor: "pointer" }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted text-center">No hay favoritos</p>
                )}

                <hr />

                {/* Locations */}
                <h6 className="text-center mb-3" style={{ fontWeight: "bold" }}>
                  🍩 Locations 🍩
                </h6>

                {store.favorit.length > 0 ? (
                  store.favorit.map((item) => (
                    <div
                      key={item.id}
                      className="d-flex justify-content-between align-items-center rounded mb-2 p-2"
                      style={{ background: "#f8f9fa" }}
                    >
                      <span>{item.name}</span>
                      <span
                        onClick={() => delete_favorit(item)}
                        style={{ color: "#ff4444", cursor: "pointer" }}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-muted text-center">No hay favoritos</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

