import React, { useState, useRef, useEffect } from "react";

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnterNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  useEffect(() => {
    if (enteredNameIsValid) {
      console.log("valid");
    }
  }, [setEnterNameIsValid]);

  const nameInputHandler = (e) => {
    setEnteredName(e.target.value);

    //validation on every keystroke
    if (e.target.value.trim() !== "") {
      setEnterNameIsValid(true);
      return;
    }
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    if (enteredName.trim() === "" || enteredName.length <= 0) {
      setEnterNameIsValid(false);
      return;
    } else {
      setEnterNameIsValid(true);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredName.trim() === "" || enteredName.length <= 0) {
      setEnterNameIsValid(false);
      return;
    }

    setEnterNameIsValid(true);
    setEnteredName("");

    console.log(enteredName);
  };

  const nameInputInvalid = !enteredNameIsValid && enteredNameTouched;

  const inputInvalidHandler = nameInputInvalid
    ? "border-2 border-red-600 bg-red-200 focus:border-2 focus:border-red-500 focus:bg-red-100"
    : "";

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="mt-4">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={enteredName}
            className={inputInvalidHandler}
            onBlur={nameInputBlurHandler}
            onChange={nameInputHandler}
          />
          {nameInputInvalid && (
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
