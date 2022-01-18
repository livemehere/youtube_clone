import "./app.css";
import { useState, useEffect } from "react";
import VideoList from "./components/videoList/videoList";
import SearchBar from "./components/searchBar/searchBar";
import Detail from "./components/detail/detail";

function App({ youtube }) {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const getVideos = () => {
    youtube
      .mostPopular() //
      .then((data) => {
        setVideos(data.items);
      });
  };

  useEffect(() => {
    getVideos();
  }, []);
  return (
    <div className="App">
      <SearchBar
        setVideos={setVideos}
        setSelectedVideo={setSelectedVideo}
        youtube={youtube}
      />
      <div className={selectedVideo && "content"}>
        <div className="detail">
          {selectedVideo && <Detail video={selectedVideo} />}
        </div>
        <div className="list">
          <VideoList videos={videos} setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
