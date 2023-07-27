import React from "react";
import { useUserContext } from "../context/userContext";
import { BiLogOutCircle } from "react-icons/bi";
const Header = () => {
  const { user, logOut } = useUserContext();
  console.log(user);
  return (
    <header className="bg-slate-700 w-full">
      <div className="px-8 md:px-16 py-4 flex flex-row justify-between items-center">
        <h2 className="text-slate-100 font-semibold text-xl md:text-4xl">
          Context API
        </h2>
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-slate-100 text-lg">
            Welcome,{" "}
            <span className="text-green-600 font-bold">{user.name}</span>
          </h3>

          {!user.isGuestUser && (
            <button
              className="bg-slate-800 text-white py-2 px-6 rounded"
              onClick={logOut}
            >
              <BiLogOutCircle size={26} className="text-white" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
