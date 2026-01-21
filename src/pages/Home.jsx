import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getLocation } from "../services/servicesAPI.js";
import { CharactersCard } from "../components/CharactersCard.jsx";
import { LocationsCard } from "../components/LocationsCard.jsx";



export const Home = () => {
	const { store, dispatch } = useGlobalReducer();


	useEffect(() => {
		getCharacters(dispatch)
		getLocation(dispatch)
	}, []);

	return (
		<div className="container py-4">
			<div>
				<h1
					className="text-center fw-bold text-warning my-4"
					style={{ textShadow: "2px 2px 0 #000" }}
				>
					Los Simpsons
				</h1>
			</div>

			<div className="d-flex flex-nowrap overflow-auto gap-3">
				{store.characters.map(character => (
					<div className=" col-sm-6 col-md-4 col-lg-3" key={character.id}>
						<CharactersCard character={character} />
					</div>
				))}

			</div>


			<div className="d-flex flex-nowrap overflow-auto gap-3">
				{store.locations.map(location => (
					<div className=" col-sm-6 col-md-4 col-lg-3" key={location.id}>
						<LocationsCard location={location} />
					</div>
				))}

			</div>


		</div>
	);
};