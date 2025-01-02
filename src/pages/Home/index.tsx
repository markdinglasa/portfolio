
import { ButtonType, SFC } from "../../types";
import * as S from '../../styles'
import { twMerge } from "tailwind-merge";
import RTMLogo from '../../assets/svg/rtm-logo.svg'
import ConnextLogo from '../../assets/svg/connex-logo.svg'
import PhilscaLogo from '../../assets/images/philsca-logo.png'
import InnosoftLogo from  '../../assets/images/innosoft-logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinguaLogo from '../../assets/images/lingua-logo.png'
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProjectPage } from "../Projects";
import { CustomButton, CustomIconButton } from "../../components";

export const HomePage: SFC = ({ ClassName }) => {
    const navigate = useNavigate()
    return (
        <>
            <S.Container className={twMerge(`bg-[${S.colors.background}] text-[${S.colors.secondary}]`, ClassName)}>
                <S.Container className={`flex w-screen h-screen justify-start flex-col items-start `}>
                    <S.Content className="topcon  border-b-[1px] border-[#9C9C9C] w-full flex-col flex h-16 flex justify-center items-center">
                        <S.Divider className="w-full justify-between flex flex-col md:flex-row w-full md:w-10/12">
                            <S.Divider className="md:w-1/2 w-full flex md:justify-start justify-center items-center">
                                <span className={`text-[${S.colors.primary}]`}>Mark Dinglasa.</span>
                            </S.Divider>
                            <S.Divider className=" w-full md:w-1/2 md:justify-end justify-center flex  ">
                                <CustomIconButton 
                                    Label="instagram"
                                    Href="https://www.linkedin.com/in/ryan-mark-d-manos-752894271/"
                                    Icon={<LinkedInIcon  className={`text-[${S.colors.secondary}] hover:text-[${S.colors.hover}] ease-in-out duration-700`} />} 
                                    Type={ButtonType.button}
                                />
                                <CustomIconButton 
                                    Label="instagram"
                                    Href="https://www.instagram.com/mark.ding1asa/"
                                    Icon={<InstagramIcon  className={`text-[${S.colors.secondary}] hover:text-[${S.colors.hover}] ease-in-out duration-700`} />} 
                                    Type={ButtonType.button}
                                />
                                <CustomIconButton 
                                    Label="GitHub"
                                    Href="https://github.com/markdinglasa/"
                                    Icon={<GitHubIcon  className={`text-[${S.colors.secondary}] hover:text-[${S.colors.hover}] ease-in-out duration-700`} />} 
                                    Type={ButtonType.button}
                                />
                            </S.Divider>
                        </S.Divider>
                    </S.Content>
                    <S.Content className="w-full h-[600px] flex flex-row">
                        <S.Divider className="w-full flex justify-center items-center">
                            <S.Divider className="w-full flex flex-col justify-center items-center p-10 ">
                                <h1 className="font-bold uppercase text-zinc-400 text-[45px] flex md:flex-row flex-col text-center">
                                    <span>M a r k</span>
                                    <span className="md:ml-5">D i n g l a s a</span>
                                </h1>
                                <span className="text-[20px]" >Your Partner in IT Excelence</span>
                                <S.Divider className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center">
                                    <span className="text-[30px]">Designing intuitive user experiences and engineering, scalable software solutions to bring ideas to life.</span>
                                </S.Divider>
                                <CustomButton text="Need Assistance?" color="primary" morph={false}/>
                            </S.Divider>
                        </S.Divider>
                    </S.Content>
                    <S.Content className="w-full bg-[#262626] flex flex-col justify-center p-2 items-center  md:flex-row gap-5">
                        <S.Divider className=" h-24 w-24 text-center p-2 ">
                            <S.Image src={PhilscaLogo} className="p-2 -mt-4" style={{ filter:'grayscale(150%)'}}/>
                        </S.Divider>
                        <S.Divider className=" h-24 w-24 text-center ">
                            <S.Image src={LinguaLogo} className="p-2"/>
                        </S.Divider>
                        <S.Divider className=" h-24 w-40 text-center  items-center flex justify-center">
                            <S.Image src={InnosoftLogo} className="" style={{ filter:'grayscale(90%)'}}/>
                        </S.Divider>
                        <S.Divider className=" h-24 w-24 text-center p-2 ">
                            <S.Image src={RTMLogo} className="p-2"/>
                        </S.Divider>
                        <S.Divider className=" h-24 w-24 text-center p-2 ">
                            <S.Image src={ConnextLogo} className="p-2"/>
                        </S.Divider>
                    </S.Content>
                    <ProjectPage/>
                </S.Container>
            </S.Container>
        </>
    );
};
//<EmailIcon /><a href="mailto:ryanmark.dinglasa%40gmail.com" className="ml-3">ryanmark.dinglasa@gmail.com</a>