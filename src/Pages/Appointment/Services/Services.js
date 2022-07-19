import { format } from 'date-fns';
import React from 'react';

const Services = ({ selected }) => {
    return (
        <div>
            <p>You picked {format(selected, 'PP')}.</p>

        </div>
    );
};

export default Services;