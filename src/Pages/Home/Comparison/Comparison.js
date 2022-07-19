import React from 'react';
import './Comparison.css';
import beforeImg from '../../../Images/comparison/before.jpg';
import afterImg from '../../../Images/comparison/after.jpg';
import nailColor from '../../../Images/comparison/nail_color-1.png';
import lipstickColor from '../../../Images/comparison/lipstick_color.png';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


const Comparison = () => {
    return (
        <div className='my-28 md:mx-10 mx-3'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='comparison'>
                    <ReactCompareSlider className='h-96'
                        itemOne={<ReactCompareSliderImage src={beforeImg} srcSet={beforeImg} alt="Image one" />}
                        itemTwo={<ReactCompareSliderImage src={afterImg} srcSet={afterImg} alt="Image two" />}
                    />
                </div>
                <div className='text-left'>
                    <h3 className='text-primary text-2xl'>Secret of</h3>
                    <h2 className=' text-4xl text-slate-800'>Beauty Spa</h2>
                    <p className='mt-5'>After owning two successful salon locations they decided to move their passion to the small town of Gainesville</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
                        <div className='rounded-lg shadow-lg p-10'>
                            <img className='mx-auto' src={nailColor} alt="" srcset="" />
                            <h4 className='text-2xl font-semibold text-slate-700 mt-3 text-center'>Reflexology</h4>
                            <p className='mt-2 text-center'>Stimulates the movement of
                                energy by applying pressure</p>
                        </div>
                        <div className='rounded-lg shadow-lg px-10 py-10 md:px-5 md:py-10'>
                            <img className='mx-auto' src={lipstickColor} alt="" srcset="" />
                            <h4 className='text-2xl font-semibold text-slate-700 mt-3 text-center'>Nail Therapy</h4>
                            <p className='mt-2 text-center'>Wraps are intended to tone and tighten skin while helping.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comparison;