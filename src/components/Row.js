"use client";
import React, { useState, useEffect, useRef } from 'react';
import axios from '../lib/axios';
import "./Row.css";
import Youtube from 'react-youtube';
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original"

function Row({ title, fetchUrl, isLargeRow }) {
    const [mov, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl, url] = useState("");
    const rowRef = useRef(null);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                }).catch((error) => console.log(error))
        }
    }

    const scroll = (offset) => {
        if (rowRef.current) {
            rowRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__container">
                <div className="row__arrow row__arrowLeft" onClick={() => scroll(-window.innerWidth / 2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>

                <div className='row_posters' ref={rowRef}>
                    {mov?.map(movie => {
                        return <img
                            key={movie?.id}
                            onClick={() => handleClick(movie)}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}></img>
                    })}
                </div>

                <div className="row__arrow row__arrowRight" onClick={() => scroll(window.innerWidth / 2)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}
export default Row;