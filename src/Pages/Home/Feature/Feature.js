import React from 'react';

const Feature = ({ feature }) => {
    const { image, name } = feature;
    return (
        <div>
            <div class="card shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title mt-[-80px] hover:translate-y-4 duration-300">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Feature;