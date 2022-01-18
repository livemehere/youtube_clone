import styles from "./video.module.css";

export default function Video({ video }) {
  let title = video.snippet.title;
  return (
    <div className={styles.video}>
      <img
        className={styles.thumbnail}
        src={video.snippet.thumbnails.high.url}
        alt="thumbnails"
      />
      <h3 className={styles.title}>
        {title.length < 35 ? title : `${title.slice(0, 35)}...`}
      </h3>
    </div>
  );
}
