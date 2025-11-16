//       ui -> bll -> dal(data access layer)
//component -> BL  -> api
export const getTracksViaAPI = () => {
    return fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            'api-key': import.meta.env.VITE_API_KEY
        }
    }).then(response => response.json());

};