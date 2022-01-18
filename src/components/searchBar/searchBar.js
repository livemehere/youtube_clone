import { useState } from "react";
import styles from "./searchBar.module.css";

export default function SearchBar({ setVideos, youtube }) {
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
    youtube.search(query).then((data) => {
      console.log(data.items);
      setVideos(data.items);
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
        <img src="/logo.png" alt="logo" width="50" height="25" />
        <h1>KONGTUBE</h1>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={onChange} value={query} />
      </form>
    </div>
  );
}
