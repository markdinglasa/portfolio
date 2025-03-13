import { ButtonType, SFC } from "../../types";
import * as S from '../../styles'
import { cn } from "../../utils";
import { CustomIconButton } from "../Buttons";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { useToggle } from "../../hooks";

export const Footer : SFC = ({ClassName}) => {
    const [show, toggleShow] = useToggle(false)
    return (
        <>
            <S.Container className={cn("p-3 rounded-lg border border-gray-100/30 flex md:flex-row flex-col justify-between items-center w-full md:w-10/12", ClassName)}>
                <S.Span className="text-sm text-[#9C9C9C]">Mark Dinglasa &copy; 2025 All rights reserved </S.Span>
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
            </S.Container>
        </>
    )
}