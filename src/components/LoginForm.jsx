import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useUserContext } from "../context/userContext";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn } = useUserContext();

  const onSubmit = (data) => {
    logIn(data.name);
    console.log(data);
  };
  return (
    <section className="mx-auto w-[500px] rounded-lg shadow p-5 mt-10 bg-slate-200">
      <h2 className="text-slate-950 font-extralight text-4xl py-2">Login</h2>

      <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Username
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="User Name"
          />
          <p className="text-red-500 font-extralight p-1 text-xs rounded-sm">
            {errors.name && "User Name is required"}
          </p>
        </div>
        <div className="mt-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Password
          </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: true,
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="*********"
          />
          <p className="text-red-500 font-extralight p-1 text-xs rounded-sm">
            {errors.password && "Password is required"}
          </p>
        </div>

        <button className="mt-5 bg-slate-950 text-white hover:bg-slate-700 px-6 py-3 rounded-md text-lg">
          Login
        </button>
      </form>
    </section>
  );
};

export default LoginForm;
