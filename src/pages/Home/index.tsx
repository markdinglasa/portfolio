import { ButtonVariant, SFC } from "../../types";
import * as S from '../../styles'
import { twMerge } from "tailwind-merge";

import { CustomButton, Footer, SkillsDisplay } from "../../components";
import { ServicePage } from "../Services";

export const HomePage: SFC = ({ ClassName }) => {

    return (
        <>
            <S.Container className={twMerge(`bg-[#161616] text-[#9C9C9C]`, ClassName)}>
                <S.Container className="w-full h-full">
                    <S.Content className="w-full h-[750px] flex flex-row py-5">
                        <S.Divider className="w-full flex justify-center items-center">
                            <S.Divider className="w-full flex flex-col justify-center items-center p-10 ">
                                <h1 className="font-bold uppercase text-zinc-400 text-[45px] flex md:flex-row flex-col text-center">
                                    <S.Span>M a r k</S.Span>
                                    <S.Span className="md:ml-5">D i n g l a s a</S.Span>
                                </h1>
                                <S.Span className="text-[20px]" >Your Partner in IT Excelence</S.Span>
                                <S.Divider className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center">
                                    <S.Span className="text-[30px]">Designing intuitive user experiences and engineering, scalable software solutions to bring ideas to life.</S.Span>
                                </S.Divider>
                                <S.Divider className="flex justify-center items-center mt-10 flex-row p-2 w-full md:w-4/6 text-center gap-2">
                                    <CustomButton text="Projects" color="primary" morph={false} variant={ButtonVariant.contained}/>
                                    <CustomButton text="CV" color="primary" morph={false} variant={ButtonVariant.outlined}/>
                                </S.Divider>
                            </S.Divider>
                        </S.Divider>
                    </S.Content>
                    <S.Content className="w-full bg-[#262626] flex flex-col md:flex-row justify-evenly items-center p-3">
                        <SkillsDisplay/>
                    </S.Content>
                    <ServicePage ClassName="w-screen"/>
                </S.Container>
                <S.Content className="w-full  p-3 justify-center flex items-center">
                    <Footer/>
                </S.Content>
              
            </S.Container>
        </>
    );
};
//<EmailIcon /><a href="mailto:ryanmark.dinglasa%40gmail.com" className="ml-3">ryanmark.dinglasa@gmail.com</a>