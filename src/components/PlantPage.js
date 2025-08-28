import React from "react";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage({ plants, onAddPlant, onToggleSoldOut, searchTerm, onSearchChange }) {
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <PlantList plants={filteredPlants} onToggleSoldOut={onToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
