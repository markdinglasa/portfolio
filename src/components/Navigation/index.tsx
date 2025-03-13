import { Breadcrumbs, Link, Typography } from "@mui/material";
import { PageBreadCrumbsProps, SFC } from "../../types";
import { twMerge } from "tailwind-merge";

export const Navigation: SFC<PageBreadCrumbsProps> = ({ Links = [], Active, OnClick }) => {
    const renderLinks = () => {
        return Links.map((link, index) => (
            <Link
                key={index}
                underline="hover"
                color="inherit"
                onClick={(e) => {
                    link.OnClick && link.OnClick(e);
                    OnClick&&OnClick(link.Text);
                }}
                sx={{
                    cursor: link.OnClick ? "pointer" : "default",
                    color: Active === link.Text ? '#E9C6A9' : '#9c9c9c',
                }}
            >
                <Typography>{link.Text}</Typography>
            </Link>
        ));
    };

    return (
        <div className={twMerge('w-full flex flex-row  items-end')}>
            <Breadcrumbs aria-label="breadcrumb" className="w-full mb-2 md:mb-0 flex items-end justify-end" separator={<span style={{ color: '#9c9c9c' }}>/</span>}>
                {renderLinks()}
            </Breadcrumbs>
        </div>
    );
};