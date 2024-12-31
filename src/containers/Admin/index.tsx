import { Outlet } from "react-router-dom";
import { SFC } from "../../types";
import { PageFooter, SideNav } from "../../components";
import { useToggle } from "../../hooks";
import * as S from '../../styles/Styles';
import { twMerge } from "tailwind-merge";

export const AdminLayout: SFC = ({ ClassName }) => {
    const [isSidebarOpen, toggle] = useToggle(false);
    return (
        <>
        <S.Container className={twMerge("bg-primary-700", ClassName)}>
            <S.Content className="flex flex-col md:flex-row w-full h-screen bg-primary ">
                <S.Nav className={`sidebar ${isSidebarOpen ? 'block' : 'hidden'} md:block md:w-2/12 w-full h-full p-3  `}>
                    <SideNav Toggle={toggle} />
                </S.Nav>
                <S.Main className="content w-full md:w-10/12 p-3 bg-slate-100 ">
                   
                    <S.Content className="w-full bg-slate-100">
                        <Outlet /> 
                        <PageFooter />
                    </S.Content>
                </S.Main>
            </S.Content>
        </S.Container >
        </>
    );
};
