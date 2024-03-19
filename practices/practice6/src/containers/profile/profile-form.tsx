"use client";

import { useState } from "react";

export default function ProfileForm() {
  const [isEdit, setIsEdit] = useState(false); // 'Edit' or 'Save'
  const [userName, setUserName] = useState({
    first: "Jane",
    last: "Jacobs",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName({ ...userName, [e.target.name]: e.target.value });
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <form
      onSubmit={submitForm}
      className="font-uniform w-96 max-[450px]:w-80 h-96 p-6 bg-white rounded-lg flex flex-col justify-between text-black border-8 border-solid border-light-pink"
    >
      <div className="flex flex-col gap-6 text-lg">
        <label>
          First name:{" "}
          {!isEdit ? (
            <span>{userName.first}</span>
          ) : (
            <input
              type="text"
              name="first"
              onChange={handleChange}
              value={userName.first}
              className="border-b-2 border-black outline-0 focus:border-purple w-full"
              maxLength={10}
            />
          )}
        </label>
        <label>
          Last name:{" "}
          {!isEdit ? (
            <span>{userName.last}</span>
          ) : (
            <input
              type="text"
              name="last"
              onChange={handleChange}
              value={userName.last}
              className="border-b-2 border-black outline-0 focus:border-purple w-full"
              maxLength={10}
            />
          )}
        </label>
      </div>
      <p
        className="text-center italic text-3xl text-wrap
          underline underline-offset-2 decoration-purple"
      >
        {!isEdit && `Hello, ${userName.first} ${userName.last}`}
      </p>
      <button
        type="submit"
        className="py-3 rounded text-lg text-white font-extrabold cursor-pointer bg-light-purple hover:bg-purple active:bg-purple
           focus:bg-purple focus-visible:outline-none focus-visible:ring-offset-white focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple"
      >
        {!isEdit ? "EDIT" : "SAVE"} PROFILE
      </button>
    </form>
  );
}
