import { SFC } from "../../types";
import * as S from '../../styles'
import { cn } from "../../utils";
import { ServiceCard } from "../../components/Cards";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import { memo } from "react";

export const ServicePage : SFC = ({ClassName}) => {
    return (
        <>
            <S.Container className={cn("flex justify-center items-center md:py-40 py-4 md:px-0 px-4", ClassName)}>
                <S.Content className="w-full md:w-10/12 flex justify-center items-center flex-col ">
                   <S.Divider className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center">
                       <S.Span className="text-[30px]">Connect with me to turn ideas into impactful solutions.</S.Span>
                   </S.Divider>
                   <S.Divider className="title text-2lg text-center mb-20">
                       <h1>Services</h1>
                   </S.Divider>
                   <S.Divider className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-[1rem]  ">
                       <ServiceCard Icon={<PhoneAndroidIcon/>} Title="Mobile Application" Description="Building mobile applications that combine seamless functionality with an exceptional user experience."/>
                       <ServiceCard Icon={<DevicesIcon/>} Title="Responsive Web Application" Description="Crafting responsive web designs that adapt beautifully to every screen and enhance user engagement."/>
                       <ServiceCard Icon={<ComputerIcon/>} Title="Desktop Application" Description="Delivering powerful and user-friendly desktop solutions tailored for efficiency and innovation."/>
                       <ServiceCard Icon={<DesignServicesIcon/>} Title="UI/UX" Description="Creating user-centric designs that are seamless, impactful, and delightful to experience."/>
                   </S.Divider>
               </S.Content>
            </S.Container>
        </>
    )
}
export default memo(ServicePage)