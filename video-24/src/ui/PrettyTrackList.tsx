import {useTracks} from "../bll/UseTracks.tsx";

export function PrettyTrackList() {
    const tracks = useTracks();

    if (tracks === null) {
        return (
            <div>💿 Loading...</div>
        );
    }

    return <div>{tracks.map(track => <div key={track.id}>🎼 {track.attributes.title}</div>)}</div>
}