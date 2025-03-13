import { ButtonVariant, RouteChannel, SFC } from "../../types";
import * as S from '../../styles'
import { twMerge } from "tailwind-merge";
import { CustomButton, Footer, SkillsDisplay } from "../../components";
import { ServicePage } from "../Services";
import Resume from '../../assets/pdf/Resume.pdf'
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils";
import { memo } from "react";

export const HomePage: SFC = ({ ClassName }) => {
    const currentDate = formatDate(new Date().toString());
    const navigate = useNavigate();

    return (
        <S.Container className={twMerge(`overflow-hidden w-full h-full overflow-x-hidden box-border`, ClassName)}>
            <S.Container className="w-full h-full max-w-full">
                <S.Content className="flex flex-row py-40 flex-wrap">
                    <S.Divider className="w-full flex justify-center items-center max-w-full">
                        <S.Divider className="w-full flex flex-col justify-center items-center max-w-full">
                            <S.Divider className="w-full items-center flex justify-center max-w-full">
                                <h1 className="font-bold uppercase text-zinc-400 text-[45px] flex md:flex-row flex-col text-center break-words">
                                    <S.Span>M a r k</S.Span>
                                    <S.Span className="md:ml-5">D i n g l a s a</S.Span>
                                </h1>
                            </S.Divider>
                            <S.Span className="text-[20px]">Your Partner in IT Excellence</S.Span>
                            <S.Divider className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center max-w-full">
                                <S.Span className="text-[30px] break-words">
                                    Designing intuitive user experiences and engineering, scalable software solutions to bring ideas to life.
                                </S.Span>
                            </S.Divider>
                            <S.Divider className="flex justify-center items-center mt-10 flex-row p-2 w-full md:w-4/6 text-center gap-2 max-w-full">
                                <CustomButton text="Projects" color="primary" morph={false} variant={ButtonVariant.contained} onClick={() => navigate(RouteChannel.PROJECTS)} />
                                <CustomButton
                                    text="CV"
                                    color="primary"
                                    morph={false}
                                    variant={ButtonVariant.outlined}
                                    onClick={() => {
                                        const link = document.createElement('a');
                                        link.href = Resume;
                                        link.download = `${currentDate}-mark-dinglasa-resume.pdf`;
                                        document.body.appendChild(link);
                                        link.click();
                                        document.body.removeChild(link);
                                    }}
                                />
                            </S.Divider>
                        </S.Divider>
                    </S.Divider>
                </S.Content>
                <S.Content className="w-full bg-[#262626] flex flex-col md:flex-row justify-evenly items-center max-w-full py-5">
                   <SkillsDisplay/>
                </S.Content>
            </S.Container>
            <S.Container className="w-full h-full max-w-full">
                <ServicePage />
            </S.Container>
            <S.Container className="w-full flex items-center justify-center pb-[1rem] md:px-0 px-[1rem]  max-w-full">
                <Footer/>
            </S.Container>
        
        </S.Container>
    );
};
//<EmailIcon /><a href="mailto:ryanmark.dinglasa%40gmail.com" className="ml-3">ryanmark.dinglasa@gmail.com</a>

export default memo(HomePage)