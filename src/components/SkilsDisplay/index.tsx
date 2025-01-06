import Marquee from 'react-fast-marquee'
import * as S from '../../styles'
import { SFC } from '../../types'
import { cn } from '../../utils'

import ReactJS from '../../assets/svg/react_js.svg'
import PHP from '../../assets/svg/php.svg'
import Python from '../../assets/svg/python-127-svgrepo-com.svg'
import NodeJS from '../../assets/svg/node_js.svg'
import ExpressJS from '../../assets/svg/express-svgrepo-com.svg'
import ElectronJS from '../../assets/svg/electron-svgrepo-com.svg'
import TypeScript from '../../assets/svg/typescript-16-svgrepo-com.svg'
import TailwindCSS from '../../assets/svg/tailwind-svgrepo-com.svg'
import JavaScript from '../../assets/svg/javascript-16-svgrepo-com.svg'
import Angular from '../../assets/svg/angular-svgrepo-com.svg'
import Bootstrap from '../../assets/svg/bootstrap-fill-svgrepo-com.svg'
import CSS from '../../assets/svg/css-16-svgrepo-com.svg'
import Docker from '../../assets/svg/docker-16-svgrepo-com.svg'
import Git from '../../assets/svg/git-svgrepo-com.svg'
import HTML from '../../assets/svg/html-16-svgrepo-com.svg'
import MongoDB from '../../assets/svg/mongodb-svgrepo-com.svg'
import MySQL from '../../assets/svg/mysql-svgrepo-com.svg'
import Flask from '../../assets/svg/flask-svgrepo-com.svg'

export const SkillsDisplay: SFC = ({ClassName}) => {
    return (
        <S.Container className={cn("flex flex-row text-[#9C9C9C]",ClassName)}>
            <Marquee className="overflow-hidden flex  items-center w-full">
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex-shrink-0">
                    <S.Image src={ReactJS} className="p-2  " />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex items-center justify-center flex-shrink-0 flex-col">
                        <S.Image src={NodeJS} className='p-2 '/>
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex items-center justify-center flex-shrink-0 flex-col">
                        <S.Image src={ExpressJS} className='p-2 '/>
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex items-center justify-center flex-shrink-0 flex-col">
                        <S.Image src={TypeScript} className='p-3 '/>
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex items-center justify-center flex-shrink-0 flex-col">
                        <S.Image src={JavaScript} className='p-3 '/>
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex items-center justify-center flex-shrink-0 flex-col">
                        <S.Image src={ElectronJS} className='p-2 '/>
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex items-center justify-center flex-shrink-0 flex-col">
                        <S.Image src={TailwindCSS} className='p-2 '/>
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex-shrink-0">
                        <S.Image src={PHP} className="p-2" />
                    </S.Divider>
                </S.Divider>
                <S.Divider className="w-44 flex items-center justify-center">
                    <S.Divider className="h-24 w-24 text-center flex-shrink-0">
                        <S.Image src={Python} className="p-2" />
                    </S.Divider>
                </S.Divider>
                </Marquee>
        </S.Container>
    )
}