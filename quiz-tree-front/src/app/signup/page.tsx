"use client";
import axios from 'axios';
import React from 'react';
import { userContext } from '../contexts/userProvider';
import { useRouter } from 'next/navigation';

interface signupBody {
  username: string;
  email: string;
  password: string;
}

const Signup = () => {

  const useUser = React.useContext(userContext);
  const router = useRouter();
  console.log({ ...process.env });

  const [signupBody, setSignupBody] = React.useState<signupBody>({
    username: "",
    email: "",
    password: "",
  });

  const [formError, setFormError] = React.useState<boolean>(false);

  function handleSignupChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSignupBody({
      ...signupBody,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSignupSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const { token, username } = (await axios.post(process.env.NEXT_PUBLIC_NOT_SECRET_BACKEND_URL + "/auth/signup", signupBody)).data;
      localStorage.setItem('token', token);
      console.log(username, token);

      useUser.setUser(username);
      router.push('/home?username=' + username);
    } catch (err) {
      console.log(err);
      setFormError(true);

    }

  }

  return (
    <div className="flex items-stretch md:items-center justify-center min-h-screen md:bg-slate-200">
      <form className="w-full md:max-w-xl lg:max-w-2xl mt-36 md:mt-0 p-8 md:p-16 lg:p-32 bg-white rounded-lg shadow-lg"
        onSubmit={handleSignupSubmit}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6">Signup</h2>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm md:text-base font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your username"
            onChange={handleSignupChange}
            value={signupBody.username}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            placeholder="Enter your email"
            onChange={handleSignupChange}
            value={signupBody.email}
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
            onChange={handleSignupChange}
            value={signupBody.password}
          />
        </div>

        <button className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Signup
        </button>

        <p className="mt-4 text-center text-sm md:text-base text-gray-600">
          Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
