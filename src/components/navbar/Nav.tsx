"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import { getProviders } from "next-auth/react";
import { CgProfile, CgSearch, CgToolbox } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
import { LuHome, LuLayoutDashboard } from "react-icons/lu";
import { CgFileAdd, CgOptions } from "react-icons/cg";
import { LiaCogSolid, LiaCogsSolid, LiaUserCogSolid } from "react-icons/lia";
import { FiGithub } from "react-icons/fi";
import { BiPowerOff, BiSearch } from "react-icons/bi";

export default function Nav() {
  const [providers, setProviders] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {
    (async () => {
      const res: any = await getProviders();
      setProviders(res);
      console.log("providers are", res);
    })();
  }, []);
  const [showOptions, setshowOptions] = useState(false);

  // hide and show the edit and logout option
  const handleOptions = () => {
    setshowOptions(!showOptions);
  };
  console.log("this is the session object", session);
  return (
    <div className="fixed top-0 right-0 left-0 z-50">
      <nav className="hidden lg:flex flex  items-center justify-between flex-wrap shadow-md  bg-gray-800 text-gray-200">
        <div className="flex items-center flex-shrink-0 text-gray-300 mr-6 ">
          <Image
            className=" rounded-full"
            width={60}
            height={40}
            loader={() =>
              "https://res.cloudinary.com/dxir7knlo/image/upload/v1694169502/logo_c20plb.png"
            }
            src={
              "https://res.cloudinary.com/dxir7knlo/image/upload/v1694169502/logo_c20plb.png"
            }
            alt=""
          />
        </div>

        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow flex mx-4">
            {/* <input
              type="text"
              className="w-full px-8 rounded-full outline-none   py-4 hover:bg-sky-300"
              placeholder="Search users and documents"
              style={{
                background: "rgba(222,222,222,.2)",
              }}
            />
            <button className="relative -ml-12">
              {" "}
              <BiSearch size={24} />
            </button> */}
          </div>
          {session ? (
            <>
              <div className="flex hidden  lg:flex">
                <div className="flex text-xl  text-sky-200  gap-2 mx-4">
                  <Link href="/" className="  hover:bg-sky-700 rounded p-2 ">
                    <LuHome />
                  </Link>
                  <Link
                    href="/profile"
                    className="  rounded p-2  hover:bg-sky-700"
                  >
                    <CgProfile />
                  </Link>
                  <Link
                    href="/search"
                    className="  rounded p-2  hover:bg-sky-200 dark:hover:bg-sky-700"
                  >
                    <CgSearch />
                  </Link>
                </div>

                {session ? (
                  <div
                    className="flex relative cursor-pointer mr-2"
                    onClick={() => handleOptions()}
                  >
                    <Image
                      className=" rounded-full border-2 border-spacing-1 border-sky-700 "
                      width={36}
                      height={36}
                      loader={() =>
                        session
                          ? `${session.user?.image}`
                          : `https://i.pinimg.com/1200x/32/40/45/3240451c8d126afdbf646f07ce8ec7ad.jpg`
                      }
                      src={
                        session
                          ? `${session.user?.image}`
                          : "https://i.pinimg.com/1200x/32/40/45/3240451c8d126afdbf646f07ce8ec7ad.jpg"
                      }
                      alt=""
                    />
                    <div className="flex-grow flex-col justify-center px-2  flex gap-2">
                      {" "}
                      {session.user?.name}
                    </div>
                    {showOptions ? (
                      <div className=" w-48 flex-col shadow absolute top-12 right-0 rounded bg-sky-950">
                        <Link
                          href="/profile/edit"
                          className="  rounded p-2 flex items-center gap-2 text-sm  hover:bg-sky-700 relative"
                        >
                          {" "}
                          <CgOptions size={16} /> Profile{" "}
                        </Link>
                        <Link
                          onClick={() => signOut()}
                          href="#"
                          className="  rounded p-2 flex items-center gap-2 text-sm  hover:bg-sky-700 relative"
                        >
                          {" "}
                          <BiPowerOff size={16} /> Logout{" "}
                        </Link>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <></>
          )}

          {/* <div className="flex mr-8">
            {session ? (
              <button
                onClick={() => signOut()}
                className="flex gap-2 items-center text-sm px-4 py-2 leading-none  rounded text-indigo-200 bg-gray-700  hover:text-gray-200 hover:bg-orange-700 mt-4 lg:mt-0 duration-150 ease-in-out"
              >
                <BiPowerOff size={20} /> Log Out
              </button>
            ) : (
              <button
                onClick={() => signIn()}
                className="flex text-sm ml-4 px-4 py-2 leading-none  rounded text-gray-700   hover:text-gray-400 bg-gray-900  mt-4 lg:mt-0 duration-150 ease-in-out text-xl font-bold"
              >
                <FiGithub size={24} />
                &nbsp; Sign In
              </button>
            )}
          </div> */}
        </div>
      </nav>
      {/* mobile nav start */}
      <div className="flex lg:hidden sm:block ">
        <div
          className="flex text-xl fixed bottom-0 left-0 shadow-lg text-sky-100 bg-gray-900  justify-around w-screen"
          style={{ boxShadow: " 1px -5px 10px -6px rgba(12,12,12,1)" }}
        >
          <Link href="/" className="  hover:bg-gray-800 p-4 flex items-center ">
            <LuHome size={24} />
          </Link>
          <Link
            href="/profile"
            className="   hover:bg-gray-800 p-4 flex items-center  "
          >
            <CgProfile size={24} />
          </Link>
          <Link
            href="/search"
            className="   hover:bg-gray-800 p-4 flex items-center  "
          >
            <CgSearch size={24} />
          </Link>
          <div
            className="   hover:bg-gray-800 p-4 flex items-center  cursor-pointer"
            onClick={() => handleOptions()}
          >
            {session ? (
              showOptions ? (
                <div className=" w-48 flex-col shadow absolute -top-[70px] right-4 rounded bg-sky-950">
                  <Link
                    href="/profile/edit"
                    className="  rounded p-2 flex items-center gap-2 text-sm  hover:bg-gray-800 relative"
                  >
                    {" "}
                    <CgOptions size={24} /> Profile{" "}
                  </Link>
                  <Link
                    onClick={() => signOut()}
                    href="#"
                    className="  rounded p-2 flex items-center gap-2 text-sm  hover:bg-gray-800 relative"
                  >
                    {" "}
                    <BiPowerOff size={24} /> Logout{" "}
                  </Link>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
            <LiaCogSolid />
          </div>
        </div>
      </div>
      {/* mobile nav end */}
    </div>
  );
}
