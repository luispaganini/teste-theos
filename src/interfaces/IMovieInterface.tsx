export default interface IMovieInterface {
    id: number
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: Date | string
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: string
    edited: string
    url: string
}
