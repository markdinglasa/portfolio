import { SFC } from "../../../types";
import { memo, ReactNode } from "react";
import { Card, Content, Back, BackContent, ProjectType } from "./Styles";

export interface ServiceCardProps {
  Icon: ReactNode;
  Title: string;
  Description: string;
}

export const ServiceCard: SFC<ServiceCardProps> = memo(
  ({ ClassName, Icon, Title, Description }) => {
    return (
      <>
        <Card className={ClassName}>
          <Content className="w-full">
            <Back className="w-full">
              <BackContent className="w-full">
                <div className="mt-[4rem] w-full flex flex-row items-center gap-2 justify-start h-[4rem]">
                  {Icon}
                  <ProjectType>{Title}</ProjectType>
                </div>
                <div className="w-full">
                  <p className="text-base text-[#9C9C9C]">{Description}</p>
                </div>
              </BackContent>
            </Back>
          </Content>
        </Card>
      </>
    );
  }
);

export default ServiceCard;
