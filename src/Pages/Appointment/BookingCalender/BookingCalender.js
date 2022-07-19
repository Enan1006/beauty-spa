import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const BookingCalender = ({ selected, setSelected }) => {

    return (
        <div>
            <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
            />
        </div>
    );
};

export default BookingCalender;