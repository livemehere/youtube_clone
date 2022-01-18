import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ setVideos, youtube, setSelectedVideo }) {
  const [query, setQuery] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    //TODO: 검색후 videos update
    search(query);
    setQuery("");
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const search = (query) => {
    youtube
      .search(query) //
      .then((data) =>
        data.items.map((item) => ({ ...item, id: item.id.videoId }))
      ) //
      .then((items) => {
        setVideos(items);
        setSelectedVideo(null);
      });
  };
  return (
    <div className={styles.search}>
      <div
        className={styles.title}
        onClick={() => {
          window.location.reload(false);
        }}
      >
        <img src="/youtube_clone/logo.png" alt="logo" width="50" height="25" />
        <h1>KONGTUBE</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={query} />
      </form>
    </div>
  );
}
