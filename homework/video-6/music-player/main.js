import "./styles/theme.js"
import {showSong, showPlaylist} from "./modules/display.js";
import songs from "./modules/songs.js"
//import {play, pause, stop, showSong as playerShowSong} from "./player.js"
import * as player from "./modules/player.js"

console.log("🎶 Добро пожаловать в музыкальный плеер!")

// Показываем весь плейлист
showPlaylist(songs)

// Включаем первую песню
showSong(songs[0])
//player.playerShowSong(songs[0])
player.play()

// Пауза
player.pause()

// Включаем вторую песню
showSong(songs[1])
//playerShowSong(songs[1])
player.play()

// Останавливаем
stop()
