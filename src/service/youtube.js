class Youtube {
  constructor(key) {
    this.key = key;
  }

  async mostPopular() {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=kr&key=${this.key}`
    );
    return await data.json();
  }

  async search(query) {
    const data = await fetch(
      `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&key=${this.key}&type=video&maxResults=100`
    );
    return await data.json();
  }
}

export default Youtube;
