type AuthorType = {
    name: string
    age: number
}

export type TrackType = {
    title: string
    author: AuthorType
}

const author: AuthorType = {
    name: 'Oleg',
    age: 30
}


const track: TrackType = {
    title: 'Track title',
    author: {
        name: 'Oleg',
        age: 30,
    }
}

console.log(track.author.name)