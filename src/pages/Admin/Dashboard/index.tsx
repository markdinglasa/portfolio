import { RouteChannel, SFC } from "../../../types";
import * as S from '../../../styles/Styles'
import { DashboardCard, DoughnutChart, LineChart, PageBreadCrumbs } from "../../../components";
import { mdiFormSelect, mdiTextShort, mdiCardTextOutline, mdiSaleOutline , mdiTagOutline, mdiAccountGroupOutline, mdiBookOutline  } from '@mdi/js';
import { useNavigate } from "react-router-dom";
import { useGetAllCategory, useGetAllChapter, useGetAllProduct, useGetAllSales, useGetAllTerm, useGetAllTermLine, useGetAllUsers } from "../../../hooks";
import { useMemo } from "react";

export const AdminDashboardPage : SFC = ({ClassName}) => {
    const navigate = useNavigate()
    const { records: category } = useGetAllCategory();
    const { records: terms } = useGetAllTerm();
    const { records: subterms } = useGetAllTermLine();
    const { records: product } = useGetAllProduct();
    const { records: user } = useGetAllUsers();
    const { records: sales } = useGetAllSales();
    const { records: chapter } = useGetAllChapter();

    const CategoryCount = useMemo(() => category?.length ?? 0, [category]);
    const TermCount = useMemo(() => terms?.length ?? 0, [terms]);
    const SubtermCount = useMemo(() => subterms?.length ?? 0, [subterms]);
    const ProductCount = useMemo(() => product?.length ?? 0, [product]);
    const UserCount = useMemo(() => user?.length ?? 0, [user]);
    const SalesCount = useMemo(() => sales?.length ?? 0, [sales]);
    const VolumeCount = useMemo(() => chapter?.length ?? 0, [chapter]);

    return (
        <>
            <S.Container className={ClassName}>
                <S.PageTopBar className="breadcrumbs w-full  bg-white mb-2 rounded-md text-zinc-800 flex flex-col md:flex-row items-center justify-between p-2 h-[50px]">
                        <PageBreadCrumbs Links={[]} Active={"Dashboard"} />
                        <S.Actions className="flex justify-end w-full md:w-4/6"></S.Actions >
                </S.PageTopBar>
                <S.Content className="">
                    <S.CardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        <DashboardCard Icons={mdiBookOutline } Text={`${VolumeCount}`} Title="Volume" OnClick={()=>navigate(RouteChannel.CHAPTER)}/> 
                        <DashboardCard Icons={mdiFormSelect} Text={`${CategoryCount}`} Title="Category" OnClick={()=> navigate(RouteChannel.CATEGORY)}/>  
                        <DashboardCard Icons={mdiTextShort } Text={`${TermCount}`} Title="Term" OnClick={()=>navigate(RouteChannel.TERM)}/>  
                        <DashboardCard Icons={mdiCardTextOutline} Text={`${SubtermCount}`} Title="Sub Term" OnClick={()=>navigate(RouteChannel.TERM_LINE)}/>  
                        <DashboardCard Icons={mdiTagOutline} Text={`${ProductCount}`} Title="Product" OnClick={()=>navigate(RouteChannel.PRODUCT)}/>  
                        <DashboardCard Icons={mdiAccountGroupOutline } Text={`${UserCount}`} Title="Users" OnClick={()=>navigate(RouteChannel.USER)}/>  
                        <DashboardCard Icons={mdiSaleOutline } Text={`${SalesCount}`} Title="Sales" OnClick={()=>navigate(RouteChannel.SALES)}/> 
                    </S.CardContainer>  
                </S.Content> 
                <S.Content className="mt-2 flex flex-col md:flex-row gap-2">
                    <S.Divider className="w-full md:w-8/12">
                        <LineChart />
                    </S.Divider>
                    <S.Divider className="w-full md:w-4/12">
                        <DoughnutChart />
                    </S.Divider>
                </S.Content>
            </S.Container> 
        </>
    )
}
