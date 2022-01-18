import "./app.css";
import { useState, useEffect } from "react";
import VideoList from "./components/videoList/videoList";

function App() {
  const [videos, setVideos] = useState([]);
  const getVideos = () => {
    fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=kr&key=${process.env.REACT_APP_YOUTUBE_KEY}`
    )
      .then((data) => data.json())
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
      <h1>Youtube</h1>
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
