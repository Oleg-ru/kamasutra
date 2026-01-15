import React from 'react';
import {PageTitle} from "./PageTitle.tsx";
import {Playlist} from "./Playlist.tsx";
import {TrackDetails} from "./TrackDetails.tsx";
import {useTrackSelection} from "../bll/useTrackSelection.ts";


export function MainPage() {
    const {selectedTrackId, setSelectedTrackId} = useTrackSelection()

    return (
        <>
            <PageTitle value={'Musicfun Player'}/>
            <Playlist selectedTrackId={selectedTrackId} onTrackSelect={setSelectedTrackId}/>
            <hr/>
            <TrackDetails selectedTrackId={selectedTrackId}/>
        </>
    );
}

