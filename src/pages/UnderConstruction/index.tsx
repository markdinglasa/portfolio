import { useNavigate } from "react-router-dom";
import { SFC } from "../../types";
import * as S from "../../styles";
import { memo } from "react";

export const UnderConstruction: SFC = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container className="w-full h-screen justify-center items-center flex">
        <S.Main className="grid place-items-center px-6 py-24 sm:py-56 lg:px-8">
          <S.Content className="text-center">
            <S.P className="text-base font-semibold text-slate-100/50">423</S.P>
            <S.Divider className="flex items-center justify-center">
              <S.H1 className="mt-4 text-3xl h-16 font-bold tracking-tight text-primary sm:text-5xl ">
                Opps!
              </S.H1>
            </S.Divider>
            <S.P className="mt-6 text-base leading-7 text-slate-100/40">
              Sorry, this page is still under maintenance.
            </S.P>
            <S.Content className="mt-10 flex items-center justify-center gap-x-6 text-slate-100/50">
              <button onClick={() => navigate("/")} className="">
                Home
              </button>
            </S.Content>
          </S.Content>
        </S.Main>
      </S.Container>
    </>
  );
};
export default memo(UnderConstruction);
