function App() {

    const tracks = [
        {id: 1, title: 'Soundtrack 1 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3'},
        {id: 2, title: 'Soundtrack 2 js', url: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3'},
    ];



  return (
    <div>
        <h1>Music Player</h1>
        <ul>
            {
                tracks.map((track) => {
                    return (
                        <li key={track.id}>
                            <div>{track.title}</div>
                            <audio controls src={track.url}></audio>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default App;