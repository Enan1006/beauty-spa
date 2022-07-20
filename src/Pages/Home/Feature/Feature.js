import React from 'react';

const Feature = ({ feature }) => {
    const { image, name } = feature;
    return (
        <div>
            <div className="card shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title mt-[-80px] hover:translate-y-4 duration-300">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Feature;