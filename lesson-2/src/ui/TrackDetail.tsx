import {useTrackDetail} from "../bll/useTrackDetail.tsx";

type Props = {
    trackId: string | null
}

export function TrackDetail({trackId}: Props) {

    const {trackDetails} = useTrackDetail(trackId);

    return (

        <div style={{
            border: '2px solid green',
            height: 'max-content',
            padding: '0.5rem'
        }}>
            <h2>Details</h2>
            {!trackDetails && !trackId && 'Track is not selected'}
            {!trackDetails && trackId && 'Loading...🏀'}
            {trackDetails && trackId && trackDetails.id !== trackId && 'Loading...⚽'}
            {trackDetails && <div>
                <h3>{trackDetails.attributes.title}</h3>
                <h4>Lyrics</h4>
                {trackDetails?.id != trackId
                    ? <p>Loading... ⏳</p>
                    : <p>{trackDetails.attributes.lyrics ?? 'Not lyrics'}</p>}

            </div>
            }
        </div>
    )
}