import { useParams } from "react-router-dom"
import SongDetails from "../components/SongDetails"

const SongPage = ({ mySongs }) => {

  let { id } = useParams();
  let currentSong = mySongs[id];
  let { biography, search, lyric } = currentSong;

  return (
    <SongDetails bio={biography} search={search} lyric={lyric} />
  )
}

export default SongPage
