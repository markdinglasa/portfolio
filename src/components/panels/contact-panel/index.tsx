import { SFC } from "@/types";
import { cn } from "@/utils";
import MailIcon from "@mui/icons-material/Mail";
import { memo } from "react";

const ContactPanel: SFC = memo(({ ClassName }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center mt-[13rem] p-4 md:p-0",
          ClassName
        )}
      >
        <div className="w-full md:w-10/12  h-fit ">
          <div className="flex w-full flex-col mb-[1rem]">
            <span className="text-slate-100/70 text-5xl font-semibold h-fit overflow-hidden py-2">
              Hey there! <br /> Hope you're having an awesome day!
            </span>
            <span className="text-lg">
              Want to get in touch? You can reach out using the details below.
              Let’s connect!
            </span>
          </div>
          <div className="flex w-full flex-col">
            <div className="text-base text-slate-100/80">
              <MailIcon fontSize="small" />
              <span className="ml-2"> ryanmark.dinglasa@gmail.com </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default ContactPanel;
