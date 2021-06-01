import React, { useState, useEffect } from 'react'

import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import { helpHttp } from "../helpers/help.http";

const SongSearch = () => {

  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    (async () => {
      const { artist, song } = search;

      let artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${ artist }`;
      let songURL = `https://api.lyrics.ovh/v1/${ artist }/${ song }`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistURL), 
        helpHttp().get(songURL)
      ]);

      setLoading(false);

      setBiography(artistRes);
      setLyric(songRes);

    })();

  }, [search]);

  const handleSearch = (data) => {
    setSearch(data);
  }

  return (
    <div>
      <h2> SongSearch </h2>
      { loading && <Loader/> }
      <SongForm handleSearch={ handleSearch }/>
      { search && !loading && (
        <SongDetails search={ search } lyric={ lyric } bio={ biography }/>
      )}
    </div>
  )
}

export default SongSearch;
