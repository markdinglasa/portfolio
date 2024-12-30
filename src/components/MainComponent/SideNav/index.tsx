import { GenericFunction, RouteChannel, SFC } from "../../../types";
import * as S from '../../../styles'
import { Menu } from "../../Menu";
import { mdiCogOutline , mdiBookOutline  ,mdiViewDashboardOutline,  mdiFormSelect, mdiTextShort, mdiCardTextOutline, mdiSaleOutline , mdiTagOutline, mdiAccountGroupOutline, mdiLogout } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { useSignOut } from "../../../hooks";
import { twMerge } from "tailwind-merge";

interface SideNavProps {
    Toggle: GenericFunction
}

export const SideNav : SFC<SideNavProps> = ({ClassName, Toggle}) => {
    const navigate = useNavigate();
    const {reSignOut} = useSignOut()

    return (
        <>
            <S.Container className={twMerge("", ClassName)}>
                <S.Divider className="mb-2 flex justify-center items-center h-12">
                    <S.Image src={'/image/R-white.png'} className=" w-[60px] " />
                </S.Divider>
                <S.Divider className="mb-2" >
                    <Menu icon={ mdiViewDashboardOutline } label="Dashboard" onClick={() => {Toggle();navigate(RouteChannel.DASHBOARD)}} />
                    <Menu icon={ mdiBookOutline } label="Volume" onClick={() => {Toggle();navigate(RouteChannel.CHAPTER)}} />
                    <Menu icon={ mdiTextShort } label="Term" onClick={() => {Toggle();navigate(RouteChannel.TERM)}} />
                    <Menu icon={ mdiCardTextOutline } label="Sub Term" onClick={() => {Toggle();navigate(RouteChannel.TERM_LINE)}} />
                    <Menu icon={ mdiFormSelect } label="Category" onClick={() => {Toggle();navigate(RouteChannel.CATEGORY)}} />
                    <Menu icon={ mdiTagOutline } label="Product" onClick={() => {Toggle();navigate(RouteChannel.PRODUCT)}} />
                    <Menu icon={ mdiAccountGroupOutline } label="Users" onClick={() => {Toggle();navigate(RouteChannel.USER)}} />
                    <Menu icon={ mdiSaleOutline } label="Sales" onClick={() => {Toggle();navigate(RouteChannel.SALES)}} />
                    <hr className="border-secondary"/>
                </S.Divider>
                <S.Divider className="bottom-0 relative border-top">
                    <Menu icon={ mdiCogOutline } label="Settings" onClick={() => {Toggle();navigate(RouteChannel.SETTINGS)}} />
                    <Menu icon={ mdiLogout  } label="Logout" onClick={reSignOut} />
                </S.Divider>
            </S.Container>
        </>
    )
}