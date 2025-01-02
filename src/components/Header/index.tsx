import { ButtonType, SFC } from "../../types";
import * as S from '../../styles'
import { cn } from "../../utils";

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { CustomIconButton } from "../Buttons";
import { useToggle } from "../../hooks";

export const Header: SFC = ({ClassName}) => {
    const [show, toggleShow] = useToggle(false)
    return (
        <>
            <S.Container className={cn("top-0 absolute shadow-lg", ClassName)}>
                <S.Content className="topcon border-b-[1px] bg-[#161616] border-[#9C9C9C] w-full flex-col flex h-12 flex justify-center items-center fixed z-10">
                    <S.Divider className="w-full justify-between flex flex-col md:flex-row w-full md:w-10/12">
                        <S.Divider className="md:w-1/2 w-full flex md:justify-start justify-center items-center">
                            <S.Span className={`text-[${S.colors.primary}]`}>Mark Dinglasa.</S.Span>
                        </S.Divider>
                        <S.Divider className=" w-full md:w-1/2 md:justify-end justify-center flex  ">
                            <CustomIconButton 
                                Label="LinkedIn"
                                Title="LinkedIn"
                                Href="https://www.linkedin.com/in/ryan-mark-d-manos-752894271/"
                                Icon={<LinkedInIcon  className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`} />} 
                                Type={ButtonType.button}
                            />
                            <CustomIconButton 
                                Label="Instagram"
                                Title="Instagram"
                                Href="https://www.instagram.com/mark.ding1asa/"
                                Icon={<InstagramIcon  className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`} />} 
                                Type={ButtonType.button}
                            />
                            <CustomIconButton 
                                Label="GitHub"
                                Title="GitHub"
                                Href="https://github.com/markdinglasa/"
                                Icon={<GitHubIcon  className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`} />} 
                                Type={ButtonType.button}
                            />
                            <CustomIconButton 
                                Label="Email"
                                Title="Email"
                                Icon={<EmailIcon  className={`text-[${S.colors.secondary}] hover:text-[#696969] ease-in-out duration-700`} />} 
                                Type={ButtonType.button}
                                OnClick={toggleShow}
                            />
                            <S.Divider className={`transition-all ease-in-out duration-300 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-0'} flex justify-center items-center`}>
                                {show && <S.Span className="text-sm text-[#9C9C9C]">ryanmark.dinglasa@gmail.com</S.Span>}
                            </S.Divider>
                        </S.Divider>
                    </S.Divider>
                </S.Content>
            </S.Container>
        </>
    )
}