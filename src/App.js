import React, { useState } from "react";
import "./App.css";
import Album from "./components/album";
import Albums from "./components/albums";

function App() {
  const [artist, setArtist] = useState("A R Rahman");
  const [albumeName, setAlbumName] = useState("RockStar");
  const [albumCover, setAlbumCover] = useState(
    "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b"
  );

  const albums = [
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
    {
      id: 1,
      artist: "A R Rahman",
      album_title: "Rockstar",
      album_cover:
        "https://i.scdn.co/image/ab67616d0000b27354e544672baa16145d67612b",
      songs: ["e nadan parinde", "hawa hawa", "sadda haq"],
    },
  ];
  return (
    <div className="App">
      <Album artist={artist} albumeName={albumeName} albumCover={albumCover} />
      <Albums albums={albums} />
    </div>
  );
}

export default App;
