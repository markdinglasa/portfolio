
import { SFC } from "../../types";
import * as S from '../../styles/Styles'
import { twMerge } from "tailwind-merge";
import EmailIcon from '@mui/icons-material/Email';
import { PageBreadCrumbs } from "../../components";
import RTMLogo from '../../assets/svg/rtm-logo.svg'
import ConnextLogo from '../../assets/svg/connex-logo.svg'
import PhilscaLogo from '../../assets/images/philsca-logo.png'
import InnosoftLogo from  '../../assets/images/innosoft-logo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from "@mui/material";

export const HomePage: SFC = ({ ClassName }) => {
      
    return (
        <>
            <S.Container className={twMerge("bg-[#161616] text-[#9c9c9c]", ClassName)}>
                <S.Container className={`flex w-screen h-screen justify-start flex-col items-start `}>
                    <S.Content className="topcon  border-b-[1px] border-[#9C9C9C] w-full flex-col flex h-16 flex justify-center items-center">
                        <S.Divider className="w-full justify-between flex flex-col md:flex-row w-full md:w-10/12">
                            <S.Divider className="md:w-1/2 w-full flex md:justify-start justify-center items-center">
                                <span className="text-[#E9C6A9]">Mark's Portfolio</span>
                            </S.Divider>
                            <S.Divider className=" w-full md:w-1/2 md:justify-end justify-center flex  ">
                                <IconButton target="_blank" href="https://www.linkedin.com/in/ryan-mark-d-manos-752894271/" className="pointer bg-red-300" aria-label="linkedin">
                                    <LinkedInIcon  className="pointer text-[#9C9C9C]" />
                                </IconButton>
                                <IconButton target="_blank" href="https://www.instagram.com/mark.ding1asa/" className="pointer" aria-label="linkedin">
                                    <InstagramIcon  className="pointer text-[#9C9C9C]" />
                                </IconButton>
                                <IconButton target="_blank" href="https://github.com/emperorkira/" className="pointer" aria-label="linkedin">
                                    <GitHubIcon  className="pointer text-[#9C9C9C]" />
                                </IconButton>
                            </S.Divider>
                        </S.Divider>
                    </S.Content>
                    <S.Content className="w-full h-[600px] flex flex-row">
                        <S.Divider className="w-full flex justify-center items-center">
                            <S.Divider className="w-full flex flex-col justify-center items-center p-10 ">
                                <h1 className="font-bold uppercase text-zinc-400 text-[45px] ">M a r k  &nbsp; D i n g l a s a</h1>
                                <span className="text-[20px]" >Your Partner in IT Excelence</span>
                                <S.Divider className="flex justify-center items-center mt-10 flex-col">
                                    <span className="text-[30px]"> Designing intuitive user experiences</span>
                                    <span className="text-[30px]"> and engineering, scalable software solutions to</span>
                                    <span className="text-[30px]"> bring ideas to life.</span>
                                </S.Divider>
                            </S.Divider>
                        </S.Divider>
                    </S.Content>

                    <S.Content className="w-full bg-[#262626] flex flex-col justify-center p-2 items-center  md:flex-row gap-2">
                        <S.Divider className=" h-24 w-24 text-center p-2 ">
                            <S.Image src={PhilscaLogo} className="p-2 -mt-4" style={{ filter:'grayscale(150%)'}}/>
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
                </S.Container>
            </S.Container>
        </>
    );
};
//<EmailIcon /><a href="mailto:ryanmark.dinglasa%40gmail.com" className="ml-3">ryanmark.dinglasa@gmail.com</a>