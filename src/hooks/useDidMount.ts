import { useEffect, useRef } from "react";

const useDidMount = () => {
  const isMountRef = useRef(false);
  useEffect(() => {
    isMountRef.current = true;
  }, []);
  return isMountRef.current;
};

export default useDidMount;
