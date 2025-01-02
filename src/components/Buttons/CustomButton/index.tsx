import { ButtonType, SFC } from "../../../types";
import * as S from '../../../styles'
import { ReactNode } from "react";
import { Button } from "@mui/material";
import { cn } from "../../../utils";
import { CircleButton } from "../CircleButton";

export interface ButtonProps {
    color?: string;
    dirty?: boolean;
    disabled?: boolean;
    icon?: ReactNode;
    onClick?(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
    text: string;
    type?: ButtonType;
    morph?: boolean
    child?:ReactNode
}

export const CustomButton : SFC<ButtonProps> = ({ ClassName,
    color ='primary', 
    dirty = false,     
    disabled = false,
    icon,
    onClick,
    text,
    type = ButtonType.button,
    morph = true,
    child
}) => {
      
    const CustomColor = () => {
        if (color === 'primary') return { bg: S.colors.primary, hover: S.colors.primaryHover, text: `text-[${S.colors.background}]` }
        if (color === 'green') return { bg: S.colors.palette.green['300'], hover: S.colors.palette.green['400'], text: 'text-white'}
        if (color === 'red') return { bg: S.colors.palette.red['300'], hover: S.colors.palette.red['400'], text: 'text-white'}
        if (color === 'default')  return { bg: 'none', hover: S.colors.palette.neutral['100'],text: 'text-primary' }
        return { bg: 'none', hover: S.colors.palette.neutral['100'],text: 'text-primary' }
    }
    
    return (
        <>
            
        <S.Container className={morph?'md:block hidden':''}>
        <Button
            startIcon={icon}
            type={type}
            onClick={onClick}
            variant="contained"
            disabled={disabled || dirty}
            className={cn(" flex items-center justify-center h-10 rounded-md shadow-none " + ClassName)}
            sx={{
                minWidth:'120px',
                border:'none',
                fontFamily:'Roboto',
                borderRadius:'10rem',
                textTransform:'none',
                background: CustomColor().bg,
                '&:hover': { background: CustomColor().hover },
                opacity: disabled || dirty ? 0.6 : 1, 
                cursor: disabled || dirty ? 'not-allowed' : 'pointer',
                transition:'ease-in-out 0.3s'
            }}
        >
            {child}
            <span className={`font-roboto ${CustomColor().text}`}>{text}</span>
        </Button>
        </S.Container>
            { morph && <S.Container className="md:hidden block">
            <CircleButton OnClick={onClick} IsNotification={false} Icon={icon} Type={type} ClassName={disabled?'hidden':'block'} Disabled={disabled}/>
        </S.Container> }
        </>
    )
}