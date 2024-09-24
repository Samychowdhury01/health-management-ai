/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import ActiveLink from "./ActiveLink";
import { Button } from "./button";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import useDecodedToken from "@/hook/useDecodedToken";
import { useCookies } from "react-cookie";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useDecodedToken();
  const [cookie, setCookie, removeCookie] = useCookies();
  const navigate = useNavigate();
console.log(cookie);
  // handle user logout
  const handleLogout = async () => {
    // @ts-ignore
   const removedCookie = await removeCookie("token", {
      path: "/",
    });
    navigate("/");
  };

  const items = (
    <>
      <li>
        <ActiveLink to="/">Home</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/chat">Chat</ActiveLink>
      </li>
      <li>
        <ActiveLink to="/dashboard/profile">Dashboard</ActiveLink>
      </li>
      <li>
        {Object.entries(user).length ? (
          <Button onClick={handleLogout} variant="outline">
            <NavLink to="/auth">Logout</NavLink>
          </Button>
        ) : (
          <Button variant="outline">
            <NavLink to="/auth">Login</NavLink>
          </Button>
        )}
      </li>
    </>
  );

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} className="block md:hidden">
        <div className="transition-all duration-300 ease-in-out transform">
          {isOpen ? (
            <HiX className="rotate-180" />
          ) : (
            <HiMenuAlt1 className="rotate-0" />
          )}
        </div>
        <ul
          className={`transition-all duration-300 ease-in-out transform ${
            isOpen
              ? "opacity-100 max-h-screen p-5"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {items}
        </ul>
      </div>
      <div>
        <ul className="hidden md:flex items-center space-x-5">{items}</ul>
      </div>
    </div>
  );
};

export default NavMenu;
