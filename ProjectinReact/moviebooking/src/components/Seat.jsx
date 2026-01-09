import React from 'react';

const Seat = ({ seatId, status, onToggle }) => {
    const handleClick = () => {
        if (status !== 'booked') {
            onToggle(seatId);
        }
    };

    return (
        <div
            className={`seat ${status}`}
            onClick={handleClick}
            title={status === 'booked' ? 'Booked' : `Seat ${seatId}`}
        >
            {/* Optional: Show seat number if needed, but often just a visualization is typical */}
        </div>
    );
};

export default Seat;
