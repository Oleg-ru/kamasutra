import {TrackType} from "./object";

const numbers: Array<number> = [1,2,3,4,5]

numbers.forEach(item => {})

numbers.push(6)

numbers[0].toFixed()

const tracks: Array<TrackType | null> = [{
    title: '1',
    author: {
        name: 'Len',
        age: 8
    }
}, null];

tracks.push({
    title: '1',
    author: {
      name: 'Len',
      age: 8
    }
})