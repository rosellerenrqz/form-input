import React from "react";

const BasicForm = () => {
  return (
    <>
      <form>
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[15rem]">
            <label htmlFor="name">First Name</label>
            <input type="text" id="name" placeholder="First Name" />
          </div>
          <div className="flex-1 min-w-[15rem]">
            <label htmlFor="name">Last Name</label>
            <input type="text" id="name" placeholder="Last Name" />
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail Address</label>
          <input type="text" id="email" placeholder="E-mail Address" />
        </div>
        <div className="text-center">
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};

export default BasicForm;
