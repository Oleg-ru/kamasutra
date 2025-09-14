function App() {

    const tracks = [
        {title: 'Soundtrack 1 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
        {title: 'Soundtrack 2 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
    ];

    const liReactElement = [
        <li>
            <div>{tracks[0].title}</div>
            <audio controls src={tracks[0].url}></audio>
        </li>,
        <li>
            <div>{tracks[1].title}</div>
            <audio controls src={tracks[1].url}></audio>
        </li>
    ];

  return (
    <div>
        <h1>Music Player</h1>
        <ul>
            {liReactElement}
        </ul>
    </div>
  )
}

export default App;