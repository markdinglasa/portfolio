import { SFC } from "../../types";
import * as S from "../../styles";
import { cn } from "../../utils";
import { ServiceCard, ServiceCardSkeleton } from "../../components/Cards";
import { Fragment, memo, Suspense } from "react";
import { ServiceData } from "@/constants";

export const ServicePage: SFC = ({ ClassName }) => {
  return (
    <>
      <S.Container
        className={cn(
          "flex justify-center items-center md:py-40 py-4 md:px-0 px-4",
          ClassName
        )}
      >
        <S.Content className="w-full md:w-10/12 flex justify-center items-center flex-col ">
          <S.Divider className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center">
            <S.Span className="text-[30px] ">
              Connect with me to turn ideas into impactful solutions.
            </S.Span>
          </S.Divider>
          <S.Divider className="title text-2lg text-center mb-20">
            <h1 className="font-bold uppercase  text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words">
              S e r v i c e s
            </h1>
          </S.Divider>
          <S.Divider className="w-full flex flex-col lg:flex-row justify-center md:justify-start items-center md:items-start gap-4   overflow-visible py-[5rem] px-2">
            {ServiceData.map((data, index) => (
              <Fragment key={index}>
                <Suspense fallback={<ServiceCardSkeleton />}>
                  <ServiceCard
                    ClassName=" w-full shadow-lg "
                    Icon={<data.icon />}
                    Title={data.title}
                    Description={data.description}
                  />
                </Suspense>
              </Fragment>
            ))}
          </S.Divider>
        </S.Content>
      </S.Container>
    </>
  );
};
export default memo(ServicePage);
