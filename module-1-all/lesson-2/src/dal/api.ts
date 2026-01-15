const headers = {
    'api-key': import.meta.env.VITE_API_KEY
};

export const getTrack = (trackId: string) => {
    return fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
        headers: headers
    })
        .then(response => response.json())
};

export const getTracks = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks?pageSize=5', {
        headers: headers
    })
        .then(response => response.json())
};