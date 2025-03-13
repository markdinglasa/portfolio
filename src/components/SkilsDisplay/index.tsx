import Marquee from 'react-fast-marquee'
import * as S from '../../styles'
import { SFC } from '../../types'
import { cn } from '../../utils'

import Connex from '../../assets/svg/connex-logo.svg'
import Innosoft from '../../assets/images/innosoft-logo2.png'
import RTM from '../../assets/svg/rtm-logo.svg'
import Philsca from '../../assets/images/philsca-logo.png'
import Lingua from '../../assets/images/lingua-logo.png'
import Himsog from '../../assets/images/himsog.png'
import Iskalar from '../../assets/images/iskalar.png'
//import Bootstrap from '../../assets/svg/bootstrap-fill-svgrepo-com.svg'
//import CSS from '../../assets/svg/css-16-svgrepo-com.svg'
//import Docker from '../../assets/svg/docker-16-svgrepo-com.svg'
//import Git from '../../assets/svg/git-svgrepo-com.svg'
//import HTML from '../../assets/svg/html-16-svgrepo-com.svg'
//import MongoDB from '../../assets/svg/mongodb-svgrepo-com.svg'
//import MySQL from '../../assets/svg/mysql-svgrepo-com.svg'
//import Flask from '../../assets/svg/flask-svgrepo-com.svg'

export const SkillsDisplay: SFC = ({ClassName}) => {
    return (
        <S.Container className={cn("flex flex-row text-[#9C9C9C]",ClassName)}>
            <Marquee className="overflow-hidden flex items-center w-full ">
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex-shrink-0 overflow-y-hidden">
                        <S.Image src={Connex} className="p-4  " />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center ">
                    <S.Divider className="h-24 w-24 text-center items-center flex justify-centerflex-shrink-0 overflow-y-hidden">
                        <S.Image src={Innosoft} className="p-1" />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center ">
                    <S.Divider className="h-24 w-24 text-center items-center flex justify-centerflex-shrink-0 overflow-y-hidden">
                        <S.Image src={RTM} className="p-2" />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center ">
                    <S.Divider className="h-24 w-24 text-center items-center flex justify-center flex-shrink-0 overflow-y-hidden relative">
                        <S.Image
                        src={Philsca}
                        className="p-5 mix-blend-multiply" // Apply blend mode
                        />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center ">
                    <S.Divider className="h-28 w-40 text-center items-center flex justify-center flex-shrink-0 overflow-y-hidden relative">
                        <S.Image
                        src={Iskalar}
                        className="p-4 h-24 w-44" // Apply blend mode
                        />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center ">
                    <S.Divider className="h-24 w-24 text-center items-center flex justify-center flex-shrink-0 overflow-y-hidden relative">
                        <S.Image
                        src={Lingua}
                        className="p-1" // Apply blend mode
                        />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center ">
                    <S.Divider className="h-24 w-24 text-center items-center flex justify-center flex-shrink-0 overflow-y-hidden relative">
                        <S.Image
                        src={Himsog}
                        className="" // Apply blend mode
                        />
                    </S.Divider>
                </S.Divider>
            </Marquee>
        </S.Container>
    )
}