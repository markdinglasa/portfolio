import { SFC } from "../../types";
import * as S from '../../styles'
import { cn } from "../../utils";

export const Footer : SFC = ({ClassName}) => {
    return (
        <>
            <S.Container className={cn("p-3 rounded-lg border border-gray-100/30 flex justify-between items-center w-full md:w-10/12", ClassName)}>
                <S.Span className="text-sm text-[#9C9C9C]">Mark Dinglasa &copy; 2025 All rights reserved </S.Span>
            </S.Container>
        </>
    )
}