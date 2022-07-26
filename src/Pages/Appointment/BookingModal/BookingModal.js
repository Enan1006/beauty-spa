import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { name, slots } = treatment;
    const handleSubmit = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-2xl text-center">{name}</h3>
                    <form className='mt-5' onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-auto">Selected date</label>
                            <input type="text" value={format(date, 'PP')} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full" disabled />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-auto">Your name</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:shadow-sm-light" placeholder="John Doe" required />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Select time</label>
                            <select id='slot' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5">
                                {
                                    slots.map(slot => <option className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5'>{slot}</option>)
                                }
                            </select>
                        </div>
                        <div className="mt-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-auto">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" placeholder="john.doe@gmail.com" required />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ml-auto">Your phone number</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5" placeholder="+8801840000" required />
                        </div>
                        <div className="mt-4">
                            <input type="submit" value="Submit" className='shadow-sm bg-purple-500  text-white text-sm rounded-lg w-full p-2.5 hover:cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;