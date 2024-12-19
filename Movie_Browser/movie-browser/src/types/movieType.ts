export type TMovie = {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
}

export type TMovieState = {
    movies: TMovie[],
}