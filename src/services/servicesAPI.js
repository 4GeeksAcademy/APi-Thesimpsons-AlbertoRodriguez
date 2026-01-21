const BASE_URL = "https://thesimpsonsapi.com/api"


export const getCharacters = async (dispatch) => {
    const response = await fetch(`${BASE_URL}/characters`)
    if(!response.ok){
        console.log("hubo un error");
        return
    }
    const data = await response.json();
     console.log('data received:', data);
    dispatch({type: "set_characters", payload: data.results})
    
    
}


const BAS_URL = "https://thesimpsonsapi.com/api"
export const getLocation = async (dispatch) => {
    const response = await fetch(`${BAS_URL}/locations`)
    if(!response.ok){
        console.log("hubo un error");
        return
    }
    const data = await response.json();
     console.log('data received:', data);
    dispatch({type: "set_locations", payload: data.results})
    
    
}

