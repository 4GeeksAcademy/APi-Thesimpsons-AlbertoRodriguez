import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

  const { store, dispatch } = useGlobalReducer();
  console.log(store.favorito);

  const delete_favorito = (characterinfo) => {
    
    
     dispatch({type: "delete_favorito", payload: characterinfo })
    console.log("funciona");
    
  }
  
  


  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
       
        <div className="ms-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos
            </button>
            <ul className="dropdown-menu dropdown-end">
              {store.favorito.length > 0 ? store.favorito.map((item) =>{
                  return   <li className="dropdwn-item text-muted">{item.name} <span onClick={() => delete_favorito(item)}><i class="fa-solid fa-trash"></i></span></li>

                  
              }):<li className="dropdwn-item text-muted">No hay favoritos</li>}
              
              
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
