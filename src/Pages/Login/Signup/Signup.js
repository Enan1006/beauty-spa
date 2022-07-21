import React from 'react';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Spinner from '../../Shared/Spinner/Spinner';
import swal from 'sweetalert';


const Signup = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        userEmail,
        loadingEmail,
        errorEmail,
    ] = useCreateUserWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (userEmail || userGoogle) {
        swal({
            title: "Registration successful",
            icon: "success",
        });
    }
    if (loadingEmail || loadingGoogle || updating) {
        return <Spinner />
    }
    let errorMessage;
    if (error || errorEmail || errorGoogle) {
        errorMessage = <p className='text-red-600'><small>
            {error.message || errorEmail.message || errorGoogle}
        </small></p>
    }
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log(data);
        navigate('/');
    };
    return (
        <div className='mx-auto my-20 flex items-center justify-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <h1 className='text-primary text-3xl font-semibold text-center'>Register!</h1>
                <div class="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name is required"
                                }
                            })} type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John Doe" />
                            <label className="label">{errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}</label>
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email is required",
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Please enter a validate email"
                                }
                            })} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@gmail.com" />
                            <label className="label">{errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}</label>
                            <label className="label">{errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}</label>
                        </div>
                        <div class="mb-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                            <input  {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is required"
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    message: "Password must contain atleast a lowercase, an uppercase, a special character and a number"
                                }
                            })} type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            <label className="label">{errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}</label>
                            <label className="label">{errors.password?.type === 'pattern' && <span className='text-red-500'>{errors.password.message}</span>}</label>
                        </div>

                        <div>
                            <button type="submit" class="bg-purple-700 text-white text-sm rounded-lg block w-full p-2.5">Submit</button>
                        </div>
                    </form>
                    {errorMessage}
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                        <svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                        Sign in with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Signup;