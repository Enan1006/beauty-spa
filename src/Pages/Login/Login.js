import React from 'react';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <div className='mx-auto my-20 flex items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-primary text-3xl font-semibold text-center'>Login!</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                }
                            })} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@gmail.com" />
                            <label className="label">{errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}</label>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                            <input  {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                }
                            })} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            <label className="label">{errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}</label>
                        </div>

                        <button type="submit" class=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;