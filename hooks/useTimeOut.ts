/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";

interface useTimeOutProps {
  time: number;
  dispatch: () => void;
  state?: any;
}

const useTimeOut = ({ time, dispatch, state = [] }: useTimeOutProps) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch();
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, state);
};

export default useTimeOut;
