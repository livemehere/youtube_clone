import Video from "../video/video";
import styles from "./videoList.module.css";

export default function VideoList({ videos }) {
  return (
    <div className={styles.videos}>
      {videos.map((video) => (
        <Video key={video.id} video={video} />
      ))}
    </div>
  );
}
