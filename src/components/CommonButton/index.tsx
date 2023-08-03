import { Button } from "@mui/material";

function CommonButton({children, color, disabled, size, sx, variant}: any){
    return (
        <Button
            color={color}
            disabled={disabled}
            size={size}
            variant={variant}
            sx={sx}>
            {children}
        </Button>
    )
}

export default CommonButton;