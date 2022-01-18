import styles from "./detail.module.css";

export default function Detail({ video, video: { snippet } }) {
  return (
    <div>
      <iframe
        className={styles.iframe}
        title="Detail"
        src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
        frameBorder="0"
        allowFullScreen={true}
      ></iframe>
      <div className={styles.description}>
        <h1>{snippet.title}</h1>
        <h4>{snippet.publishedAt}</h4>
        <p>{snippet.description}</p>
      </div>
    </div>
  );
}
