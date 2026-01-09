import React from 'react';

const MovieList = ({ movies, selectedMovie, onSelectMovie }) => {
    return (
        <div className="movie-list">
            <h3>Select a Movie</h3>
            <div className="movies-container">
                {movies.map((movie) => (
                    <div
                        key={movie.id}
                        className={`movie-card ${selectedMovie?.id === movie.id ? 'selected' : ''}`}
                        onClick={() => onSelectMovie(movie)}
                    >
                        <img src={movie.image} alt={movie.title} className="movie-poster" />
                        <div className="movie-info">
                            <h4>{movie.title}</h4>
                            <p>${movie.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
