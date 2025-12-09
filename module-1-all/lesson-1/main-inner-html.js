const tracksCopy = [
    {title: 'Music' , url: 'https://files.voicy.network/public/Content/Clips/Sound/ba14f9e8-c476-4696-b4f6-258247db3f9a.mp3'},
    {title: 'Music -d' , url: 'https://files.voicy.network/public/Content/Clips/Sound/d3411844-7013-490d-9a6e-83310600c5a3.mp3'},
    {title: 'Music -d' , url: 'https://files.voicy.network/public/Content/Clips/Sound/212750cf-5b51-4e47-b9e0-c3894e937941.mp3'},
];

const rootElement = document.getElementById('root');

const html = `
  <h1>Musicfun Player html</h1>
  <ul>
    ${tracksCopy.map(track =>
    `<li>
         <div>${track.title}</div>
         <audio controls src="${track.url}"></audio>
       </li>`
).join('')}
  </ul>
`;

rootElement.innerHTML = html;