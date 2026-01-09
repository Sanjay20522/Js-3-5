import React from 'react';
import Seat from './Seat';

const SeatGrid = ({ selectedMovie, selectedSeats, bookedSeats, onSeatSelect }) => {
    const rows = 8;
    const cols = 8;
    const seats = [];

    // Generate seats
    for (let i = 0; i < rows * cols; i++) {
        seats.push(i);
    }

    return (
        <div className="seat-grid-container">
            <h3>Select Seats</h3>
            <div className="screen-display">SCREEN</div>
            <div className="seat-grid">
                {seats.map((seatId) => {
                    let status = 'available';
                    if (bookedSeats.includes(seatId)) {
                        status = 'booked';
                    } else if (selectedSeats.includes(seatId)) {
                        status = 'selected';
                    }

                    return (
                        <Seat
                            key={seatId}
                            seatId={seatId}
                            status={status}
                            onToggle={onSeatSelect}
                        />
                    );
                })}
            </div>

            <div className="seat-legend">
                <div className="legend-item">
                    <div className="seat available"></div>
                    <span>Available</span>
                </div>
                <div className="legend-item">
                    <div className="seat selected"></div>
                    <span>Selected</span>
                </div>
                <div className="legend-item">
                    <div className="seat booked"></div>
                    <span>Booked</span>
                </div>
            </div>
        </div>
    );
};

export default SeatGrid;
