const MoviesReducer = {
    setMovies: (state, action)=>{
        return {...state, movies: action.movies};
    },
    delMovies: () => {
        return {};
    }
}
export default MoviesReducer;