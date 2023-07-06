import React, { useState, useRef } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnterNameIsValid] = useState(true);

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "" || enteredName.length <= 0) {
      setEnterNameIsValid(false);
      return;
    }

    setEnterNameIsValid(true);
    setEnteredName("");

    console.log(enteredName);
  };

  const inputInvalidHandler = enteredNameIsValid
    ? ""
    : "border-2 border-red-600 bg-red-200 focus:border-2 focus:border-orange-500 focus:bg-orange-200";

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mt-4">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            className={inputInvalidHandler}
            onChange={nameInputHandler}
          />
          {!enteredNameIsValid && (
            <p className="text-red-500 font-bold text-sm">
              Name must not be empty.
            </p>
          )}
        </div>
        <div className="text-center">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default SimpleInput;
