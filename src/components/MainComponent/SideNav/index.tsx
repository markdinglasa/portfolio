import { GenericFunction, RouteChannel, SFC } from "../../../types";
import * as S from '../../../styles'
import { Menu } from "../../Menu";
import { mdiCogOutline  ,mdiViewDashboardOutline, } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface SideNavProps {
    Toggle: GenericFunction
}

export const SideNav : SFC<SideNavProps> = ({ClassName, Toggle}) => {
    const navigate = useNavigate();

    return (
        <>
            <S.Container className={twMerge("", ClassName)}>
                <S.Divider className="mb-2 flex justify-center items-center h-12">
                    <S.Image src={'/image/R-white.png'} className=" w-[60px] " />
                </S.Divider>
                <S.Divider className="mb-2" >
                    <Menu icon={ mdiViewDashboardOutline } label="Dashboard" onClick={() => {Toggle();navigate(RouteChannel.DASHBOARD)}} />
                    <hr className="border-secondary"/>
                </S.Divider>
                <S.Divider className="bottom-0 relative border-top">
                    <Menu icon={ mdiCogOutline } label="Settings" onClick={() => {Toggle();navigate(RouteChannel.SETTINGS)}} />
                </S.Divider>
            </S.Container>
        </>
    )
}