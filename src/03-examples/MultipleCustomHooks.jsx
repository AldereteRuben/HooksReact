import React from "react";
import useFetch from "./../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );
  console.log(data, isLoading, hasError);
  return (
    <>
      <div className="container">
        <div className=" row">
          <div className="col text-center">
            <h1 className="display-1">BreakingBad Quotes</h1>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};
export default MultipleCustomHooks;
