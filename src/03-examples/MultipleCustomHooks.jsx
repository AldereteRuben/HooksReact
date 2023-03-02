import React from "react";
import useFetch from "./../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://api.breakingbadquotes.xyz/v1/quotes/1"
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <div className="container">
        <div className=" row">
          <div className="col text-center">
            <h1 className="display-1">BreakingBad Quotes</h1>
            <hr />
          </div>
          {isLoading ? (
            <div className="alert alert-info text-center">Loading...</div>
          ) : (
            <blockquote className="blockquote text-end">
              <p className="mb-1">{quote}</p>
              <footer className="blockquote-footer mt-2">{author}</footer>
            </blockquote>
          )}
        </div>
      </div>
    </>
  );
};
export default MultipleCustomHooks;
