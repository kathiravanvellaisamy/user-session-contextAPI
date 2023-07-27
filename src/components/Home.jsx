import React from "react";
import { useUserContext } from "../context/userContext";

const Home = () => {
  const { user, logOut } = useUserContext();
  return (
    <div className="px-8 md:px-16 mt-8">
      <div className="border border-gray-100 rounded h-screen mb-8  shadow-md">
        <h2 className="text-2xl md:text-7xl text-slate-900 font-extralight p-4">
          Welcome{" "}
          <span className="text-green-900 font-semibold">{user.name}</span>
        </h2>
        <div className="flex flex-col gap-2">
          <p className="text-slate-600 text-md p-4">
            Context provides a way to pass data through the component tree
            without having to pass props down manually at every level.
          </p>
          <p className="text-slate-600 text-md p-4">
            In a typical React application, data is passed top-down (parent to
            child) via props, but such usage can be cumbersome for certain types
            of props (e.g. locale preference, UI theme) that are required by
            many components within an application. Context provides a way to
            share values like these between components without having to
            explicitly pass a prop through every level of the tree.
          </p>
        </div>
        <div className="px-4 mt-3 flex gap-2 flex-row">
          <a
            target="_blank"
            href="https://legacy.reactjs.org/docs/context.html"
            className=" mt-8 bg-slate-900 hover:border-slate-900 hover:border hover:bg-white hover:text-slate-900 text-white px-6 py-3 rounded-md"
          >
            For More Details
          </a>

          <button
            onClick={logOut}
            className=" mt-8 bg-slate-100  border border-slate-900 hover:bg-slate-900 hover:text-slate-100 text-slate-950 px-6 py-3 rounded-md"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
