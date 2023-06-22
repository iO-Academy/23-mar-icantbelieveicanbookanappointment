import React from 'react';
import '../_input.scss';

const DateInput = ({ inputLabel, setSelectedDate }) => {
  const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format

  return (
    <div className="input-container">
      <label>{inputLabel}</label>
      <input
        type="date"
        className="input-box"
        min={currentDate} // Set minimum date to current date
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default DateInput;