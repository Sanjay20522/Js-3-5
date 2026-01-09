import React, { useState, useEffect } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import SeatGrid from './components/SeatGrid';
import BookingSummary from './components/BookingSummary';
import { movies } from './data';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(movies[0]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [bookedSeats, setBookedSeats] = useState({}); // Map of movieId -> [seatIds]

    // Reset selected seats when movie changes? 
    // Requirement says: Prevent booking already selected seats. 
    // Usually in these flows, changing movies resets your "cart" or you can book multiple.
    // I'll reset selected seats to keep it simple and focused on one booking at a time.
    useEffect(() => {
        setSelectedSeats([]);
    }, [selectedMovie]);

    const handleMovieSelect = (movie) => {
        setSelectedMovie(movie);
    };

    const handleSeatSelect = (seatId) => {
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(id => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const handleConfirmBooking = () => {
        if (selectedSeats.length === 0) return;

        const currentMovieBookedSeats = bookedSeats[selectedMovie.id] || [];
        const newBookedSeats = {
            ...bookedSeats,
            [selectedMovie.id]: [...currentMovieBookedSeats, ...selectedSeats]
        };

        setBookedSeats(newBookedSeats);
        setSelectedSeats([]);
        alert(`Booking Confirmed for ${selectedMovie.title}! Seats: ${selectedSeats.join(', ')}`);

        // Bonus: Persist to localStorage
        // localStorage.setItem('bookedSeats', JSON.stringify(newBookedSeats));
    };

    // Load from localStorage if implemented
    // useEffect(() => {
    //   const stored = localStorage.getItem('bookedSeats');
    //   if (stored) setBookedSeats(JSON.parse(stored));
    // }, []);

    const currentBookedSeats = bookedSeats[selectedMovie.id] || [];

    return (
        <div className="App">
            <header className="App-header">
                <h1>Movie Booking System</h1>
            </header>
            <main className="App-main">
                <MovieList
                    movies={movies}
                    selectedMovie={selectedMovie}
                    onSelectMovie={handleMovieSelect}
                />

                <div className="booking-area">
                    <SeatGrid
                        selectedMovie={selectedMovie}
                        selectedSeats={selectedSeats}
                        bookedSeats={currentBookedSeats}
                        onSeatSelect={handleSeatSelect}
                    />
                    <BookingSummary
                        selectedMovie={selectedMovie}
                        selectedSeats={selectedSeats}
                        onConfirmBooking={handleConfirmBooking}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
