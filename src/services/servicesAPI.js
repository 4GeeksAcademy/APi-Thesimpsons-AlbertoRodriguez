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




export const getCharacter = async (id) => {
    const response = await fetch(`${BASE_URL}/characters/${id}`)
    if(!response.ok){
        console.log("hubo un error");
        return
    }
    const data = await response.json();
    return data


    
    
}





export const getLocation = async (dispatch) => {
    const response = await fetch(`${BASE_URL}/locations`)
    if(!response.ok){
        console.log("hubo un error");
        return
    }
    const data = await response.json();
     console.log('data received:', data);
    dispatch({type: "set_locations", payload: data.results})
    
    
}


export const getLocationById = async (id) => {
    const response = await fetch(`${BASE_URL}/locations/${id}`)
    if(!response.ok){
        console.log("hubo un error");
        return
    }
    const data = await response.json();
    return data
}
