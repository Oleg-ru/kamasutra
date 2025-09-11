const tracks = [
    {title: 'Soundtrack 1 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
    {title: 'Soundtrack 2 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
];

const rootEl = document.getElementById('root');
rootEl.append('Hello from js code =^_^=');

const titleEl = document.createElement('h1');
titleEl.append('Music Player');
rootEl.append(titleEl)

const tracksEl = document.createElement('ul');
tracks.forEach(track => {
    const listEl = document.createElement('li');
    const titleLiEl = document.createElement('div');
    const audioEl = document.createElement('audio');

    audioEl.src = track.url;
    audioEl.controls = true;

    titleLiEl.append(track.title);
    listEl.append(titleLiEl);
    listEl.append(audioEl);
    tracksEl.append(listEl);
})
rootEl.append(tracksEl);
