import { ButtonType, SFC } from "../../types";
import * as S from "../../styles";
import { cn } from "../../utils";
import { CustomIconButton } from "../Buttons";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailIcon from "@mui/icons-material/Mail";

export const Footer: SFC = ({ ClassName }) => {
  return (
    <>
      <div
        className={cn(
          "flex items-center justify-center mt-[13rem] p-4 md:p-0 w-full",
          ClassName
        )}
      >
        <div className="w-full md:w-10/12  h-fit pb-10">
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
            <div className="text-base flex items-center gap-2 ">
              <MailIcon fontSize="small" />
              <span className="">ryanmark.dinglasa@gmail.com </span>
            </div>
            <div className="flex items-center justify-between border-t mt-5 border-slate-100/10">
              <div className=" w-fit md:justify-start justify-center flex -ml-[9px] py-2 overflow-visible">
                <CustomIconButton
                  Label="LinkedIn"
                  Title="LinkedIn"
                  Href="https://www.linkedin.com/in/ryan-mark-d-manos-752894271/"
                  Icon={
                    <LinkedInIcon
                      className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`}
                    />
                  }
                  Type={ButtonType.button}
                />
                <CustomIconButton
                  Label="Instagram"
                  Title="Instagram"
                  Href="https://www.instagram.com/mark.ding1asa/"
                  Icon={
                    <InstagramIcon
                      className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`}
                    />
                  }
                  Type={ButtonType.button}
                />
                <CustomIconButton
                  Label="GitHub"
                  Title="GitHub"
                  Href="https://github.com/markdinglasa/"
                  Icon={
                    <GitHubIcon
                      className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`}
                    />
                  }
                  Type={ButtonType.button}
                />
              </div>
              <span className="text-sm text-[#9C9C9C] w-fit">
                Mark Dinglasa &copy; {new Date().getFullYear()} All rights
                reserved{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
