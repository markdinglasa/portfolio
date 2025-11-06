import { SFC } from "@/types";
import CircularProgress from "@mui/material/CircularProgress";
import { twMerge } from "tailwind-merge";

export const Spinner: SFC = ({ ClassName }) => {
  return (
    <>
      <div className={twMerge("w-full h-full  ", ClassName)}>
        <div className="flex  items-center justify-center">
          <CircularProgress />
        </div>
      </div>
    </>
  );
};
