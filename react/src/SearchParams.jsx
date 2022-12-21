import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import fetchSearch from "../fetchSearch";
import AdoptedPetContext from "./AdoptedPetContext";
import Results from "./Results";
import useBreedList from "./useBreedList";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
	const [requestParams, setRequestParams] = useState({
		location: "",
		animal: "",
		breed: "",
	});
	const [animal, setAnimal] = useState("");
	const [breeds] = useBreedList(animal);
	const [adoptedPet] = useContext(AdoptedPetContext);

	const results = useQuery(["search", requestParams], fetchSearch);

	const pets = results?.data?.pets ?? [];

	return (
		<div className="search-params">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target);
					const obj = {
						animal: formData.get("animal") ?? "",
						breed: formData.get("breed") ?? "",
						location: formData.get("location") ?? "",
					};
					setRequestParams(obj);
				}}
			>
				{adoptedPet && (
					<div className="pet image-container">
						<img src={adoptedPet.images[0]} alt={adoptedPet.name} />
					</div>
				)}
				<label htmlFor="location">
					Location
					<input id="location" name="location" placeholder="location" />
				</label>
				<label htmlFor="animal">
					Animal
					<select
						name="animal"
						value={animal}
						onChange={(e) => {
							setAnimal(e.target.value);
						}}
						id="animal"
					>
						<option />
						{ANIMALS.map((animal) => (
							<option key={animal}>{animal}</option>
						))}
					</select>
				</label>
				<label htmlFor="breed">
					Breed
					<select disabled={!breeds.length} id="breed" name="breed">
						<option />
						{breeds.map((breed) => (
							<option key={breed} value={breed}>
								{breed}
							</option>
						))}
					</select>
				</label>
				<button type="submit">Submit</button>
			</form>
			<Results pets={pets} />
		</div>
	);
};

export default SearchParams;
