import React, { Fragment } from 'react'
import Message from './Message';

import SongArtist from "./SongArtist";
import SongLyrics from './SongLyrics';

const SongDetails = ({ search, lyric, bio }) => {

  if ([lyric, bio].includes(null)) return null;

  return (
    <Fragment>
      { lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message 
          message={`Error: The ${search.song} song doesn't exist`} 
          bgColor="#DC3545"/>
      ):(
        <SongLyrics/> 
      )}
      { bio.artists ? (
        <SongArtist/>
      ):(
        <Message 
          message={`Error: The artist ${ search.artist } doesn't exist`} 
          bgColor="#DC3545"/>
      )}
    </Fragment>
  )
}

export default SongDetails
