import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import Service from '../Service/Service';


const Services = ({ selected }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('services.json')
            .then(Response => Response.json())
            .then(data => {
                setServices(data);
                console.log(data)
            })
    }, [])
    return (
        <div className='mx-3 md:mx-10 my-28'>
            <p className='text-primary text-3xl font-semibold'>You picked {format(selected, 'PP')}.</p>
            <div className='mt-10'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    {
                        services.map((service, index) => <Service
                            service={service}
                            key={index}
                            setTreatment={setTreatment}
                            treatment={treatment}
                        ></Service>)
                    }
                </div>
                {treatment && <BookingModal date={selected} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
            </div>
        </div>
    );
};

export default Services;