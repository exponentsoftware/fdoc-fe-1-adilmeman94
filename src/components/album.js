import React from "react";

function Album(props) {
  const { artist, albumeName, albumCover, key, songs } = props;
  console.log(songs);
  return (
    <div className="card" style={{ width: "18rem" }} key={key ? key : ""}>
      <img src={albumCover} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{albumeName}</h5>
        <p className="card-text text-underline">
          <u>{artist}</u>
        </p>
        {songs &&
          songs.map((item) => (
            <div className="songlist">
              <strong>song</strong> : {item}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Album;
