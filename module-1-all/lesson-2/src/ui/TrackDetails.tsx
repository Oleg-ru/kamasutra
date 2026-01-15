import React from "react";
import {useTrack} from "../bll/useTrack.ts";

type Props = {
    selectedTrackId: string | null
}

export function TrackDetails(props: Props) {

    const {selectedTrack} = useTrack(props.selectedTrackId);

    return (
        <>
            <h2>Track Details:</h2>
            {!props.selectedTrackId && <div>Not selected track</div>}
            {props.selectedTrackId && selectedTrack && selectedTrack.id !== props.selectedTrackId && <div>Loading...</div>}
            {selectedTrack && selectedTrack.id === props.selectedTrackId && <div>
                <h4>{selectedTrack.attributes.title}</h4>
                <p>{selectedTrack.attributes.lyrics}</p>
            </div>}
        </>
    );
}