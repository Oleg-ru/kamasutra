const tracks = [
    {title: 'Music' , url: 'https://files.voicy.network/public/Content/Clips/Sound/ba14f9e8-c476-4696-b4f6-258247db3f9a.mp3'},
    {title: 'Music -d' , url: 'https://files.voicy.network/public/Content/Clips/Sound/d3411844-7013-490d-9a6e-83310600c5a3.mp3'},
    {title: 'Music -d' , url: 'https://files.voicy.network/public/Content/Clips/Sound/212750cf-5b51-4e47-b9e0-c3894e937941.mp3'},
];

const headerEl = document.createElement('h1');
headerEl.append('Musicfun Player')

const tracksEl = document.createElement('ul');
tracks.forEach(track => {
    const trackEl = document.createElement('li');
    const trackTitleEl = document.createElement('div');

    trackTitleEl.append(track.title);
    trackEl.append(trackTitleEl);

    const trackPlayerEl = document.createElement('audio');
    trackPlayerEl.src = track.url;
    trackPlayerEl.controls = true;
    
    tracksEl.append(trackPlayerEl)
    tracksEl.append(trackEl)
})

const rooEl = document.getElementById('root');

rooEl.append(headerEl)
rooEl.append(tracksEl)