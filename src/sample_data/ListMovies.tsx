import { IMovieReducedInterface } from "../interfaces/IMovieReducedInterface";

export const ListMovies: Array<IMovieReducedInterface> = [
    {
        id: 1,
        image: 'ep4.png',
        title: "A New Hope",
        director: "George Lucas",
        release_date: new Date("1977-05-25"),
    },
    {
        id: 2,
        image: null,
        title: "The Empire Strikes Back",
        director: "Irvin Kershner",
        release_date: new Date("1980-05-17"),
    },
    {
        id: 3,
        image: null,
        title: "Return of the Jedi",
        director: "Richard Marquand",
        release_date: new Date("1983-05-25"),
    },
    {
        id: 4,
        image: null,
        title: "The Phantom Menace",
        director: "George Lucas",
        release_date: new Date("1999-05-19"),
    },
    {
        id: 5,
        image: null,
        title: "Attack of the Clones",
        director: "George Lucas",
        release_date: new Date("2002-05-16"),
    },
    {
        id: 6,
        image: null,
        title: "Revenge of the Sith",
        director: "George Lucas",
        release_date: new Date("2005-05-19"),
    }
]