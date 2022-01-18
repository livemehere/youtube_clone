import Video from "../video/video";
import styles from "./videoList.module.css";

export default function VideoList({ videos, setSelectedVideo }) {
  return (
    <div className={styles.videos}>
      {videos.map((video) => (
        <Video
          key={video.id}
          video={video}
          setSelectedVideo={setSelectedVideo}
        />
      ))}
    </div>
  );
}
