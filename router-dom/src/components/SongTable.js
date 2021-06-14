import SongTableRow from "./SongTableRow"

const SongTable = ({ mySongs, handleDeleteSong }) => {
  return (
    <div>
      <h3>My Favorite Songs</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2"> Artist </th>
            <th>Song</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          { 
            mySongs.length > 0
              ? (mySongs.map((song, i) => 
                  <SongTableRow key={i} song={song} id={i} handleDeleteSong={handleDeleteSong} />))
              : (<tr>
                  <td colSpan="4">No Songs</td>
                </tr>) 
          }
        </tbody>
      </table>
    </div>
  )
}

export default SongTable
