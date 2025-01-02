import { SFC } from "../../types";
import * as S from '../../styles'
import { cn } from "../../utils";

export const ProjectPage : SFC = ({ClassName}) => {
    return (
        <>
            <S.Container className={cn("border p-3 w-full flex justify-center items-center", ClassName)}>
                <S.Content className="w-full md:w-10/12">
                    <S.Divider className="title text-2lg">
                        <h1>Projects</h1>
                    </S.Divider>
                </S.Content>
            </S.Container>
        </>
    )
}