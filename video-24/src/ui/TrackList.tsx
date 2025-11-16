import './TrackList.css'
import {useTracks} from "../bll/useTracks.tsx";

export function TrackList() {
  const {tracks, refresh} = useTracks();

  if (tracks === null) {
    return (
        <div> Loading...</div>
    );
  }

  const handleRefreshClick = () => {
    refresh()
  };

  return (
      <div>
        <button onClick={handleRefreshClick}>refresh</button>
        <ul>
          {tracks.map((track) => {
            return (
                <li key={track.id}>{track.attributes.title}</li>
            );
          })}
        </ul>
      </div>

  )
}

