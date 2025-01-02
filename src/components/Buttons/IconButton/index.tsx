import { Badge, IconButton, Tooltip } from "@mui/material";
import { CircleButtonProps, SFC } from "../../../types";

export const CustomIconButton : SFC<CircleButtonProps> = ({ClassName, OnClick, Icon, Type, Title='', Disabled=false, Href= '', Label = ""}) => {

    return (
        <>
        <div className={ClassName}>
            <Tooltip title={Title} >
                <IconButton 
                onClick={OnClick} 
                type={Type} 
                disabled={Disabled}
                target="_blank" 
                href={Href}
                aria-label={Label}
                >
                    <Badge >
                        {Icon}
                    </Badge>
                </IconButton>
            </Tooltip>
        </div>
        </>
    )
}