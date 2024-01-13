"use client";
import { useCallback, useState } from "react";

const useInput = (initialState?: any) => {
  const [state, setState] = useState(initialState);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target || e;
      setState({
        ...state,
        [name]: value,
      });
    },
    [state],
  );

  return [state, onChange] as const;
};

export default useInput;
