import React, {type CSSProperties} from "react";
import type {Track} from "../dal/types.ts";

type TrackItemProps = {
    track: Track,
    isSelected: boolean,
    onTrackSelect: (trackId: string) => void
}

export function TrackItem(props: TrackItemProps) {

    const style: CSSProperties = {};
    if (props.isSelected) {
        style.border = '1px solid green';
        style.borderRadius = '10px'
    }

    const handleClick = () => {
        props.onTrackSelect(props.track.id);
    };

    return (
        <li style={style}>
            <div onClick={handleClick}>{props.track.attributes.title}</div>
            <audio controls src={props.track.attributes.attachments[0].url}></audio>
        </li>
    )
}