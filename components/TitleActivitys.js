import React, { useEffect, useState } from "react";
// useState utilisé pour suivre les états
// useEffect est utilisé pour afficher les données de l'API après leur récupération ou leur chargement
const Activitys = () => {
  const [posts, setPosts] = useState([]); //usestate ayant la valeur initiale comme tableau nul
  const fetchData = () => {
    // fetch est utilisé pour récupérer des données à partir d'une source externe telle qu'une URL, etc.
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json(); // après avoir récupéré les données de l'URL, les données sont renvoyées au format JSON
      })
      .then((data) => {
        setPosts(data); // une fois que nous avons les données au format JSON, nous sommes prêts à les utiliser et à suivre les états également
      });
  };
  useEffect(() => {
    fetchData(); // utilisé pour afficher les données après le chargement
  }, []);
  return (
    <div className="flex-col my-10">
      <h1 className="text-5xl font-bold text-gray-800 text-center my-10">
        Nos <span className="text-blue-600">Activités</span>
      </h1>
      {posts.length > 0 && (
        <div className="flex justify-center items-center ">
          <div className="flex ml:flex-cols-4 flex-cols-1 gap-5 ">
            {posts.map((post) => {})}
          </div>
        </div>
      )}
    </div>
  );
};

export default Activitys;
