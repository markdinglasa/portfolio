import { MenuProps, SFC } from "../../types";
import * as S from './Styles'

export const Menu: SFC<MenuProps> = ({icon, label, onClick}) => {
    return (
        <>
            <button className="menu  mb-2 w-full bg-white hover:bg-slate-200 rounded-md ease-in-out duration-300 cursor-pointer" onClick={onClick}>
                <div className="flex items-center p-2 ">
                    <S.Icon path={icon} size={'30px'} />
                    <label className="ml-2 font-psemibold text-lg text-primary cursor-pointer">{label}</label>
                </div>
            </button>
        </>
    )
}