import { Breadcrumbs, Link, Typography } from "@mui/material";
import { PageBreadCrumbsProps, SFC } from "../../types";
import { twMerge } from "tailwind-merge";
import * as S from '../../styles'

export const PageBreadCrumbs: SFC<PageBreadCrumbsProps> = ({ClassName, Links=[], Active}) => {
    const renderLinks = () => {
        return Links.map((link, index) => (
            <Link  key={index} underline="hover" color="inherit" onClick={link.OnClick} sx={{ cursor: link.OnClick || link.Href ? "pointer" : "default",color:'#9c9c9c' }}>
                {link.Text}
            </Link>
        ));
    };

    return (
        <S.Container className={twMerge('w-full flex flex-row', ClassName)}>
            <Breadcrumbs aria-label="breadcrumb" className="w-full mb-2 md:mb-0 flex items-center justify-center" separator={<span style={{ color: '#9c9c9c' }}>/</span>}>
                {renderLinks()}
                <Typography className="text-[#E9C6A9]">{Active}</Typography>
            </Breadcrumbs>
        </S.Container>
    );
};

