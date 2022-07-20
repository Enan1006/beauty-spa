import React from 'react';
import './Banner.css';
import banner from '../../../Images/banner/pexels-breakingpic-3188.jpg';

const Banner = () => {
    return (
        <div className="clip hero min-h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className='w-1/3' src={banner} alt='' />
                <div className='md:pr-14 pr-0'>
                    <h1 className="text-5xl font-bold text-left text-white leading-tight">The Best Time To Relax With
                        <br />
                        Beauty Spa
                    </h1>
                    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center justify-start flex mt-10">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;