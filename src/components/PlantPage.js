import React from "react";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function PlantPage({ plants, onAddPlant, onToggleSoldOut, searchTerm, onSearchChange }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchTerm={searchTerm} onSearchChange={onSearchChange} />
      <PlantList plants={plants} onToggleSoldOut={onToggleSoldOut} />
    </main>
  );
}

export default PlantPage;
