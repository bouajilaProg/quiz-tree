"use client";
import axios from 'axios';
import { config } from 'dotenv';
import React from 'react';
import { userContext } from '../contexts/userProvider';
import { useRouter } from 'next/navigation';

interface loginBody {
  email: string;
  password: string;
}

const Login = () => {

  const useUser = React.useContext(userContext);
  const router = useRouter();

  const [loggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [loginBody, setLoginBody] = React.useState<loginBody>({
    email: "",
    password: "",
  });



  if (loggedIn) {
    router.push('/home?username=' + useUser.user);
  }

  const [formError, setFormError] = React.useState<boolean>(false);

  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLoginBody({
      ...loginBody,
      [e.target.id]: e.target.value,
    });
  }

  async function handleLoginSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(loginBody);
    try {

      const { token, username } = (await axios.post(process.env.NEXT_PUBLIC_NOT_SECRET_BACKEND_URL + "/auth/login", loginBody)).data
      useUser.setUser(username);
      localStorage.setItem('token', token);
      setFormError(false);
      setLoggedIn(true);
    } catch (err) {
      console.log(err)
      setFormError(true);
    }
  }

  return (
    <div className="flex items-stretch md:items-center justify-center min-h-screen md:bg-slate-200">
      <form className="w-full md:max-w-xl lg:max-w-2xl mt-36 md:mt-0 p-8 md:p-16 lg:p-32 bg-white rounded-lg shadow-lg"
        onSubmit={handleLoginSubmit}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your email"
            onChange={handleLoginChange}
            value={loginBody.email}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm md:text-base font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            className={`mt-1 block w-full p-2 border rounded-md focus:outline-none focus:ring 
  ${formError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'}`}
            placeholder="Enter your password"
            onChange={handleLoginChange}
            value={loginBody.password}
          />
        </div>
        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Login
        </button>
        <p className="mt-4 text-center text-sm md:text-base text-gray-600">
        </p>
        <p className="mt-4 text-center text-sm md:text-base text-gray-600">

          I don't have an account
          <a href="/signup" className="text-blue-500 hover:underline"> Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
