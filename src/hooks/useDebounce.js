import  { useEffect } from "react";
import useTimeOut from "./useTimeOut";

const useDebounce = (callback, delay, dependencies) => {
  const { reset, clear } = useTimeOut(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
};

export default useDebounce;