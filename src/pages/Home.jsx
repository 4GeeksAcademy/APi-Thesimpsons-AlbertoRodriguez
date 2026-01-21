import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters } from "../services/servicesAPI.js";
import { CharactersCard } from "../components/CharactersCard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  

  useEffect(() => {
    getCharacters(dispatch)
  }, []);

  return (
   <div className="container py-4">
	<div>
		<h1>Characters</h1>
	</div>
	<div className="row g-3">
		{store.characters.map(character =>(
			<div className=" col-sm-6 col-md-4 col-lg-3" key={character.id}>
				<CharactersCard character={character}/>
			</div>
		))}
		
	</div>

   </div>
  );
};