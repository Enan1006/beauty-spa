import React from 'react';
import visionImg from '../../../Images/vision/vision.jpg';

const Vision = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20 mx-10 my-28'>
            <div>
                <img className='w-1/2' src={visionImg} alt="" srcset="" />
            </div>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='text-slate-700 text-4xl font-bold text-left'>Our Vission</h2>
                <p className='mt-10 text-left'>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly.</p>
            </div>
        </div>
    );
};

export default Vision;