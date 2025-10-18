import {TrackItem} from "./TrackItem.tsx";

export function TrackList(props) {
    console.log("TrackList component 🏢")
    return (
        <ul>
            {props.items.map(track => (
                <TrackItem key={track.id} item={track}/>
            ))}
        </ul>
    );
}