
import { SFC } from "../../types";
import * as S from '../../styles/Styles'
import { twMerge } from "tailwind-merge";
import EmailIcon from '@mui/icons-material/Email';
import { PageBreadCrumbs } from "../../components";
import { useNavigate } from "react-router-dom";

export const HomePage: SFC = ({ ClassName }) => {
    const navigate = useNavigate()
    const links = [
        { Text: 'Linked In', Href:"https://www.linkedin.com/in/ryan-mark-d-manos-752894271/" },
        { Text: 'Instagram', Href: "https://www.instagram.com/mark.ding1asa/" },
        { Text: 'Github', Href: "https://github.com/emperorkira/" },
    ]
    return (
        <>
            <S.Container className={twMerge("bg-[#161616] text-[#9c9c9c]", ClassName)}>
                <S.Container className={`flex w-screen h-screen justify-start flex-col items-start `}>
                    <S.Content className="topcon  border-b-[1px] border-[#9C9C9C] w-full flex-col flex h-16 flex justify-center items-center">
                        <S.Divider className="w-full justify-between flex flex-col md:flex-row w-full md:w-10/12">
                            <S.Divider className="md:w-1/2 w-full flex md:justify-start justify-center items-center">
                                <EmailIcon /> <span className="ml-3"> ryanmark.dinglasa@gmail.com </span>
                            </S.Divider>
                            <S.Divider className=" w-full md:w-1/2 justify-end flex ">
                                <PageBreadCrumbs Links={links} Active={"Portfolio"}/>
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
                                    <span className="text-[30px]"> and engineering scalable software solutions to</span>
                                    <span className="text-[30px]"> bring ideas to life.</span>
                                </S.Divider>
                            </S.Divider>
                        </S.Divider>
                    </S.Content>

                    <S.Content className="w-full h-32 bg-[#262626] flex flex-col justify-center items-center  md:flex-row">
                        <S.Divider className=" h-24 w-24 text-center p-2">
                            <svg viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full text-sm me-0 text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
                            <span>  React JS</span>
                        </S.Divider>
                        <S.Divider className=" h-24 w-24 text-center p-2 ">
                            <svg  className="relative -mt-2 w-full text-sm me-0 fill-current text-brand dark:text-brand-dark flex origin-center transition-all ease-in-out" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >
                                <g>
                                    <path d="M42.3,11.8,25.7,2.4a4,4,0,0,0-3.4,0L5.7,11.8A3.4,3.4,0,0,0,4,14.7V33.3a3.4,3.4,0,0,0,1.7,2.9l4.4,2.5a7.2,7.2,0,0,0,3.8,1c3.1,0,4.9-1.9,4.9-5.1V16.3a.5.5,0,0,0-.5-.5H16.2a.5.5,0,0,0-.5.5V34.6c0,1.5-1.5,2.9-3.9,1.7L7.2,33.7a.5.5,0,0,1-.2-.4V14.7a.8.8,0,0,1,.2-.5L23.7,4.9h.6l16.5,9.3a.8.8,0,0,1,.2.5V33.3a.5.5,0,0,1-.2.4L24.3,43a.6.6,0,0,1-.6,0l-4.2-2.4a.3.3,0,0,0-.4,0l-2.5,1.1c-.3.1-.7.2.1.7l5.6,3.1a3.1,3.1,0,0,0,3.4,0l16.6-9.3A3.4,3.4,0,0,0,44,33.3V14.7A3.4,3.4,0,0,0,42.3,11.8Z"/>
                                    <path d="M29.1,30.3c-4.4,0-5.3-1-5.7-3.1a.4.4,0,0,0-.4-.4H20.8a.4.4,0,0,0-.4.4c0,2.7,1.5,6,8.7,6,5.2,0,8.2-2,8.2-5.5s-2.4-4.5-7.5-5.1-5.6-1-5.6-2.2.4-2.2,4.2-2.2,4.7.7,5.2,2.9a.5.5,0,0,0,.5.4h2.1l.4-.2a.4.4,0,0,0,.1-.3c-.3-3.9-3-5.7-8.3-5.7s-7.5,2-7.5,5.2,2.8,4.5,7.3,5,5.9,1.2,5.9,2.3S32.6,30.3,29.1,30.3Z"/>
                                </g>
                            </svg>
                            <span>  Node JS</span>
                        </S.Divider>

                    </S.Content>
                </S.Container>
            </S.Container>
        </>
    );
};
