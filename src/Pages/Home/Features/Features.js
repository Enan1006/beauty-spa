import React from 'react';
import Feature1 from '../../../Images/features/beauty-spa.jpg';
import Feature2 from '../../../Images/features/spa-care.jpg';
import Feature3 from '../../../Images/features/yoga-spa.jpg';
import Feature from '../Feature/Feature';

const Features = () => {
    const features = [
        {
            "image": Feature1,
            "name": "Beauty Care"
        },
        {
            "image": Feature2,
            "name": "Spa Care"
        },
        {
            "image": Feature3,
            "name": "Yoga Care"
        }
    ]
    return (
        <div className='my-20 md:mx-10 mx-3'>
            <h1 className='text-gray-300 md:text-9xl text-6xl font-bold'>Our Features</h1>
            <h3 className='text-slate-800 md:text-4xl text-2xl font-bold'>Our Features</h3>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {features.map(feature =>
                    <Feature
                        feature={feature}
                    >
                    </Feature>
                )}
            </div>
        </div>
    );
};

export default Features;