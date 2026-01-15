import {useState} from "react";

export function useTrackSelection() {
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);

    return {
        selectedTrackId,
        setSelectedTrackId
    }
}