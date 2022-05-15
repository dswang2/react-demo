import React, { useContext, useEffect } from "react";
import Context from "../context";
import ajax from "../ajax-follow";

const Movies = (props) => {
    const {state,dispatch} = useContext(Context);
    useEffect(() => {
        ajax("/movies").then((res) => {
            dispatch({type:"setMovies",movies: res});
        })
    },[]);
    console.log(state?.movies)
    return (
        <>
            <h1>我的电影</h1>
            {state?.movies?.map((movie) => {
                return <div key={movie.id}>{movie.name}</div>
            })}
        </>
    )
};

export default Movies;