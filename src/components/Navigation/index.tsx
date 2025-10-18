import { Breadcrumbs, Link, Typography } from "@mui/material";
import { PageBreadCrumbsProps, SFC } from "../../types";
import { twMerge } from "tailwind-merge";

export const Navigation: SFC<PageBreadCrumbsProps> = ({
  Links = [],
  Active,
  OnClick,
}) => {
  const renderLinks = () => {
    return Links.map((link, index) => (
      <Link
        key={index}
        color="inherit"
        onClick={(e) => {
          if (link.OnClick) link.OnClick(e);
          if (OnClick) OnClick(link.Text);
        }}
        sx={{
          cursor: link.OnClick ? "pointer" : "default",
          color: Active === link.Text ? "#E9C6A9" : "#9c9c9c",
          textDecorationLine: "none",
        }}
      >
        <div className="hidden md:block">
          <Typography>{link.Text}</Typography>
        </div>
        <div className="block md:hidden no-underline">
          <div className="no-underline flex flex-col justify-center items-center  rounded-full  w-[3rem] h-[3rem]">
            {link.Icon}
            <span className="text-[9px] no-underline ">{link.Text}</span>
          </div>
        </div>
      </Link>
    ));
  };

  return (
    <div className={twMerge("w-full flex flex-row  items-end no-underline")}>
      <Breadcrumbs
        aria-label="breadcrumb"
        className="w-full mb-2 md:mb-0 flex md:items-end items-center md:justify-end justify-center no-underline"
        separator={
          <span className="hidden md:block" style={{ color: "#9c9c9c" }}>
            |
          </span>
        }
      >
        {renderLinks()}
      </Breadcrumbs>
    </div>
  );
};
