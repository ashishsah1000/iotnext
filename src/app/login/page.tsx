"use client";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { CgMicrosoft } from "react-icons/cg";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { getProviders } from "next-auth/react";
import { RedSpinner } from "@/components";
const Login = () => {
  const handleLogin = () => {
    // Handle login with GitHub
    // Add your login logic here
  };
  const [provider, setProvider] = useState<any>({});
  const [fetching, setFetching] = useState(true);

  const fetchProviders = async () => {
    const providers = await getProviders();
    console.log("Providers", providers);
    setProvider(providers);
  };
  useEffect(() => {
    fetchProviders();
  }, []);
  function isEmptyObject(obj: any) {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className="flex items-center bg-white  justify-center shadow-lg p-4 rounded-lg w-[80vw] lg:w-[25vw] mt-24 md:[50vw] mx-auto">
      <div className="text-center flex-col justify-center align-middle gap-4">
        <img
          className=" rounded-full mx-auto"
          width={190}
          height={150}
          src={
            "https://res.cloudinary.com/dxir7knlo/image/upload/v1688282330/Screenshot_2023-07-02_at_12.40.53_PM-removebg-preview_1_oeedfp.png"
          }
          alt=""
        />
        {/* <h2 className="text-2xl mb-4">Login with GitHub</h2> */}
        <p className="text-xs text-gray-400 font-bold text-justify mt-4">
          Finding the most relevant research papers has never been easier. Our
          powerful search engine enables you to explore a comprehensive database
          of academic publications, covering various disciplines and topics.
          Whether you're a student, researcher, or professional, AppRender
          caters to your specific needs, providing you with a wealth of
          knowledge at your fingertips.
        </p>
        {/* <button
          className="flex  gap-2 items-center justify-center bg-sky-950 text-white rounded px-4 py-2 mx-auto mt-4"
          onClick={() => signIn()}
        >
          <FaGithub />
          <CgMicrosoft />
          <FcGoogle />
          Login
        </button> */}
        {isEmptyObject(provider) ? (
          <>
            <div className="w-full mt-2">
              <RedSpinner />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col  gap-2  items-center justify-center mt-2">
              {Object.values(provider).map((provider: any) => (
                <button
                  className="dark:bg-sky-950 bg-white text-gray-700 w-full shadow-md dark:text-sky-100 gap-2 px-2 py-2 rounded-md flex items-center justify-center"
                  onClick={() => signIn(provider.id)}
                  key={provider.name}
                >
                  Sign in with{" "}
                  {provider.id === "azure-ad" ? (
                    <>
                      {" "}
                      <CgMicrosoft />
                    </>
                  ) : (
                    <>
                      {provider.id === "google" ? (
                        <>
                          {" "}
                          <FcGoogle />
                        </>
                      ) : (
                        <>
                          {provider.id === "github" ? (
                            <>
                              {" "}
                              <FaGithub />
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </>
                  )}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
