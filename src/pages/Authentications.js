import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/images/logo2.png';
import useAuth from '../hooks/useAuth';

function Authentications() {
    const [newUser, setNewUser] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm();

    const { signUp, login } = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if (window.location.pathname === '/login') setNewUser(false);
        else if (window.location.pathname === '/signup') setNewUser(true);
    }, [navigate]);

    const onsubmit = (data) => {
        const { name, email, password } = data;
        reset();
        if (newUser) {
            signUp(name, email, password)
                .then(() => {
                    navigate('/');
                })
                .catch((err) => {
                    alert(err.message);
                });
        } else {
            login(email, password)
                .then(() => {
                    navigate('/');
                })
                .catch((err) => {
                    alert(err.message);
                });
        }
    };

    return (
        <section className="signup-bg">
            <div className="flex flex-col justify-center items-center h-screen">
                <a href="/">
                    <img src={Logo} alt="logo" className="flex justify-center h-20 mx-auto" />
                </a>
                <form
                    onSubmit={handleSubmit(onsubmit)}
                    className="p-5 md:p-0 w-[350px] flex flex-col md:my-8 mx-auto"
                >
                    {newUser && (
                        <>
                            <input
                                className="w-full py-5 px-4 input-bg border border-transparent rounded text-[15px] inline-block focus:outline-none focus:border-green-500"
                                placeholder="Name"
                                style={{ borderColor: `${errors.name ? 'red' : ''}` }}
                                {...register('name', {
                                    pattern: { value: /^[A-Za-z\s]+$/, message: 'Invalid Name' },
                                    required: 'Name is required',
                                })}
                            />
                            <p className="text-primary text-[14px] mb-[10px]">
                                {errors.name?.message}&nbsp;
                            </p>
                        </>
                    )}
                    <input
                        className="w-full py-5 px-4 input-bg border border-transparent rounded text-[15px] inline-block focus:outline-none focus:border-green-500"
                        placeholder="Email"
                        style={{ borderColor: `${errors.email ? 'red' : ''}` }}
                        {...register('email', {
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Invalid Email',
                            },
                            required: 'Email is required',
                        })}
                    />
                    <p className="text-primary text-[14px] mb-[10px]">
                        {errors.email?.message}&nbsp;
                    </p>
                    <input
                        className="w-full py-5 px-4 input-bg border border-transparent rounded text-[15px] inline-block focus:outline-none focus:border-green-500"
                        type="password"
                        placeholder="Password"
                        style={{ borderColor: `${errors.password ? 'red' : ''}` }}
                        {...register('password', {
                            minLength: {
                                value: 8,
                                message: 'Password shoud be atleast 8 charecters long',
                            },
                            required: 'Password is required',
                        })}
                    />
                    <p className="text-primary text-[14px] mb-[10px]">
                        {errors.password?.message}&nbsp;
                    </p>
                    {newUser && (
                        <>
                            <input
                                className="w-full py-5 px-4 input-bg border border-transparent rounded text-[15px] inline-block focus:outline-none focus:border-green-500"
                                type="password"
                                placeholder="Confirm Password"
                                style={{ borderColor: `${errors.confirmPassword ? 'red' : ''}` }}
                                {...register('confirmPassword', {
                                    validate: (value) =>
                                        value === watch('password') || 'Password did not match',
                                    required: 'Confirm Password is required',
                                })}
                            />
                            <p className="text-primary text-[14px] mb-[10px]">
                                {errors.confirmPassword?.message}&nbsp;
                            </p>
                        </>
                    )}

                    <button
                        className="p-5 border-none bg-primary text-[15px] text-white rounded cursor-pointer hover:bg-rose-500 transition duration-500"
                        type="submit"
                    >
                        {newUser ? 'Sign Up' : 'Login'}
                    </button>

                    <p
                        onClick={() => (newUser ? navigate('/login') : navigate('/signup'))}
                        className="text-primary text-center my-[15px] hover:underline decoration-solid decoration-rose-500 cursor-pointer"
                    >
                        {newUser ? 'Already have an account' : 'Create new account'}
                    </p>
                </form>
            </div>
        </section>
    );
}

export default Authentications;
