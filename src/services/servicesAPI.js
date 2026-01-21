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
