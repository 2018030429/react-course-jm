import { useHistory } from "react-router-dom"

const SongTableRow = ({ song: { biography, search }, id, handleDeleteSong }) => {

  let history = useHistory();
  let avatar = biography.artists[0].strArtistThumb;
  let avatarStyles = {
    width: 'auto',
    height: '40px'
  }

  return (
    <tr>
      <td>
        <img style={avatarStyles} src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => history.push(`/${id}`)}>Show</button>
        <button onClick={() => handleDeleteSong(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default SongTableRow
