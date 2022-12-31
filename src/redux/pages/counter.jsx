import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { decrement, increment } from "../slice/counterSlice";

function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  //   const increment = (e) => {};
  //   const decrement = (e) => {};
  return (
    <>
      <div className="">
        <Button
          className="m-2"
          color="primary"
          onClick={() => dispatch(increment())}
        >
          Inc
        </Button>
        <span>{counter}</span>
        <Button
          className="m-2"
          color="primary"
          onClick={() => dispatch(decrement())}
        >
          Dec
        </Button>
      </div>
    </>
  );
}

export default Counter;
