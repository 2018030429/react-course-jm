import React, { useState, useEffect } from 'react'

import Loader from './Loader';
import SongDetails from './SongDetails';
import SongForm from './SongForm';
import { helpHttp } from "../helpers/help.http";
import { HashRouter, Link, Switch, Route } from 'react-router-dom';
import Error404 from '../pages/Error404';
import SongTable from './SongTable';

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

      setLoading(false);

      setBiography(artistRes);
      setLyric(songRes);

    })();

    localStorage.setItem('mySongs', JSON.stringify(mySongs));

  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  }

  const handleSaveSong = () => {
    alert('Saving song in favorites...');
  }

  const handleDeleteSong = (id) => {
    alert('Deleting song from favorites...');
  }

  return (
    <div>
      { loading && <Loader/> }
      <HashRouter basename="songs">
        <header>
          <h2> SongSearch </h2>
          <Link to="/"> Home </Link>
          <article className="grid-1-2">
            <Switch>
              <Route exact path="/">
                <SongForm handleSearch={handleSearch} handleSaveSong={handleSaveSong}>
                  <SongTable mySongs={mySongs} handleDeleteSong={handleDeleteSong} />
                  { search && !loading && (
                    <SongDetails search={search} lyric={lyric} bio={biography}/>
                  )}
                </SongForm>
              </Route>
              <Route exact path="/:id" >
                <h2> Song Page </h2>
              </Route>
              <Route path="" children={<Error404/>}/>
            </Switch>
          </article>
        </header>
      </HashRouter>
    </div>
  )
}

export default SongSearch;
