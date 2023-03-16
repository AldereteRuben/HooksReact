import React from "react";
import useFetch from "./../hooks/useFetch";
import useCounter from "./../hooks/useCounter";
import LoadingQuote from "../03-examples/LoadingQuote";
import Quote from "../03-examples/Quote";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
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
            <LoadingQuote />
          ) : (
            <Quote author={author} quote={quote} />
          )}
        </div>
        <button
          onClick={() => increment(1)}
          className="btn btn-primary"
          hidden={isLoading}
        >
          New quote
        </button>
      </div>
    </>
  );
};
export default Layout;
