import { SFC } from "../../../types";
import * as S from "../../../styles";
import { memo, ReactNode } from "react";

import { Card, Content, Back, BackContent, ProjectType } from "./Styles";
import { Skeleton } from "@mui/material";

export interface ServiceCardProps {
  Icon: ReactNode;
  Title: string;
  Description: string;
}

export const ServiceCardSkeleton = () => {
  return (
    <>
      <Card>
        <Content>
          <Back>
            <BackContent>
              <S.Divider className="w-full flex flex-row items-center">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"2.5rem"}
                  height={"2.5rem"}
                />
                <S.Span className="ml-2 text-gray-100/70">
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={"1.5rem"}
                  />
                </S.Span>
              </S.Divider>
              <S.Divider className="w-full mt-5 flex flex-col">
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"1.5rem"}
                />
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={"1.5rem"}
                />
              </S.Divider>
            </BackContent>
          </Back>
        </Content>
      </Card>
    </>
  );
};
export const ServiceCard: SFC<ServiceCardProps> = memo(
  ({ ClassName, Icon, Title, Description }) => {
    return (
      <>
        <Card className={ClassName}>
          <Content className="w-full">
            <Back className="w-full">
              <BackContent className="w-full">
                <S.Divider className="mt-[4rem] w-full flex flex-row items-center gap-2 justify-start h-[4rem]">
                  {Icon}
                  <ProjectType>{Title}</ProjectType>
                </S.Divider>
                <S.Divider className="w-full">
                  <p className="text-base text-[#9C9C9C]">{Description}</p>
                </S.Divider>
              </BackContent>
            </Back>
          </Content>
        </Card>
      </>
    );
  }
);

export default ServiceCard;
