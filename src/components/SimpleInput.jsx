import React from "react";

const SimpleInput = () => {
  return (
    <>
      <form>
        <div className="mt-4">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="text-center">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default SimpleInput;
