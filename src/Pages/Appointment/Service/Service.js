import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card shadow-xl">
                <div class="card-body">
                    <h2 class="text-purple-700 text-2xl font-medium text-center">{name}</h2>
                    <p>{slots.length > 0 ? `${slots.length} Slots available` : <span className='text-red-500'>No slot available</span>}</p>
                    <div class="card-actions justify-center">
                        <label
                            onClick={() => setTreatment(service)}
                            disabled={slots.length == 0}
                            for="booking-modal"
                            class="btn modal-button">Appoint</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;