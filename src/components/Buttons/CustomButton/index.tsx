import { ButtonType, ButtonVariant, SFC } from "../../../types";
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
    variant?: ButtonVariant
}

export const CustomButton : SFC<ButtonProps> = ({ ClassName,
    color ='primary', 
    dirty = false,     
    disabled = false,
    icon,
    onClick,
    text,
    type = ButtonType.button,
    variant = ButtonVariant.contained,
    morph = true,
    child
}) => {
      
    const CustomColor = () => {
        if (color === 'primary') return { bg: S.colors.primary, hover: S.colors.primaryHover, text: `text-[#161616]` }
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
            variant={variant}
            disabled={disabled || dirty}
            className={cn(" flex items-center justify-center h-10 rounded-md shadow-none border-red" + ClassName)}
            sx={{
                minWidth:'120px',
                border: variant===ButtonVariant.contained? 'none': `2px solid ${CustomColor().bg}`,
               
                fontFamily:'Roboto',
                borderRadius:'10rem',
                textTransform:'none',
                
                background: variant!==ButtonVariant.contained? 'none': CustomColor().bg,
                '&:hover': { 
                    background: variant!==ButtonVariant.contained? 'rgba(69,69,69,0.2)':CustomColor().hover,
                    border: variant===ButtonVariant.contained? 'none': `2px solid ${CustomColor().hover}`,
                },
                opacity: disabled || dirty ? 0.6 : 1, 
                cursor: disabled || dirty ? 'not-allowed' : 'pointer',
                transition:'ease-in-out 0.3s',
               
            }}
        >
            {child}
            <span className={`font-roboto ${variant!==ButtonVariant.contained? 'text-[#E9C6A9]' : CustomColor().text}`}>{text}</span>
        </Button>
        </S.Container>
            { morph && <S.Container className="md:hidden block">
            <CircleButton OnClick={onClick} IsNotification={false} Icon={icon} Type={type} ClassName={disabled?'hidden':'block'} Disabled={disabled}/>
        </S.Container> }
        </>
    )
}