import React, { createContext, useState, useContext, ReactNode } from 'react';
import IUserInterface from '../interfaces/IUserInterface';
import { set } from 'react-hook-form';
import IMovieInterface from '../interfaces/IMovieInterface';
import { getDetailMovie } from '../services/DetailsSW';

interface MovieContextType {
    selectMovie: (id: number) => void;
    movie: IMovieInterface | null;
}

const MovieContext = createContext<MovieContextType>({
    selectMovie: () => { },
    movie: null,
});

export function MovieProvider({ children }: { children: ReactNode }) {
    const [movie, setMovie] = useState<IMovieInterface | null>(null);

    const selectMovie = async (id: number) => {
        const movie = await getDetailMovie(id)

        setMovie(movie);
    };

    return (
        <MovieContext.Provider value={{ movie, selectMovie }}>
            {children}
        </MovieContext.Provider>
    );
};

export const useMovie = () => useContext(MovieContext);