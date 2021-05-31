import React, { useState } from 'react'

import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';

const SongSearch = () => {

  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data)
  }

  return (
    <div>
      <h2> SongSearch </h2>
      { loading && <Loader/> }
      <SongForm handleSearch={ handleSearch }/>
      <SongDetails search={ search } lyric={ lyric } bio={ biography }/>
    </div>
  )
}

export default SongSearch;
