import React from 'react';

const BookingSummary = ({ selectedMovie, selectedSeats, onConfirmBooking }) => {
    const totalPrice = selectedSeats.length * selectedMovie.price;

    return (
        <div className="booking-summary">
            <h3>Booking Summary</h3>
            <div className="summary-details">
                {selectedMovie && (
                    <p><strong>Movie:</strong> {selectedMovie.title}</p>
                )}
                <p><strong>Seats:</strong> {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}</p>
                <p><strong>Total Price:</strong> ${totalPrice}</p>
            </div>
            <button
                className="confirm-button"
                onClick={onConfirmBooking}
                disabled={selectedSeats.length === 0}
            >
                Confirm Booking
            </button>
        </div>
    );
};

export default BookingSummary;
