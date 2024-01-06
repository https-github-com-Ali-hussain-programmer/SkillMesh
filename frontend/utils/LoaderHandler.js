"use client";
import React, { useState, useEffect } from "react";
import { verifyToken } from "../Api/userApi";
import { useDispatch } from "react-redux";
import { setUserData } from "../redux/slice/userSlice";
import { Spinner } from "@chakra-ui/react";

function LoaderHandler({children}) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const AuthToken = async () => {
    try {
      const data = await verifyToken();
      dispatch(setUserData({ info: data?.user }));
    } catch (error) {
      console.error("Error verifying token:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AuthToken();
  }, []);
  return (
    <>
      {loading ? (
        <div className="h-[100vh] flex items-center justify-center">
          <div className="flex flex-col gap-1 items-center">
            <Spinner size="lg" />
            <h1 className="text-lg font-bold text-black">
              Loading... Please Wait for a moment
            </h1>
          </div>
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
}

export default LoaderHandler;
