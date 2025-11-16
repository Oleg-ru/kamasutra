//business logic (BL)
//custom hook
import {useEffect, useState} from "react";
import {getTracksViaAPI} from "../dal/api.tsx";

export function useTracks() {
    const [tracks, setTracks] = useState<Array<any> | null>(null);

    useEffect(() => {
        getTracksViaAPI()
            .then((json) => setTracks(json.data))
    }, []);

    return {
        tracks: tracks,
        refresh: () => {
            setTracks(null);
            getTracksViaAPI()
                .then((json) => setTracks(json.data));
        }
    };
}