import React from "react";
import Album from "./album";

function Albums(props) {
  const { albums } = props;
  return (
    <div className="App">
      {albums &&
        albums.map((item, index) => (
          <Album
            artist={item.artist}
            albumeName={item.album_title}
            albumCover={item.album_cover}
            key={index}
            songs={item.songs}
          />
        ))}
    </div>
  );
}

export default Albums;
