export function TrackDetail(props) {
    console.log("Track Detail component 🚁")
    if (!props.track) {
        return <div>No track</div>
    }

    return (
        <div>
            <h3>{props.track.title}</h3>
            <h4>id: {props.track.id}</h4>
        </div>
    );
}