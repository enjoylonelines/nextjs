"use client";

const FilterError = ({ error }) => {
  return (
    <div id="error">
      <h2 className="">on Error occurred..!</h2>
      <p>{error.message}</p>
    </div>
  );
};
export default FilterError;
