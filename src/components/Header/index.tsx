import { RouteChannel, SFC } from "../../types";
import * as S from '../../styles'
import { cn } from "../../utils";
import { PageBreadCrumbs } from "../PageBreadCrumbs";
import { useNavigate } from "react-router-dom";

export const Header: SFC = ({ClassName}) => {
    const navigate = useNavigate()
    const links = [
        { Text: "Home", OnClick: () => navigate(RouteChannel.DASHBOARD) },
        { Text: "Projects", OnClick: () => navigate(RouteChannel.PROJECTS) },
        { Text: "Contacts", OnClick: () => navigate(RouteChannel.CONTACTS) },
        { Text: "About", OnClick: () => navigate(RouteChannel.ABOUT) },
      ];
    return (
        <>
            <S.Container className={cn("top-0 absolute shadow-lg", ClassName)}>
                <S.Content className="topcon border-b-[1px] bg-[#161616] border-[#9C9C9C] w-full flex-col flex h-12 flex justify-center items-center fixed z-10">
                    <S.Divider className="w-full justify-between flex flex-col md:flex-row w-full md:w-10/12">
                        <S.Divider className="md:w-1/2 w-full flex md:justify-start justify-center items-center">
                            <S.Span className={`text-[${S.colors.primary}]`}>Mark Dinglasa.</S.Span>
                        </S.Divider>
                        <S.Divider className=" w-full md:w-1/2 md:justify-end justify-center flex items-center ">
                            <PageBreadCrumbs Links={links} Active={""} />
                        </S.Divider>
                    </S.Divider>
                </S.Content>
            </S.Container>
        </>
    )
}