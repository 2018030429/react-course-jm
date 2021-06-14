import { useHistory } from "react-router-dom"

const SongTableRow = ({ song, id, handleDeleteSong }) => {

  let history = useHistory();

  return (
    <tr>
      <td>
        <img src="https://placeimg.com/40/40/animals" alt="" />
      </td>
      <td>Artist name</td>
      <td>Song name</td>
      <td>
        <button onClick={() => history.push(`/songs/${id}`)}>Show</button>
        <button onClick={() => handleDeleteSong(id)}>Delete</button>
      </td>
    </tr>
  )
}

export default SongTableRow
