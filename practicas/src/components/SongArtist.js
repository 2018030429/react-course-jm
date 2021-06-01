import React from 'react'

const SongArtist = ({ artist }) => {
  return (
    <section>
      <h3> { artist.strArtist } </h3>
      <img src={ artist.strArtistThumb } alt={ artist.strArtist } />
      <p> { artist.intBornYear || artist.intFormedYear } - { artist.intDiedYear || 'Present' } </p>
      <p> { artist.strCountry } - { artist.strCountryCode } </p>
      <p> { artist.strGenre } -  { artist.strStyle } </p>
      <a href={ `https://${ artist.strWebsite }` } target="_blank" rel="noreferrer"> Official Website </a>
      <p> { artist.strBiographyEN } </p>
    </section>
  )
}

export default SongArtist
