import React, { useState } from 'react';
import BookingCalender from '../BookingCalender/BookingCalender';
import Services from '../Services/Services';

const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <BookingCalender selected={selected} setSelected={setSelected} ></BookingCalender>
            <Services selected={selected}></Services>
        </div>
    );
};

export default Appointment;