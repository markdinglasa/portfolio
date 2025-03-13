import { SFC } from "../../../types";
import * as S from '../../../styles'
import { cn } from "../../../utils";
import { ReactNode } from "react";

export interface ServiceCardProps {
    Icon: ReactNode
    Title: string
    Description:string
}

export const ServiceCard : SFC<ServiceCardProps> = ({ClassName, Icon, Title, Description}) => {
    return (
        <>
            <S.Container className={cn("relative w-full h-fit rounded-lg border border-gray-100/30 p-3  hover:border-[#E9C6A9] transition duration-300 ease-in-out", ClassName)}>
                <S.Content className="mt-20 pointer-events-none">
                    <S.Divider className="w-full flex flex-row items-center">
                        {Icon}
                        <S.Span className="ml-2 text-gray-100/70">{Title}</S.Span>
                    </S.Divider>
                    <S.Divider className="w-full mt-5 ">
                        <p className="text-secondary text-sm ">{Description}</p>
                    </S.Divider>
                </S.Content>
            </S.Container>
        </>
    )
}