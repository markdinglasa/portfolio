import { GenericFunction } from "@/types";
import React, { ChangeEvent, useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: GenericFunction
) => {
  useEffect(() => {
    const listener = (event: unknown) => {
      if (!ref.current || ref.current.contains((event as ChangeEvent).target)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
