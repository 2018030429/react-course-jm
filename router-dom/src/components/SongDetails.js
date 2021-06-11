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
          message={`Error: The <em>${search.song}</em> song doesn't exist`} 
          bgColor="#DC3545"/>
      ):(
        <SongLyrics title={ search.song } lyrics={ lyric.lyrics } /> 
      )}
      { bio.artists ? (
        <SongArtist artist={ bio.artists[0] }/>
      ):(
        <Message 
          message={`Error: The artist <em>${ search.artist }</em> doesn't exist`} 
          bgColor="#DC3545"/>
      )}
    </Fragment>
  )
}

export default SongDetails
