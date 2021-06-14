import React, { useState, useEffect } from 'react'

import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import { helpHttp } from "../helpers/help.http";
import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import Error404 from '../pages/Error404';
import SongTable from './SongTable';
import SongPage from '../pages/SongPage';

let mySongsInit = JSON.parse(localStorage.getItem('mySongs')) || [];

const SongSearch = () => {

  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

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

      setBiography(artistRes);
      setLyric(songRes);
      setLoading(false);

    })();

    localStorage.setItem('mySongs', JSON.stringify(mySongs));

  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  }

  const handleSaveSong = () => {
    alert('Saving song in favorites...');
    let currentSong = {
      search,
      lyric,
      biography
    }
    let songs = [...mySongs, currentSong]
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem('mySongs', JSON.stringify(songs));
  }

  const handleDeleteSong = (id) => {
    const isDelete = window.confirm(
      `Are you sure to delete the song with id:${id}?`
    );

    if (isDelete) {
      let songs = mySongs.filter((_, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  }

  return (
    <div>
      <HashRouter basename="songs">
        <header>
          <h2> SongSearch </h2>
          <Link to="/"> Home </Link>
        </header>
        { loading && <Loader/> }
        <article className="grid-1-2">
          <Switch>
            <Route exact path="/">
              <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong} />
              <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
              { search && !loading && (
                <SongDetails search={search} lyric={lyric} bio={biography}/>
              )}
            </Route>
            <Route exact path="/:id" children={<SongPage mySongs={mySongs} />} />
            <Route path="*" children={<Error404/>}/>
          </Switch>
        </article>
      </HashRouter>
    </div>
  )
}

export default SongSearch;
