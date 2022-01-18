import "./app.css";
import { useState, useEffect } from "react";
import VideoList from "./components/videoList/videoList";
import SearchBar from "./components/searchBar/searchBar";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const getVideos = () => {
    youtube
      .mostPopular() //
      .then((data) => {
        console.log(data.items);
        setVideos(data.items);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="App">
      <SearchBar setVideos={setVideos} youtube={youtube} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
