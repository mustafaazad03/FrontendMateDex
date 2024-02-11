"use client";

import React from "react";
import Link from "next/link";
import Form from "./Form";

import { FaRegCircleUser } from "react-icons/fa6";

const Profile = () => {

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <div className="w-full text-center">
      <div className="flex w-full justify-evenly items-center gap-1">
        <div className="">
          <div className="">
            <div className="mx-auto w-64 text-center ">
              <div className="relative w-64">
                <input type="file" id="file1" name="image" accept="image/*" capture style={{ display: "none" }} />
                <img
                  src="http://macgroup.org/blog/wp-content/uploads/2011/10/iphone-camera-icon-150x150.jpg"
                  id="upfile1"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold">Ram Sharma</h3>
          </div>
        </div>
        <div className="shadow-md p-10 w-1/3 rounded-lg mt-10">
          <Form />
        </div>
      </div>
      <div className="absolute right-10 bottom-10">
        <Link href="/createorb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-[#0e76fd]"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </Link>

      </div>
    </div>
  );
};

export default Profile;
